import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../../api/services/user_servives";
import Header from "../../copmonents/header";
import { colors } from "../../utils/theme";
import amoreIcon from "../../assets/icons/amore_icon.png";
import "../../css/visit/visit.css";
import SwipeItem from "../dashboard/components/swipe_item";
import PremiumBox from "../../copmonents/premium_box";
import SwipeBottomBar from "../dashboard/components/swipe_bottom_bar";
import { useAuth } from "../../hooks/use_auth";
import UserHomeNotifications from "../dashboard/components/user_home_notifications";
import UserHomeNotificationItem from "../dashboard/components/user_home_notification_item";
import { useConversation } from "../../hooks/use_conversation";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { axiosAmore } from "../../api/axios";
import CurrentUserInfoBox from "../../copmonents/current_user_info_box";
import { useBanner } from "../../hooks/use_banner";
import { getSwipePopupAnimation } from "../../utils/functions";
import DiscoverCTA from "../../copmonents/discover_cta.jsx";
import likeSound from "../../sounds/like_sound.mp3";
import UsersMatchPopup from "../dashboard/components/users_match_popup.jsx";
import { useMediaPredicate } from "react-media-hook";
import { useLikes } from "../../hooks/use_likes.jsx";

const Visit = () => {
  //PARAM
  const { userId } = useParams();

  //STATES
  const [user, setUser] = useState();
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [popAnimation, setPopupAnimation] = useState();
  const [showUserMatchesPopup, setShowUserMatchesPopup] = useState();
  const [isUserBlocked, setIsUserBlocked] = useState(false);

  //CONTEXT
  const { conversations, isConversationsLoading } = useConversation();
  const { auth, isAuthenticated, isPremium } = useAuth();
  const { likes, isLikesLoading } = useLikes();
  const { setShowLogin, setLimitedOfferOptions } = useBanner();
  const { t, _ } = useTranslation();

  //REFS
  const likeSoundRef = useRef(new Audio(likeSound));
  const visitContainerRef = useRef();

  //MEDIA QUERY
  const hideLeftCol = useMediaPredicate("(max-width: 1190px)");
  const hideRightCol = useMediaPredicate("(max-width: 765px)");

  useEffect(() => {
    getUser(userId);
  }, []);

  return (
    <div
      className="visit"
      style={{
        padding: !isAuthenticated ? "1rem" : "",
        height: !isAuthenticated ? "100vh" : "100%",
      }}
    >
      {!isAuthenticated && (
        <Header
          hasShadow={true}
          hasBorder={false}
          backgroundColor={colors.backGround3}
          title={"Amore"}
          titleColor={colors.brand1}
          menuIconColor={colors.brand1}
          textColor={colors.darkText}
          icon={amoreIcon}
          iconWidth={35}
          languageIconColor={colors.brand1}
        />
      )}

      <div
        className="visit-grid-container"
        style={{
          maxWidth: !isAuthenticated ? "600px" : "1400px",
          margin: !isAuthenticated ? ".75rem auto 0 auto" : "",
          gridTemplateColumns: !isAuthenticated
            ? "1fr"
            : hideRightCol
            ? "1fr"
            : hideLeftCol
            ? "5fr 3.5fr"
            : "280px 4fr 2.4fr",
        }}
      >
        {!hideLeftCol && (
          <div className="visit-grid-container-left-column">
            {isAuthenticated && (
              <>
                <CurrentUserInfoBox
                  style={{
                    marginBottom: ".85rem",
                    background: colors.backGround3,
                    border: `1px solid ${colors.borderColor1}`,
                    padding: "1rem",
                    borderRadius: "12px",
                  }}
                />
                <PremiumBox />
                <DiscoverCTA style={{ marginTop: ".85rem" }} />
              </>
            )}
          </div>
        )}

        <div className="visit-user-container" ref={visitContainerRef}>
          <SwipeItem
            user={user}
            loading={isUserLoading}
            showBlockButton={true}
            isUserBlocked={isUserBlocked}
            setIsUserBlocked={setIsUserBlocked}
          />

          {!isUserBlocked && (
            <SwipeBottomBar
              onMessage={() => (!isAuthenticated ? setShowLogin(true) : null)}
              onSwipe={handleSwipe}
            />
          )}

          {popAnimation && (
            <div
              className="like-popup"
              style={{
                marginTop: `${visitContainerRef?.current?.scrollTop}px`,
              }}
            >
              {popAnimation.icon}
            </div>
          )}

          {showUserMatchesPopup && (
            <UsersMatchPopup
              onClose={() => setShowUserMatchesPopup(false)}
              images={[auth?.photos?.[0]?.url, user?.photos?.[0].url]}
              matchedName={user?.name}
            />
          )}
        </div>

        {!hideRightCol && (
          <div className="visit-grid-container-right-column">
            {isAuthenticated && (
              <>
                <UserHomeNotifications
                  path={"/dashboard/chat"}
                  title={t("DASHBOARD.TITLES.QUICK_MESSAGES")}
                  isLoading={isConversationsLoading}
                  type="message"
                >
                  {conversations
                    .slice(0, 4)
                    .map((message, index) =>
                      message ? (
                        <UserHomeNotificationItem
                          index={index}
                          key={uuidv4()}
                          type={"message"}
                          notification={message}
                        />
                      ) : null
                    )}
                </UserHomeNotifications>

                <UserHomeNotifications
                  path={"/dashboard/matches"}
                  title={t("DASHBOARD.TITLES.LIKES")}
                  isLoading={isLikesLoading}
                  type="like"
                >
                  {likes
                    .slice(0, 4)
                    .map((like, index) =>
                      like ? (
                        <UserHomeNotificationItem
                          blurImage={true}
                          index={index}
                          key={uuidv4()}
                          type={"like"}
                          notification={like}
                        />
                      ) : null
                    )}
                </UserHomeNotifications>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );

  async function handleSwipe(type) {
    if (!isAuthenticated) return setShowLogin(true);
    if (type === "superlike" && !isPremium)
      return setLimitedOfferOptions({
        show: true,
        type: "premium-subscription",
      });

    const swipePopupAnimation = getSwipePopupAnimation(type);
    setPopupAnimation(swipePopupAnimation);

    const body = { receiverUserId: userId };

    setPopupAnimation(swipePopupAnimation);
    likeSoundRef.current.play();

    setTimeout(() => {
      setPopupAnimation(null);
    }, 1000);

    try {
      const response = await axiosAmore.post(`user/${type}`, body, {
        useAuth: true,
      });
      if (response.status === 200) {
        if (!response.data.data.isMatch) {
          setShowUserMatchesPopup(true);
          setPopupAnimation(null);
        }
      }

      if (response?.data?.response?.code !== 200 || response.status !== 200)
        setSwipeError(true);
    } catch (e) {
      console.log(e);
    }
  }

  //Return Popup Animation according to given parameter type
  async function getUser(id) {
    setIsUserLoading(true);
    try {
      const response = await getUserData({ userId: id });
      console.log(response);

      setUser(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsUserLoading(false);
    }
  }
};

export default Visit;
