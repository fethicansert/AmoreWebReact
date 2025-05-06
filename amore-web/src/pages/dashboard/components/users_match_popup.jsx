import React, { useLayoutEffect, useRef } from "react";
import Lottie from "lottie-react";
import matchesHeart from "../../../assets/lottie/white_heart.json";
import { useTranslation } from "react-i18next";
const UsersMatchPopup = ({ images, matchedName, onClose }) => {
  const overlayRef = useRef();

  const { t } = useTranslation();

  useLayoutEffect(() => {
    const closePopup = (e) =>
      e.target.className === "users-match-popup-overlay" ? onClose() : null;
    overlayRef.current.addEventListener("click", closePopup);
    return () => overlayRef.current.removeEventListener("click", closePopup);
  }, []);

  return (
    <div className="users-match-popup-overlay" ref={overlayRef}>
      <div className="users-match-popup">
        <Lottie
          animationData={matchesHeart}
          className="users-match-popup-heart-animation"
        />

        <div className="users-match-popup-image-container users-match-popup-image-container-left">
          <img src={images[0]} />
        </div>

        <div className="users-match-popup-image-container users-match-popup-image-container-right">
          <img src={[images[1]]} />
        </div>

        <h3>{t("MATCH_POPUP.TITLE")}</h3>
        <p>{t("MATCH_POPUP.SUB_TITLE", { user: matchedName })}</p>

        <button className="users-match-popup-send-message-button">
          {t("BUTTONS.SEND_MESSAGE")}
        </button>

        <button className="users-match-popup-close-button" onClick={onClose}>
          {t("BUTTONS.BACK_TO_SWIPE")}
        </button>
      </div>
    </div>
  );
};

export default UsersMatchPopup;
