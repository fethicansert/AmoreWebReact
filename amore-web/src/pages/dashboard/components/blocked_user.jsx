import React from "react";
import { colors } from "../../../utils/theme";
import { BlockedUserIcon } from "../../../assets/svg/svg_package";
import BasicButton from "../../../copmonents/basic_button";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const BlockedUser = ({ user, onClick, loading }) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
        display: "grid",
        justifyItems: "center",
        padding: "1rem",
        backgroundColor: colors.backGround3,
        border: `1px solid ${colors.borderColor1}`,
        borderRadius: "12px",
        width: "100%",
        maxWidth: "290px",
        textAlign: "center",
      }}
    >
      {loading ? (
        <>
          <ClipLoader color={colors.brand1} />
          <p
            style={{
              fontSize: ".95rem",
              color: colors.lowFadedText,
              fontWeight: 300,
              marginTop: ".75rem",
            }}
          >
            {t("BLOCK.UNBLOCKING", { user: user.name })}
          </p>
        </>
      ) : (
        <>
          <BlockedUserIcon
            color={colors.iconColor}
            width="50px"
            height="50px"
          />

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              marginTop: ".6rem",
            }}
          >
            {t("BLOCK.BLOCKED_USER_TITLE")}
          </h3>

          <p
            style={{
              fontWeight: 300,
              color: colors.lowFadedText,
              fontSize: ".95rem",
              marginTop: ".2rem",
            }}
          >
            {t("BLOCK.BLOCKED_USER", { user: user?.name })}
          </p>

          <BasicButton
            onClick={onClick}
            height={"50px"}
            width={"145px"}
            backgroundColor={colors.brand1}
            borderRadius={"12px"}
            style={{ marginTop: ".8rem" }}
          >
            {t("BLOCK.UNBLOCK_BUTTON")}
          </BasicButton>
        </>
      )}
    </div>
  );
};

export default BlockedUser;
