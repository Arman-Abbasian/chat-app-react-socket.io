import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from "styled-components";

function Layout({children}) {
  return (
    <LayoutContainer>
        <Header />
        {children}
        <Footer />
    </LayoutContainer>
  )
}

export default Layout;

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;