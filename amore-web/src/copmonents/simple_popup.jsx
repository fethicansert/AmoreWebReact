import React from "react";
import { colors } from "../utils/theme";
import FlexBox from "./flex_box";
import BasicButton from "./basic_button";

const SimplePopup = ({
  icon,
  title,
  text,
  onYes,
  onNo,
  textStyle,
  titleStyle,
}) => {
  return (
    <div
      style={{
        animation: "fade 200ms ease",
        display: "grid",
        justifyItems: "center",
        backgroundColor: colors.backGround3,
        padding: "1rem",
        border: `1px solid ${colors.borderColor1}`,
        width: "95%",
        maxWidth: "250px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      {icon}

      {title && <h4 style={{ fontWeight: 600, fontSize: "1rem" }}>{title}</h4>}

      <p
        style={{
          color: colors.lowFadedText,
          fontWeight: 300,
          fontSize: ".92rem",
          marginBlock: ".5rem",
        }}
      >
        {text}
      </p>

      <FlexBox width={"100%"} gap="0 10px">
        <BasicButton
          onClick={onYes}
          backgroundColor={colors.brand1}
          style={{ flex: "1", height: "50px", borderRadius: "12px" }}
        >
          Evet
        </BasicButton>

        <BasicButton
          onClick={onNo}
          backgroundColor={colors.darkButton}
          style={{ flex: "1", height: "50px", borderRadius: "12px" }}
        >
          Hayır
        </BasicButton>
      </FlexBox>
    </div>
  );
};

export default SimplePopup;
