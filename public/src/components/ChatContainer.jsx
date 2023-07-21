import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";

export default function ChatContainer({ currentChat, socket }) {
  //all messages between currrentUser and currentChat persons
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  // every time that currentUser chage the currentChat the messages satate fill with the chata between this two person
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem("chat-app-current-user")
    );
    const response = await axios.post(recieveMessageRoute, {
      from: data._id,
      to: currentChat._id,
    });
    setMessages(response.data);
  }, [currentChat]);

  useEffect(() => {
    const getCurrentChat = async () => {
      if (currentChat) {
      await JSON.parse(localStorage.getItem("chat-app-current-user"))._id};
    };
    getCurrentChat();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    const data = await JSON.parse(
      localStorage.getItem("chat-app-current-user")
    );
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: data._id,
      msg,
    });
    const response=await axios.post(sendMessageRoute, {
      from: data._id,
      to: currentChat._id,
      message: msg,
    });
    //update the messages with out need the refresh
    const time=response.data.data.createdAt
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg,time });
    setMessages(msgs);
  };
//this section happen when get a message from currentChat person
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg,time:new Date()});
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ChattContainer>
      <div className="Top">
        <div className="UserProfile">
          <div className="User">
                    <span className="formSvgSpan">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.1586 12.6144C12.1286 12.6144 12.1086 12.6144 12.0786 12.6144C12.0286 12.6044 11.9586 12.6044 11.8986 12.6144C8.99859 12.5244 6.80859 10.2444 6.80859 7.43438C6.80859 4.57438 9.13859 2.24438 11.9986 2.24438C14.8586 2.24438 17.1886 4.57438 17.1886 7.43438C17.1786 10.2444 14.9786 12.5244 12.1886 12.6144C12.1786 12.6144 12.1686 12.6144 12.1586 12.6144ZM11.9986 3.74438C9.96859 3.74438 8.30859 5.40438 8.30859 7.43438C8.30859 9.43438 9.86859 11.0444 11.8586 11.1144C11.9086 11.1044 12.0486 11.1044 12.1786 11.1144C14.1386 11.0244 15.6786 9.41438 15.6886 7.43438C15.6886 5.40438 14.0286 3.74438 11.9986 3.74438Z" fill="#382F3B"/>
                      <path d="M12.1696 23.5444C10.2096 23.5444 8.23961 23.0444 6.74961 22.0444C5.35961 21.1244 4.59961 19.8644 4.59961 18.4944C4.59961 17.1244 5.35961 15.8544 6.74961 14.9244C9.74961 12.9344 14.6096 12.9344 17.5896 14.9244C18.9696 15.8444 19.7396 17.1044 19.7396 18.4744C19.7396 19.8444 18.9796 21.1144 17.5896 22.0444C16.0896 23.0444 14.1296 23.5444 12.1696 23.5444ZM7.57961 16.1844C6.61961 16.8244 6.09961 17.6444 6.09961 18.5044C6.09961 19.3544 6.62961 20.1744 7.57961 20.8044C10.0696 22.4744 14.2696 22.4744 16.7596 20.8044C17.7196 20.1644 18.2396 19.3444 18.2396 18.4844C18.2396 17.6344 17.7096 16.8144 16.7596 16.1844C14.2696 14.5244 10.0696 14.5244 7.57961 16.1844Z" fill="#382F3B"/>
                      </svg>
                    </span>
            </div>
            <div className="Name">
              <h3 className="Text">{currentChat.username}</h3>
              <p className="online">سطح کاربری دو</p>
            </div>
        </div>
      </div>
      <div className="Chat">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div className={`message ${message.fromSelf ? "":'messageNotMe'}`}>
                <div className={`content ${message.fromSelf ? "":'contentNotMe'}`} >
                  <p className="MsgText">{message.message}</p>
                  <p className="MsgTime">{new Date(message.time).getHours()}:{new Date(message.time).getMinutes()}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </ChattContainer>
    
  );
}

const ChattContainer = styled.div `
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
padding: 24px;
position:relative;
border-radius: 16px;
border: 1px;
gap: 24px;
background-color: linear-gradient(40.03deg, #FD2F70 6.56%, rgba(255, 255, 255, 0) 31.04%, rgba(255, 255, 255, 0) 73.23%, #FD2F70 100%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
border: 1px solid;
border-image-source: linear-gradient(40.03deg, #FD2F70 6.56%, rgba(255, 255, 255, 0) 31.04%, rgba(255, 255, 255, 0) 73.23%, #FD2F70 100%);
box-shadow: 0px 0px 32px 0px #7D6D721F;

.Top{
  height: 48px;
  gap: 8px;
  display:flex;
  align-items:center;
  .UserProfile{
    display:flex;
    align-items:center;
    gap:8px;
    .User{
      width: 48px;
    height: 48px;
    border-radius: 8px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #7D7D7D;
    }
    }
    .Name{
      display:flex;
      flex-direction:column;
      gap:7px;
    }
    .Text{
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: right;
    color: #4F4F4F;
    }
    .online{
    font-size: 12px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    color: #7D7D7D;               
    }
  }
  .Chat{
  gap: 16px;
  display:flex;
  flex-direction:column;
  flex:1 1 0%;
  padding:10px;
  overflow:auto;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .messageNotMe{
      justify-content:flex-end;
      .contentNotMe{
        background-color: #F2F2F2;
      }
    }
  }
  .message{
    width: 100%;
    gap: 8px;
    display:flex;
  }
  .content{
    max-width: 400px;
  max-height: 120px;
  padding: 12px 16px 4px 16px;
  border-radius: 8px 8px 8px 0px;
  gap: 12px;
  angle: -180 deg;
  background-color: #FD2F7014;
  display:flex'
  flex-direction:column;
  }
  .MsgText{
  font-size: 12px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: right;
  color: #333333;
  }
  .MsgTime{
    font-family: Verdana;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: right;
    color: #7D7D7D;
  }
  

`;
