import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from "styled-components";
import ChatHeader from './ChatHeader';

function ChatLayout({children,user}) {
  return (
    <LayoutContainer>
        <ChatHeader user={user} />
        {children}
        <Footer />
    </LayoutContainer>
  )
}

export default ChatLayout;

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap:15px;
`;