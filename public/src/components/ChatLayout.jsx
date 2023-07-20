import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from "styled-components";
import ChatHeader from './ChatHeader';

function ChatLayout({children}) {
  return (
    <LayoutContainer>
        <ChatHeader />
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