import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FlexBox from "../../copmonents/flex_box";
import amoreLogo from "../../assets/icons/amore_icon.png";
import { v4 as uuidv4 } from "uuid";
import {
  ChatBubbleIcon,
  CoinIcon,
  DiamondIcon,
  DiscoverIcon,
  DoubleHeartIcon,
  HomeIcon,
  LogoutIcon,
  NotificationIcon,
  UserIcon,
  NotificationConfirmIcon,
  LocationSettingIcon,
  NotificationPermissionIcon,
  TrashIcon,
} from "../../assets/svg/svg_package";
import LayoutLinkIcon from "./components/layout_link_icon";
import { colors } from "../../utils/theme";
import LayoutLinkBox from "./components/layout_link_box";
import { useNotification } from "../../hooks/use_notification";
import NotificationItem from "./components/notification_item";
import { ROUTES } from "../../utils/constants";
import ghostLottie from "../../assets/lottie/ghost.json";
import "../../css/dashboard/dashboard.css";
import { ClipLoader } from "react-spinners";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { useBanner } from "../../hooks/use_banner";
import {
  handleLocationPermission,
  handlePushPermission,
} from "../../utils/functions";
import PermissionPopup from "../../copmonents/permission_popup";
import PermissionBanner from "../../copmonents/permission_banner";
import PushNotification from "../../copmonents/push_notification";
import { toast } from "react-toastify";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../firebase/firebase_config";
import { useAuth } from "../../hooks/use_auth";
import { userFcmToken } from "../../api/services/user_servives";
import { useAppData } from "../../hooks/use_add_data";

const ROUTE_LIST = [
  { path: ROUTES.USER_SWIPE, icon: <HomeIcon /> },
  { path: null, icon: <NotificationIcon /> },
  { path: ROUTES.DISCOVER, icon: <DiscoverIcon /> },
  { path: ROUTES.MATCHES, icon: <DoubleHeartIcon /> },
  { path: ROUTES.CHAT, icon: <ChatBubbleIcon /> },
  { path: ROUTES.MARKET, icon: <CoinIcon /> },
  { path: ROUTES.PREMIM_SUBSCRIPTION, icon: <DiamondIcon /> },
  {
    path: ROUTES.USER_PROFILE,
    icon: <UserIcon color="#4B164C" width={25} height={25} />,
  },
];

