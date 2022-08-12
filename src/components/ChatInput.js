import { Button } from "@mui/material";
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
const roomsRef = collection(db, "rooms");
function ChatInput({ channelName, channelId }) {
  const inputRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    const col = collection(roomsRef, channelId, "messages");
    console.log("cccc", col);
    await addDoc(col, {
      message: inputRef.current.value,
      timestamp: serverTimestamp(),
      user: "johhn",
      userImage: " ",
    });
    inputRef.current.value = "";
  };
  return (
    <ChatInputContainer>
      <form>
        <input type="text" placeholder={`Message #Room`} ref={inputRef} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;