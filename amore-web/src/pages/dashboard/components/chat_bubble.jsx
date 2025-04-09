import ChatCardImage from "./chat_card_image";
import { colors } from "../../../utils/theme";
import { BeatLoader } from "react-spinners";
import { getTimeFromISO } from "../../../utils/functions";
import { ImageViewedIcon } from "../../../assets/svg/svg_package";

const ChatBubble = ({ message, isSender }) => {
  const messageStyle = {
    color: isSender ? colors.darkText : colors.whiteText,
    fontWeight: isSender ? 300 : 600,
    fontSize: ".85rem",
    lineHeight: "20px",
  };

  const timeStyle = {
    color: isSender ? "rgba(0, 0, 0, .65)" : "rgba(255, 255, 255, .7)",
    fontWeight: isSender ? 400 : 600,
    fontSize: ".6rem",
    alignSelf: "self-end",
    justifySelf: "center",
  };

  return (
    <div
      className="chat-bubble"
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
        style={{
          backgroundColor: isSender ? colors.inputColor : colors.brand1,
        }}
        className="chat-bubble-wrapper"
      >
        {!message?.isExpired ? (
          <p style={messageStyle}>{message?.content || message?.type}</p>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "0 5px" }}>
            <p style={messageStyle}>Fotoğraf görüntülendi</p>
            <ImageViewedIcon color={colors.iconColor} />
          </div>
        )}

        {message?.isSending ? (
          <BeatLoader
            size={3}
            color={"rgba(255, 255, 255, .8)"}
            style={{
              alignSelf: "self-end",
              jusifySelf: "center",
              position: "relative",
              top: "2px",
            }}
          />
        ) : (
          <span style={timeStyle}>{getTimeFromISO(message?.createdDate)}</span>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
