import React from "react";
import FixedOverflow from "../../../copmonents/fixed_overflow";
import FlexBox from "../../../copmonents/flex_box";
import BasicButton from "../../../copmonents/basic_button";
import { colors } from "../../../utils/theme";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import SimpleLoading from "./simple_loading";

const UserBlockPopup = ({ user, onYes, onClose, loading, isBlock = false }) => {
  const { t, _ } = useTranslation();
  return (
    <>
      {!loading ? (
        <div className="unblock-popup">
          <img
            width={"60px"}
            height={"60px"}
            src={user?.photos?.[0]?.url}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <p style={{ maxWidth: "200px" }}>
            {isBlock
              ? t("BLOCK.BLOCK_CONFIRM_TEXT", { user: user?.name })
              : t("BLOCK.UNBLOCK_CONFIRM_TEXT", { user: user?.name })}
          </p>

          <FlexBox width={"100%"} gap="0 10px">
            <BasicButton
              onClick={onYes}
              style={{ flex: "1" }}
              height={"45px"}
              borderRadius={"10px"}
              backgroundColor={colors.brand1}
            >
              {t("BUTTONS.YES")}
            </BasicButton>
            <BasicButton
              onClick={onClose}
              style={{ flex: "1" }}
              height={"45px"}
              borderRadius={"10px"}
              backgroundColor={colors.negativeBlack}
            >
              {t("BUTTONS.CANCEL")}
            </BasicButton>
          </FlexBox>
        </div>
      ) : (
        <SimpleLoading
          text={
            isBlock
              ? t("BLOCK.BLOCKING", { user: user.name })
              : t("BLOCK.UNBLOCKING", { user: user.name })
          }
        />
      )}
    </>
  );
};

export default UserBlockPopup;

{
  /* <ClipLoader color={colors.brand1} />
<p>
  {isBlock
    ? t("BLOCK.BLOCKING", { user: user.name })
    : t("BLOCK.UNBLOCKING", { user: user.name })}
</p> */
}

{
  /* <FixedOverflow color={"rgba(0, 0, 0, 0.45)"} bottom={bottom}> */
}
