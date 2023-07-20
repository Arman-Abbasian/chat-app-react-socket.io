import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import Layout from "../components/Layout";
import ChatLayout from "../components/ChatLayout";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  //all users instead of logged user
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  //logged user data
  const [currentUser, setCurrentUser] = useState(undefined);

  //check the logged user exist or not
  useEffect(async () => {
    if (!localStorage.getItem("chat-app-current-user")) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem("chat-app-current-user")
        )
      );
    }
  }, []);
  
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  //get all users instead of logged user
  useEffect(async () => {
    if (currentUser) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <ChatLayout>
      <ChatSectionContainer>
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
      </ChatSectionContainer>
    </ChatLayout>
  );
}

const ChatSectionContainer = styled.div`
width: 1200px;
height:517px;
top: 96px;
gap: 24px;
display:flex;
margin-left:auto;
margin-right:auto
`;
