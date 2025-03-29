import React from "react";
import ChatCardImage from "./chat_card_image";
import { colors } from "../../../utils/theme";

const ChatGift = ({ message, isSender }) => {
  return (
    <div
      className="chat-gift"
      style={{
        alignSelf: isSender ? "flex-start" : "flex-end",
        gridTemplateColumns: isSender ? "auto auto" : "auto",
      }}
    >
      {isSender && (
        <ChatCardImage
          image={message?.user?.photos?.[0]?.url}
          showStatus={false}
          radius="37px"
        />
      )}
      <div
        className="chat-gift-image-container"
        style={{ background: isSender ? colors.inputColor : colors.brand1 }}
      >
        <img src={message.gift.url} />
      </div>
    </div>
  );
};

export default ChatGift;
