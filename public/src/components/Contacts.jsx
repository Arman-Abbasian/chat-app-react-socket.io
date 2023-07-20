import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="HeaderText">
            <h3>گفتگوها</h3>
          </div>
          <div>
            {contacts.map((contact, index) => {
              return (
               <div className="Contact">
                 <div
                  key={contact._id}
                  className={`UserProfile ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="User">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="Name">
                  <p className="PersonName">{contact.username}</p>
                    <p className="PersonOnline">{contact.online}</p>
                  </div>
                </div>
                <NavLink className="Link" hrefLang="#"></NavLink>
               </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
width: 384px;
padding: 16px'
border-radius: 16px'
gap: 8px;
display:flex;
flex-direction:column;
box-shadow: 0px 0px 32px 0px #7D6D721F;

.HeaderText{
font-size: 16px;
font-weight: 900;
line-height: 25px;
letter-spacing: 0em;
text-align: right;
color: #FD2F70;
}
.Contact{
padding: 8px;
border-radius: 8px;
display:flex;
justify-content: space-between;
align-items:center;
}
.UserProfile{
  display:flex;
  align-items:center;
  gap:8px;
}
  .User{
    width: 48px;
  height: 48px;
  border-radius: 8px;
  }
  .Name{
    display:flex;
    flex-direction:column;
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
  padding: 8px;
  border-radius: 4px;
  gap: 2px;
  background-color: #F5F5F5;
  font-size: 12px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  color: #FD2F70;
  }
`;
