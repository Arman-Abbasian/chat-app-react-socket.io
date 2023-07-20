import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Contacts({ contacts, changeChat }) {
  //username of logged user
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem("chat-app-current-user")
    );
    setCurrentUserName(data.username);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserName && (
        <Container>
          <div className="HeaderText">
            <h3>گفتگوها</h3>
          </div>
          {/* all users instead of logged user */}
          <div className="Contacts">
            {contacts.map((contact, index) => {
              return (
               <div className={`Contact ${index === currentSelected ? "selected" : ""}`}
                  onClick={() => changeCurrentChat(index, contact)}>
                 <div
                  key={contact._id}
                  className='UserProfile'>
                  <div className="User">
                  <span className="formSvgSpan">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1586 12.6144C12.1286 12.6144 12.1086 12.6144 12.0786 12.6144C12.0286 12.6044 11.9586 12.6044 11.8986 12.6144C8.99859 12.5244 6.80859 10.2444 6.80859 7.43438C6.80859 4.57438 9.13859 2.24438 11.9986 2.24438C14.8586 2.24438 17.1886 4.57438 17.1886 7.43438C17.1786 10.2444 14.9786 12.5244 12.1886 12.6144C12.1786 12.6144 12.1686 12.6144 12.1586 12.6144ZM11.9986 3.74438C9.96859 3.74438 8.30859 5.40438 8.30859 7.43438C8.30859 9.43438 9.86859 11.0444 11.8586 11.1144C11.9086 11.1044 12.0486 11.1044 12.1786 11.1144C14.1386 11.0244 15.6786 9.41438 15.6886 7.43438C15.6886 5.40438 14.0286 3.74438 11.9986 3.74438Z" fill="#382F3B"/>
                    <path d="M12.1696 23.5444C10.2096 23.5444 8.23961 23.0444 6.74961 22.0444C5.35961 21.1244 4.59961 19.8644 4.59961 18.4944C4.59961 17.1244 5.35961 15.8544 6.74961 14.9244C9.74961 12.9344 14.6096 12.9344 17.5896 14.9244C18.9696 15.8444 19.7396 17.1044 19.7396 18.4744C19.7396 19.8444 18.9796 21.1144 17.5896 22.0444C16.0896 23.0444 14.1296 23.5444 12.1696 23.5444ZM7.57961 16.1844C6.61961 16.8244 6.09961 17.6444 6.09961 18.5044C6.09961 19.3544 6.62961 20.1744 7.57961 20.8044C10.0696 22.4744 14.2696 22.4744 16.7596 20.8044C17.7196 20.1644 18.2396 19.3444 18.2396 18.4844C18.2396 17.6344 17.7096 16.8144 16.7596 16.1844C14.2696 14.5244 10.0696 14.5244 7.57961 16.1844Z" fill="#382F3B"/>
                    </svg>
                  </span>
                  </div>
                  <div className="Name">
                  <p className="PersonName">{contact.username}</p>
                    <p className="PersonOnline">{contact.online}۱۴۰۰/۱۲/۰۲ |  ۱۲:۳۴</p>
                  </div>
                </div>
                <p className="Link">6</p>
               </div>
              );
            })}
          </div>
          {/*logged user */}
          {/* <div className="current-user">
            <div className="avatar">
            <span className="formSvgSpan">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1586 12.6144C12.1286 12.6144 12.1086 12.6144 12.0786 12.6144C12.0286 12.6044 11.9586 12.6044 11.8986 12.6144C8.99859 12.5244 6.80859 10.2444 6.80859 7.43438C6.80859 4.57438 9.13859 2.24438 11.9986 2.24438C14.8586 2.24438 17.1886 4.57438 17.1886 7.43438C17.1786 10.2444 14.9786 12.5244 12.1886 12.6144C12.1786 12.6144 12.1686 12.6144 12.1586 12.6144ZM11.9986 3.74438C9.96859 3.74438 8.30859 5.40438 8.30859 7.43438C8.30859 9.43438 9.86859 11.0444 11.8586 11.1144C11.9086 11.1044 12.0486 11.1044 12.1786 11.1144C14.1386 11.0244 15.6786 9.41438 15.6886 7.43438C15.6886 5.40438 14.0286 3.74438 11.9986 3.74438Z" fill="#382F3B"/>
                    <path d="M12.1696 23.5444C10.2096 23.5444 8.23961 23.0444 6.74961 22.0444C5.35961 21.1244 4.59961 19.8644 4.59961 18.4944C4.59961 17.1244 5.35961 15.8544 6.74961 14.9244C9.74961 12.9344 14.6096 12.9344 17.5896 14.9244C18.9696 15.8444 19.7396 17.1044 19.7396 18.4744C19.7396 19.8444 18.9796 21.1144 17.5896 22.0444C16.0896 23.0444 14.1296 23.5444 12.1696 23.5444ZM7.57961 16.1844C6.61961 16.8244 6.09961 17.6444 6.09961 18.5044C6.09961 19.3544 6.62961 20.1744 7.57961 20.8044C10.0696 22.4744 14.2696 22.4744 16.7596 20.8044C17.7196 20.1644 18.2396 19.3444 18.2396 18.4844C18.2396 17.6344 17.7096 16.8144 16.7596 16.1844C14.2696 14.5244 10.0696 14.5244 7.57961 16.1844Z" fill="#382F3B"/>
                    </svg>
                  </span>
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div> */}
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
width: 384px;
height:100%;
padding: 16px;
border-radius: 16px;
gap: 8px;
display:flex;
flex-direction:column;
box-shadow: 0px 0px 32px 0px #7D6D721F;
background-color:white;

.HeaderText{
font-size: 16px;
font-weight: 900;
line-height: 25px;
letter-spacing: 0em;
text-align: right;
color: #FD2F70;
}
.Contacts{
  display:flex;
  flex-direction:column;
  gap:8px;
}
.Contact{
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  display:flex;
  justify-content: space-between;
  align-items:center;
  background-color:white;
  
}
.UserProfile{
  display:flex;
  align-items:center;
  gap:8px;
  cursor:pointer;
}
.selected{
  background-color: #F2F2F2;

}
  .User{
    width: 48px;
  height: 48px;
  border-radius: 8px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #7D7D7D;
  }
  .Name{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:7px;
  }
    .PersonName{
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: #4F4F4F;
    }
    .PersonOnline{
      font-size: 12px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #7D7D7D;
    }
  .Link{
    width: 30px;
    height:30px;
  padding: 8px;
  border-radius: 4px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap: 2px;
  background-color: #F5F5F5;
  font-size: 12px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  color: #FD2F70;
  }
`;
