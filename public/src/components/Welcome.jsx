import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
padding: 24px;
border-radius: 16px;
border: 1px;
gap: 24px;
background-color: linear-gradient(40.03deg, #FD2F70 6.56%, rgba(255, 255, 255, 0) 31.04%, rgba(255, 255, 255, 0) 73.23%, #FD2F70 100%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
border: 1px solid;
border-image-source: linear-gradient(40.03deg, #FD2F70 6.56%, rgba(255, 255, 255, 0) 31.04%, rgba(255, 255, 255, 0) 73.23%, #FD2F70 100%);
box-shadow: 0px 0px 32px 0px #7D6D721F;
`;
