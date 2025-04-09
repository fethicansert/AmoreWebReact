import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { colors } from "../../../utils/theme";
import { getTimeFromISO } from "../../../utils/functions";
import { BeatLoader } from "react-spinners";
import ChatCardImage from "./chat_card_image";
import {
  AmoreImageLock,
  AmoreImageLockOpen,
} from "../../../assets/svg/svg_package";
import { axiosAmore } from "../../../api/axios";

const ChatImage = ({ message, isSender }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [fontSize, setFontSize] = useState("1rem"); // gereklio im
  const imageContainerRef = useRef();
  
  useLayoutEffect(() => {
    const containerWidth = imageContainerRef?.current?.offsetWidth ?? 0;
    const minFontSize = 0.95; // rem
    const maxFontSize = 1.4; // rem
    const maxWidth = 400;
    const ratio = containerWidth / maxWidth;
    const fontSize =
      ratio * maxFontSize < minFontSize ? minFontSize : ratio * maxFontSize;
    setFontSize(`${fontSize}rem`);
  }, []);

  return (
    <div
      className="chat-image"
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
        ref={imageContainerRef}
        className="chat-image-container"
        style={{ background: isSender ? colors.inputColor : colors.brand1 }}
        onMouseEnter={() => (isSender ? setIsHovered(true) : undefined)}
        onMouseLeave={() => (isSender ? setIsHovered(false) : undefined)}
        onClick={unlockImage}
      >
        <img src={message.dataUrl} />

        {!message?.isSending && (
          <span
            className="chat-image-time"
            style={{
              color: isSender
                ? "rgba(0, 0, 0, .65)"
                : "rgba(255, 255, 255, .8)",
            }}
          >
            {getTimeFromISO("2025-03-26T08:12:23.717Z")}
          </span>
        )}

        {message.isSending && (
          <div className="chat-image-sending">
            <BeatLoader size={30} color={colors.brand1} />
          </div>
        )}

        {isSender && (
          <div className="chat-image-lock">
            {isHovered ? (
              <AmoreImageLockOpen
                size="40%"
                height="none"
                style={{ aspectRatio: "1 / 1", maxWidth: "130px" }}
              />
            ) : (
              <AmoreImageLock
                size="40%"
                style={{ aspectRatio: "1/1", maxWidth: "130px" }}
              />
            )}
            <p style={{ fontSize: fontSize }}>Görmek için tıkla</p>
          </div>
        )}
      </div>
    </div>
  );

  async function unlockImage() {
    try {
      const response = await axiosAmore.post(
        "chat/unlock",
        {message:message.id},
        { useAuth: true }
      );
      console.log(response);

    } catch (e) {     
        console.log(e.response.data.response.message === 'MESSAGE_ALREADY_UNLOCKED');  
    }
  }
};

export default ChatImage;