const Dashboard = () => {
  //STATES
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentposition, setCurrentPosition] = useState(0);
  const [hoverPosition, setHoverPosition] = useState(0);

  const [showNotification, setShowNotification] = useState(false);
  const {
    unReadedCount,
    notifications,
    isUnReadedLoading,
    readAllNotifications,
  } = useNotification();

  //REFS
  const isNotifionsOpennedRef = useRef(false);

  //CONTEXT
  const { t, _ } = useTranslation();
  const { auth } = useAuth();
  const { language } = useAppData();
  const location = useLocation();
  const isUserProfilePage = location.pathname.includes("user-profile");

  const {
    setShowLogout,
    setShowLocationBanner,
    setShowLocationSetting,
    showLocationSetting,
    showNotificationBanner,
    setShowNotificationBanner,
    showNotificationPermission,
    setShowNotificationPermission,
  } = useBanner();

  useEffect(() => {
    //Change Roout Color Better Visualtion on Mobile
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", colors.backGround2);

    //Ask Location Permission the User
    handleLocationPermissionOnFistOpen();

    requestPermission();

    onMessage(messaging, (payload) => {
      toast(<PushNotification payload={payload} />, {
        toastId: payload.messageId,
        style: { padding: "10px 8px" },
        className: "toast-notification",
        progressClassName: "toast-notification-progress",
        position: "top-center",
        autoClose: 10000,
        closeButton: false,
      });
    });
  }, []);

  //UI
  return (
    <div
      className="layout"
      style={{ padding: isUserProfilePage ? "0 15px 15px 15px" : "15px" }}
    >
      {showLocationSetting && (
        <PermissionPopup
          onClick={() => setShowLocationSetting(false)}
          title={t("PERMISSION.LOCATION_POPUP_TITLE")}
          text={t("PERMISSION.LOCATION_POPUP_TEXT")}
          icon={<LocationSettingIcon width="40px" height="40px" />}
        />
      )}

      {showNotificationPermission && (
        <PermissionPopup
          onClick={() => setShowNotificationPermission(false)}
          title={t("PERMISSION.NOTIFICATION_POPUP_TITLE")}
          text={t("PERMISSION.NOTIFICATION_POPUP_TEXT")}
          icon={
            <NotificationPermissionIcon
              className=""
              color={colors.darkText}
              width="40px"
              height="40px"
            />
          }
        />
      )}

      {
        <div
          style={{ visibility: showOverlay ? "visible" : "hidden" }}
          className="layout-overlay"
          onMouseEnter={() => setShowOverlay(false)}
        ></div>
      }

      <div
        style={{ marginTop: isUserProfilePage ? "15px" : "" }}
        className={`layout-header ${
          showNotification ? "notifications-active" : ""
        } `}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => {
          setHoverPosition(currentposition * 61);
          setShowNotification(false);
          setShowOverlay(false);
        }}
      >
        <FlexBox flexDirection="column" gap="15px 0">
          <LayoutLinkIcon
            path={"/"}
            icon={<img src={amoreLogo} width={"35px"} />}
          />

          <nav className="layout-header-navigation">
            <span
              style={{ transform: `translateY(${hoverPosition}px)` }}
              className="layout-header-navigation-postion"
            ></span>

            {ROUTE_LIST.map((route, index) =>
              route.path ? (
                <LayoutLinkIcon
                  state={route?.state}
                  key={index}
                  path={route.path}
                  icon={route.icon}
                  onClik={() => setCurrentPosition(index)}
                  onHover={() => setHoverPosition(index * 61)}
                />
              ) : (
                <div
                  key={index}
                  onMouseEnter={() => setHoverPosition(index * 61)}
                  onClick={onNotificationButtonClick}
                  className={`notification-button center ${
                    showNotification ? "active" : ""
                  }`}
                  style={{
                    height: "29px",
                    margin: "16px 0",
                  }}
                >
                  {isUnReadedLoading ? (
                    <div className="unreaded-notification-spinner">
                      <ClipLoader color={colors.brand1} size={15} />
                    </div>
                  ) : (
                    <div className="unreaded-notification-count">
                      {" "}
                      {unReadedCount < 99 ? unReadedCount : 99}{" "}
                    </div>
                  )}
                  {route.icon}
                </div>
              )
            )}
          </nav>
        </FlexBox>

        <LogoutIcon
          className="logout-icon"
          onClick={() => setShowLogout(true)}
        />

        <div
          className="layout-header-active-part"
          onMouseLeave={() => {
            setHoverPosition(currentposition * 61);
            setShowOverlay(false);
          }}
        >
          <FlexBox flexDirection="column" gap="15px 0">
            <h2 className="layout-header-title">Amore</h2>

            <nav className="layout-header-active-part-navigation">
              {ROUTE_LIST.map((route, index) => (
                <LayoutLinkBox
                  showNotification={setShowNotification}
                  key={index}
                  path={route.path}
                  title={t(
                    `ROUTE_NAMES.${
                      route?.path?.replace("-", "_").toUpperCase() ||
                      "NOTIFICATIONS"
                    }`
                  )}
                  onClick={() => setCurrentPosition(index)}
                  onHover={() => setHoverPosition(index * 61)}
                />
              ))}
            </nav>
          </FlexBox>
        </div>

        <div className={`notifications ${showNotification ? "active" : ""}`}>
          <div className="notification-header-container">
            <FlexBox
              justifyContent="space-between"
              className="notifications-header"
            >
              <h3>{t("DASHBOARD.TITLES.NOTIFICATIONS_TITLE")}</h3>
              <FlexBox gap="0 14px">
                <NotificationConfirmIcon width="25" height="25" />
                <TrashIcon
                  width="24"
                  height="24"
                  onClick={readAllNotifications}
                />
              </FlexBox>
            </FlexBox>

            <PermissionBanner
              onClik={(e) => onNotificationPermissionBannerClick(e)}
              onCrossCloseClick={() => setShowNotificationBanner(false)}
              icon={
                <NotificationIcon
                  width="23"
                  height="23"
                  className=""
                  color={colors.whiteText}
                />
              }
              text={t("PERMISSION.NOTIFICATION_BANNER_TEXT")}
              style={{ position: "absolute", width: "100%", top: "100%" }}
              showPermissionBanner={showNotificationBanner}
            />
          </div>

          <div
            className="notifications-wrapper"
            style={{
              transform: `translateY(${showNotificationBanner ? 45 : 0}px)`,
            }}
          >
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NotificationItem
                  key={notification?._id}
                  notification={notification}
                />
              ))
            ) : (
              <div className="notifications-empty-notifications">
                <Lottie animationData={ghostLottie} className="ghost-lottie" />
                <div>
                  <p>{t("DASHBOARD.TITLES.EMPTY_NOTIFICATIONS_TITLE")}</p>
                  <p>{t("DASHBOARD.TITLES.EMPTY_NOTIFICATIONS_SUB_TITLE")}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );

  //FUNCTIONS

  //Show Notifications and handle notification permissions for fist openning of Show Notifications
  function onNotificationButtonClick() {
    setShowNotification((prev) => !prev);

    if (!showNotification) {
      handlePushPermission({
        timeOut: 1200,
        showPrompt: !isNotifionsOpennedRef.current,
        onGranted: () => setShowNotificationBanner(false),
        onDenied: () => setShowNotificationBanner(true),
        onPrompt: () => setShowNotificationBanner(true),
        onPromptGranted: () => setShowNotificationBanner(false),
      });
    }

    isNotifionsOpennedRef.current = true;
  }

  //Ask notification permissions on permission banner click if denied show Permissin Popup
  function onNotificationPermissionBannerClick(e) {
    if (e.target.tagName === "svg" || e.target.tagName === "path") return;

    handlePushPermission({
      onDenied: () => setShowNotificationPermission(true),
      onPromptDenied: () => {},
      onPromptGranted: () => {},
    });
  }

  function handleLocationPermissionOnFistOpen() {
    handleLocationPermission({
      permissionType: "geolocation",
      listenChange: true,
      onChange: (e) => {
        if (e.currentTarget.state === "denied") setShowLocationBanner(true);
        else {
          setShowLocationBanner(false);
          setShowLocationSetting(false);
        }
      },
      onGranted: () => {
        setShowLocationBanner(false);
      },
      onDenied: () => setShowLocationBanner(true),
      onPositionReveal: (positon) => {
        setShowLocationBanner(false);
      },
      onPositionDenied: (error) => setShowLocationBanner(true),
    });
  }

  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      try {
        // Voluntary Application Server Identification => Gönüllü Uygulama Sunucusu Tanımlaması
        const vapidKey =
          "BFkciB-OrPueQmN0vizjgIgmkzTwi0yO1AYCCa9Pv4Hh1M_iXr5pnpVdBwrSTOxOtNWhajHhL8ZcQZvVO_TbZx8";

        const token = await getToken(messaging, {
          vapidKey: vapidKey,
        });

        // console.log(token);

        if (!token || !auth) return;

        const oldToken = JSON.parse(localStorage.getItem("fcmToken"));

        if (oldToken) {
          if (oldToken !== token) {
            const deleteResponse = await userFcmToken({
              type: "delete",
              token: token,
              language: language,
            });
            console.log(deleteResponse);

            const addResponse = await userFcmToken({
              type: "add",
              token: token,
              language: language,
            });
            console.log(addResponse);

            localStorage.setItem("fcmToken", JSON.stringify(token));
          } else {
            // console.log("Old Token and Token Same !");
          }
        } else {
          const addResponse = await userFcmToken({
            type: "add",
            token: token,
            language: language,
          });

          console.log(addResponse);

          localStorage.setItem("fcmToken", JSON.stringify(token));
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};

export default Dashboard;
