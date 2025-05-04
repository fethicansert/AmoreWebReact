import { calculateAge } from "../utils/functions";
import { useBanner } from "../hooks/use_banner.jsx";
import { colors } from "../utils/theme.js";
import {
  FilledLocationIcon,
  PremiumStartIcon,
} from "../assets/svg/svg_package.jsx";
import FlexBox from "./flex_box.jsx";
import BasicButton from "./basic_button.jsx";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks/use_auth.jsx";
import { useNavigate } from "react-router-dom";
import { useUserActivty } from "../hooks/use_user_activity.jsx";
import { axiosAmore } from "../api/axios.js";
import { useState } from "react";
import { useConversation } from "../hooks/use_conversation.jsx";
import { BeatLoader } from "react-spinners";

const UserCard = ({
  user,
  isFromHome = false,
  isDiscover = false,
  isOnlyPremium = false,
}) => {
  const age = calculateAge(user?.birthday);

  //CONTEXT
  const { setLimitedOfferOptions } = useBanner();
  const { t, _ } = useTranslation();
  const { auth } = useAuth();
  const { checkUsersStatus } = useUserActivty();
  const { setConversations } = useConversation();

  const [sendingMessage, setSendingMessage] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="discover-user-box"
      onClick={() =>
        isOnlyPremium
          ? setLimitedOfferOptions({
              show: true,
              type: "premium-subscription",
            })
          : navigate(`/dashboard/user/${user.id}`)
      }
    >
      <div className="discover-user-image-container">
        <img
          style={{
            filter: `blur(${!isOnlyPremium || isDiscover ? "0" : "24px"})`,
          }}
          src={user?.photos?.[0].url}
        ></img>
        <div
          className="discover-user-image-container-overlay"
          style={{
            background:
              !isOnlyPremium || isDiscover
                ? "linear-gradient(rgba(22,30,42,0) 0%, rgba(22,30,42,.75) 100%)"
                : `linear-gradient(rgba(22,30,42,0) 20%, ${
                    isFromHome ? "#412A78" : "rgba(230, 73, 151,.85)"
                  }  100%)`,
          }}
        ></div>
      </div>

      {!isOnlyPremium || (!!isOnlyPremium && isFromHome) || isDiscover ? (
        <div className="discover-user-info">
          <FlexBox gap="0 10px">
            <span
              style={{
                minWidth: "8px",
                background: checkUsersStatus(user.id)
                  ? colors.onlineColor
                  : colors.negative,
              }}
              className="online-circle"
            ></span>
            {isFromHome ? (
              t(`STATUS.${checkUsersStatus(user.id) ? "ONLINE" : "OFFLINE"}`)
            ) : (
              <p className="discover-user-info-text-bold">
                {user.name}, {age ? age : "00"}
              </p>
            )}
          </FlexBox>

          <FlexBox gap="0 6px" width={"100%"} margin={".3rem 0 1rem 0"}>
            <p className="discover-user-info-light">
              {user?.country?.state?.name || "America"}
            </p>
            <FilledLocationIcon color="#FFFFFF" width="19" height="19" />
            <span>4 {auth.distanceType}</span>
          </FlexBox>

          {!isFromHome && (
            <BasicButton
              onClick={(e) => handleSendMessage(e, user.id)}
              className="discover-user-button"
              width={"100%"}
              height={"45px"}
              color={colors.brand2}
              backgroundColor={colors.backGround3}
              borderRadius={"12px"}
            >
              {sendingMessage ? (
                <BeatLoader size={8} color={colors.brand2} />
              ) : (
                t("BUTTONS.SEND_MESSAGE_BUTTON")
              )}
            </BasicButton>
          )}
        </div>
      ) : (
        <div className="only-premium-content">
          <PremiumStartIcon
            width="60"
            height="60"
            color={colors.backGround3}
            backgroundColor={colors.brand1}
          />
          <p>{t("USER_CARD.ONLY_PREMIUM_USERS")}</p>
        </div>
      )}
    </div>
  );

  async function handleSendMessage(e, userId) {
    e.stopPropagation();

    setSendingMessage(true);
    try {
      const response = await axiosAmore.get(
        `chat/conversation?user=${userId}`,
        {
          useAuth: true,
        }
      );
      console.log(response);

      setConversations((prev) => {
        if (
          prev.every(
            (conversation) => conversation.id !== response.data.data.id
          )
        )
          return [
            ...prev,
            {
              ...response.data.data,
              updatedDate: new Date().toISOString(),
            },
          ];
        return prev;
      });

      navigate("/dashboard/chat", { state: { userId: userId } });
    } catch (e) {
      console.log(e);
    } finally {
      setSendingMessage(false);
    }
  }
};

export default UserCard;
