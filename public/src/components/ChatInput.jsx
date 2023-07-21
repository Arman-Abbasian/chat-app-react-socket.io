import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");


  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <form className="Input" onSubmit={(event) => sendChat(event)}>
      <div className="Actions">
        <button type="submit" className="Button">
        <svg width="24" height="24" viewBox="0 0 24 25" stroke="#FD2F70" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9315 2.69395C24.2675 1.68587 23.3085 0.72679 22.3005 1.06277L0.881754 8.20243C-0.321049 8.60332 -0.283763 10.3174 0.935233 10.6656L11.3524 13.6421L14.3287 24.0592C14.677 25.2783 16.391 25.3156 16.7919 24.1127L23.9315 2.69395ZM22.2523 3.65399L15.5686 23.705L12.598 13.3081L22.2523 3.65399ZM21.3404 2.74212L11.6863 12.3963L1.28958 9.42578L21.3404 2.74212Z" fill="#382F3B"/>
</svg>
        </button>
        <button className="Button">
        <svg width="24" height="24" viewBox="0 0 24 25" stroke="#BDBDBD" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9846 9.73514C22.593 9.34564 21.9599 9.34738 21.5704 9.73893L9.5491 21.8252C7.98948 23.3848 5.45644 23.3848 3.89392 21.8231C2.33257 20.261 2.33257 17.7279 3.89411 16.1664L16.2712 3.72426C17.2449 2.7506 18.828 2.7506 19.8045 3.72637C20.7808 4.70261 20.7808 6.28548 19.8043 7.262L9.55097 17.5152C9.55032 17.5159 9.54975 17.5166 9.5491 17.5173C9.15848 17.9057 8.5272 17.9052 8.13738 17.5154C7.7469 17.1249 7.7469 16.492 8.13738 16.1016L13.0866 11.1514C13.477 10.7608 13.477 10.1276 13.0864 9.73711C12.6958 9.34663 12.0626 9.34667 11.6722 9.73725L6.72303 14.6874C5.55155 15.8588 5.55155 17.7581 6.72313 18.9296C7.89465 20.1011 9.79388 20.1011 10.9655 18.9296C10.9668 18.9282 10.9679 18.9268 10.9692 18.9254L21.2185 8.67616C22.9761 6.91859 22.9761 4.06936 21.2185 2.31179C19.4607 0.555249 16.6116 0.555249 14.8551 2.31179L2.47798 14.754C0.137268 17.0947 0.137268 20.8938 2.47967 23.2374C4.82361 25.5801 8.62273 25.5801 10.9653 23.2376L22.9885 11.1494C23.3779 10.7578 23.3762 10.1246 22.9846 9.73514Z" fill="#382F3B"/>
</svg>

        </button>
        </div>
        <input
        dir="auto"
        className="Inputt"
          type="text"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
      </form>
    </Container>
  );
}

const Container = styled.div`
  .Input{
    width: 100%;
height: 48px;
padding: 12px;
border-radius: 8px;
display:flex;
align-items:center;
justify-content: space-between;
background-color: #EDEDED;
align-content: flex-end;

  }
  .Inputt{
    flex:1 1 0%;
    border:none;
    background-color: #EDEDED;
  }
  input:focus {
    border:none;
    outline:none;
  }
  .Actions{
    display:flex;
    align-items:center;
    gap:8px;
  }
  .Button{
    width: 40px;
height: 40px;
padding: 8px;
border-radius: 8px;
gap: 7px;
border:none;
  }
`;
