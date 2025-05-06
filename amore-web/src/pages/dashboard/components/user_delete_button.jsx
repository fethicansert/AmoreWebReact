import React, { useState } from "react";
import { DeleteAccountIcon } from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import { useTranslation } from "react-i18next";

const UserDeleteButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className="user-delete-button"
      width={"50%"}
      height={"53px"}
      style={{
        width: "50%",
        height: "53px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0 8px",
        border: `1px solid ${colors.negative}`,
        borderRadius: "16px",
        margin: "3rem auto 0 auto",
        cursor: "pointer",
      }}
    >
      <DeleteAccountIcon color={colors.negative} />
      <span style={{ fontSize: ".95rem" }}>
        {t("DASHBOARD.PROFILE.SETTINGS.DELETE_ACCOUNT_BUTTON")}
      </span>
    </div>
  );
};

export default UserDeleteButton;
