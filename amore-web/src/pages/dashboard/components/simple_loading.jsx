import React from "react";
import { ClipLoader } from "react-spinners";
import { colors } from "../../../utils/theme";

const SimpleLoading = ({ text }) => {
  return (
    <div
      style={{
        animation: "fade 150ms ease",
        gap: "1rem 0",
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        borderRadius: "12px",
        background: colors.backGround3,
        padding: "1rem",
        border: `1px solid ${colors.borderColor1}`,
      }}
    >
      <ClipLoader color={colors.brand1} />
      <p
        style={{
          maxWidth: "200px",
          textAlign: "center",
          color: colors.lowFadedText,
          fontWeight: "300",
          fontSize: ".95rem",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default SimpleLoading;
