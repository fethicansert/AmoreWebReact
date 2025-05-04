import React from "react";
import BasicButton from "../../../copmonents/basic_button";
import { colors } from "../../../utils/theme";

const SimplePopup = ({ icon, title, text, onClick, buttonText }) => {
  return (
    <div className="empty-matches">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
      <BasicButton
        onClick={onClick}
        fontSize={".8rem"}
        height={"48px"}
        width={"100%"}
        backgroundColor={colors.brand1}
        borderRadius={"12px"}
      >
        {buttonText}
      </BasicButton>
    </div>
  );
};

export default SimplePopup;
