import React from "react";
import { useAuth } from "../../../hooks/use_auth";
import ChatBubble from "./chat_bubble";
import ChatAudio from "./chat_audio";
import ChatImage from "./chat_image";
import ChatGift from "./chat_gift";

const ChatType = ({ message, handleUnlockMessage }) => {
  //CONTEXT
  const { auth } = useAuth();

  //COSTANT
  const isSender = auth?.id !== message?.user?.id;

  return getMessage();

  //RETURN MESSAGE - CHAT ACCORDING TO GIVEN MESSAGE
  function getMessage() {
    switch (message?.type) {
      case "text":
        return <ChatBubble message={message} isSender={isSender} />;
      case "audio":
        return <ChatAudio message={message} isSender={isSender} />;
      case "image":
        return (
          <ChatImage
            message={message}
            isSender={isSender}
            handleUnlockMessage={handleUnlockMessage}
          />
        );
      case "gift":
        return <ChatGift message={message} isSender={isSender} />;
    }
  }
};

export default ChatType;
