import React, { startTransition, useState } from "react";
import {
  CrossCloseIcon,
  MicrophoneIcon,
  PauseIcon,
  SendGiftIcon,
  SendImageIcon,
  SendMessageIcon,
} from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";

const ChatInput = ({
  sendText,
  handleImageChange,
  setShowGifts,
  showGifts,
}) => {
  const [messageText, setMessageText] = useState("");
  const [messageTextFocused, setMessageTextFocused] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  console.log(isRecording);

  return (
    <div className="chat-input-container-wrapper">
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

      <div
        className="chat-input-container"
        style={{
          background: isRecording ? "rgba(221, 136, 207, 0.2)" : "none",
        }}
      >
        {!isRecording ? (
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
          <div className="chat-voice-recording">
            <span>Ses Kaydediliyor...</span>

            <div className="chat-voice-recording-container">

              <div className="chat-voice-recording-cancel-button" onClick={() => setIsRecording(false)}>
                <CrossCloseIcon width="16px" height="16px" />
              </div>

              <div className="chat-voice-record"></div>

              <div className="chat-voice-recording-pause-button">
                <div className="chat-voice-recording-pause-button-line"></div>
                <div className="chat-voice-recording-pause-button-line"></div>
              </div>

              <div className="chat-voice-recording-send-button">
                <SendMessageIcon width="16" height="16" strokeWidth="1.5" />
              </div>

            </div>
          </div>
        )}
        {
          !isRecording &&
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
    setIsRecording((prev) => !prev);
  }

  function handleSendMessage() {
    if (!messageText) return;

    sendText(messageText);
    setMessageText("");
  }
};

export default ChatInput;
