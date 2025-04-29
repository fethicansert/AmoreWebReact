import React from "react";
import FlexBox from "../../../copmonents/flex_box";
import { useTranslation } from "react-i18next";
import { colors } from "../../../utils/theme";

const SwipeItemOverlayTag = ({ usernmae, userAge, userStatus }) => {
  const { t, _ } = useTranslation();

  return (
    <div className="swipe-container-image-wrapper-overlay">
      <FlexBox alignItems="start" gap="5px" flexDirection="column">
        <FlexBox gap="0 5px">
          <span
            style={{
              animation: "breathing 2s ease-in-out infinite",
              width: "10px",
              height: "10px",
              background: userStatus ? colors.onlineColor : colors.negative,
            }}
            className="online-circle"
          ></span>
          <span className="swipe-item-user-status">{t("STATUS.ONLINE")}</span>
        </FlexBox>
        <span className="swipe-item-user-info">
          {usernmae}, {userAge}
        </span>
      </FlexBox>
    </div>
  );
};

export default SwipeItemOverlayTag;
