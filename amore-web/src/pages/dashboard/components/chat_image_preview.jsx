import React from "react";
import {
  CrossCloseIcon,
  SendImageIcon,
  SendMessageIcon,
} from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import { v4 as uuidv4 } from "uuid";

const ChatImagePreview = ({
  selectedImages,
  setSelectedImages,
  sendImage,
  handleImageChange,
  setShowPreviewImage,
}) => {
  return (
    <div className="chat-image-preview">
      <div className="chat-image-preview-container">
        <CrossCloseIcon
          className="chat-image-preview-close-icon"
          onClick={() => {
            setShowPreviewImage(false);
            setSelectedImages([]);
          }}
          width="28px"
          height="28px"
        />

        <img
          className="chat-image-preview-big-image"
          src={selectedImages[0].base64}
        />

        <div className="chat-image-preview-row">
          {new Array(4).fill(null).map((_, index) => {
            return (
              <div
                key={uuidv4()}
                className="chat-image-preview-row-item"
                style={
                  !selectedImages?.[index + 1]
                    ? {
                        border: "1.5px solid rgba(255, 255, 255, 0.4)",
                        backdropFilter: "blur(8px)",
                        cursor: "pointer",
                      }
                    : null
                }
              >
                {selectedImages?.[index + 1] ? (
                  <>
                    <img src={selectedImages?.[index + 1]?.base64} />
                    <CrossCloseIcon
                      className="chat-image-preview-close-icon small"
                      onClick={() =>
                        setSelectedImages((prev) =>
                          prev.filter((image, _index) => _index !== index + 1)
                        )
                      }
                      width="17px"
                      height="17px"
                    />
                  </>
                ) : (
                  <>
                    <SendImageIcon
                      className="chat-image-preview-send-image-icon"
                      color={colors.backGround3}
                    />
                    <input
                      onChange={handleImageChange}
                      className="chat-image-input"
                      style={{ borderRadius: "50%" }}
                      type="file"
                      accept="image/*"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="chat-image-preview-input-wrapper">
          <input
            className="chat-image-preview-input"
            placeholder="Bir şeyler yaz"
            autoFocus={true}
          />
          <div
            className="send-image-button"
            onClick={() => {
              selectedImages.forEach(async (_, index) => {
                await sendImage(index);
              });
            }}
          >
            <SendMessageIcon
              width="15px"
              height="15px"
              strokeWidth="1.5"
              color={colors.backGround3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatImagePreview;
