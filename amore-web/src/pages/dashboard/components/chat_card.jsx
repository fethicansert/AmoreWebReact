import React from "react";
import FlexBox from "../../../copmonents/flex_box";
import { formatTimeAgo } from "../../../utils/functions";
import ChatCardImage from "./chat_card_image";

const ChatCard = ({
  image,
  title,
  text,
  icon,
  time,
  className,
  onClick = null,
  showStatus,
  status,
}) => {
  return (
    <div
      className={`chat-card ${className ? className : ""}`}
      onClick={onClick}
    >
      <ChatCardImage image={image} showStatus={showStatus} status={status} />

      <div className="chat-card-text-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      {icon && icon}
      {!icon && time && (
        <span className="chat-card-time">{formatTimeAgo(time)}</span>
      )}
    </div>
  );
};

export default ChatCard;
