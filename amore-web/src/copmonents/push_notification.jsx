import React from "react";
import { CrossCloseIcon } from "../assets/svg/svg_package";
import { colors } from "../utils/theme";
import avatarImage from "../assets/images/avatar7.png";
import FlexBox from "./flex_box";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const PushNotification = ({ payload, isMessage = false }) => {
  const extraData = !isMessage
    ? JSON.parse(payload?.data?.extraData)
    : undefined;

  const { t } = useTranslation();

  return (
    <div className="push-notification">
      <div className="push-notification-image">
        <img
          width={"100%"}
          height={"100%"}
          src={
            isMessage
              ? payload?.user?.photos?.[0]?.url || avatarImage
              : extraData?.senderImage || avatarImage
          }
        />
      </div>

      <FlexBox flexDirection="column" alignItems="flex-start" gap="6px 0">
        <h4>{isMessage ? payload?.user?.name : payload?.notification.title}</h4>
        <p>
          {isMessage
            ? t(
                `NOTIFICATION.QUICK_NOTIFICATIONS.${payload.type.toUpperCase()}`,
                {
                  user: payload.user.name,
                  message: payload.content,
                }
              )
            : payload?.notification.body}
        </p>
      </FlexBox>

      <CrossCloseIcon
        onClick={() =>
          toast.dismiss(isMessage ? payload.id : payload.messageId)
        }
        color={colors.darkText}
        width="24"
        height="24"
        strokeWidth="2.5"
        style={{
          cursor: "pointer",
          background: colors.inputColor,
          padding: ".2.3rem",
          borderRadius: "50%",
          border: `.4px solid ${colors.borderColor1}`,
          position: "absolute",
          right: "0",
          top: "0",
          margin: ".45rem",
        }}
      />
    </div>
  );
};

export default PushNotification;
