import React, { startTransition, useState } from "react";
import {
  CrossCloseIcon,
  ImageAddIcon,
  MicrophoneIcon,
  PauseIcon,
  SendGiftIcon,
  SendImageIcon,
  SendMessageIcon,
} from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import ChatVoiceRecord from "./chat_voice_record";

const ChatInput = ({
  oneScreenChat,
  sendMessage,
  handleImageChange,
  setShowGifts,
  showGifts,
}) => {
  const [messageText, setMessageText] = useState("");
  const [messageTextFocused, setMessageTextFocused] = useState(false);
  const [isShowRecording, setIsShowRecording] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="chat-input-container-wrapper">

      {
        !oneScreenChat ? <>
          <div className="chat-send-image-button">
            <input
              onChange={handleImageChange}
              className="chat-image-input"
              type="file"
              accept="image/*"
            />
            <SendImageIcon />
          </div>

          <div
            className="chat-send-gift-button"
            style={showGifts ? { background: colors.backGround4 } : {}}
            onClick={() => setShowGifts((prev) => !prev)}
          >
            <SendGiftIcon
              color={showGifts ? colors.backGround3 : colors.iconColor}
            />
          </div>
        </> : <div
          className="chat-show-input-buttons"
          onClick={() => setShowButtons((prev) => !prev)}
        >
          <ImageAddIcon
            strokeWidth="3"
            width="25"
            height="25"
            className=""
            color={colors.brand1}
          />
        </div>
      }

      <div
        className="chat-input-container"
        style={{
          background: isShowRecording ? "rgba(221, 136, 207, 0.2)" : "none",
        }}
      >
        {!isShowRecording ? (
          <input
            onKeyUp={(e) => (e.key === "Enter" ? handleSendMessage() : null)}
            className="chat-input"
            placeholder="Hadi mesaj yaz"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onFocus={() => setMessageTextFocused(true)}
            onBlur={() => setMessageTextFocused(false)}
          />
        ) : (
          <ChatVoiceRecord setIsShowRecording={setIsShowRecording} sendVoice={sendMessage} />
        )}
        {
          !isShowRecording &&
          (
            messageTextFocused || messageText ? (
              <SendMessageIcon
                onClick={() => handleSendMessage()}
                className="chat-input-icon chat-send-message-icon"
              />
            ) : (
              <MicrophoneIcon
                className="chat-input-icon"
                color={colors.brand1}
                onClick={handleVoiceRecording}
              />
            ))}
      </div>
    </div>
  );

  function handleVoiceRecording() {
    setIsShowRecording(true);
  }

  function handleSendMessage() {
    if (!messageText) return;
    sendMessage({ text: messageText, messageType: 'text' });
    setMessageText("");
  }
};

export default ChatInput;
