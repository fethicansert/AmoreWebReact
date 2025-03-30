import React from "react";
import ChatCardImage from "./chat_card_image";
import { colors } from "../../../utils/theme";
import { getTimeFromISO } from "../../../utils/functions";

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
        {!message?.isSending && (
          <span
            className="chat-gift-time"
            style={{
              color: isSender
                ? "rgba(0, 0, 0, .65)"
                : "rgba(255, 255, 255, .8)",
            }}
          >
            {getTimeFromISO("2025-03-26T08:12:23.717Z")}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatGift;
