import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FlexBox from "../../copmonents/flex_box";
import amoreLogo from "../../assets/icons/amore_icon.png";
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
  LocationSettingIcon,
  NotificationPermissionIcon,
  CrossCloseIcon,
} from "../../assets/svg/svg_package";
import LayoutLinkIcon from "./components/layout_link_icon";
import { colors } from "../../utils/theme";
import LayoutLinkBox from "./components/layout_link_box";
import { ROUTES } from "../../utils/constants";
import "../../css/dashboard/dashboard.css";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { useBanner } from "../../hooks/use_banner";
import { handleLocationPermission } from "../../utils/functions";
import PermissionPopup from "../../copmonents/permission_popup";
import PushNotification from "../../copmonents/push_notification";
import { toast } from "react-toastify";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../firebase/firebase_config";
import { useAuth } from "../../hooks/use_auth";
import { userFcmToken } from "../../api/services/user_servives";
import { useAppData } from "../../hooks/use_add_data";
import HeaderNotifications from "./components/header_notifications";
import { axiosAmore } from "../../api/axios";
import { useSocket } from "../../hooks/use_socket";
import { TbBurger, TbMenu2, TbMenu3 } from "react-icons/tb";
import CurrentUserInfoBox from "../../copmonents/current_user_info_box";
import { useMediaPredicate } from "react-media-hook";
import MobileNavigationItem from "./components/mobile_navigation_item";

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

  const [unReadedCount, setUnReadedCount] = useState(0);
  const [isUnReadedLoading, setIsUnReadedLoading] = useState(false);

  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  //CONTEXT
  const { t, _ } = useTranslation();
  const { auth } = useAuth();
  const { language } = useAppData();
  const location = useLocation();
  const { socket, isSocketConnected } = useSocket();

  const isUserProfilePage = location.pathname.includes("user-profile");

  const isMobile = useMediaPredicate("(max-width:500px)");

  const {
    setShowLogout,
    setShowLocationBanner,
    setShowLocationSetting,
    showLocationSetting,
    showNotificationPermission,
    setShowNotificationPermission,
  } = useBanner();

  useEffect(() => {
    if (isSocketConnected) {
      socket.on("refreshNotifications", () => {
        getUnReadedCount({ showLoading: false });
      });
    }
  }, [isSocketConnected]);

  //REFS
  const notificationSoundRef = useRef(
    new Audio("/sounds/notification_sound.mp3")
  );

  useEffect(() => {
    setShowNotification(false);
  }, [currentposition]);

  useEffect(() => {
    getUnReadedCount({ showLoading: true });

    //Change Roout Color Better Visualtion on Mobile
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", colors.backGround2);

    //Ask Location Permission the User
    handleLocationPermissionOnFistOpen();

    requestPermission();

    onMessage(messaging, (payload) => {
      const notificationOptions = JSON.parse(
        localStorage.getItem("notificationOptions")
      );

      if (!notificationOptions.show || location.pathname === "/dashboard/chat")
        return;

      toast(<PushNotification payload={payload} />, {
        onOpen: () =>
          notificationOptions.sound
            ? notificationSoundRef.current.play()
            : undefined,
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
      style={{
        padding: isUserProfilePage
          ? "0 clamp(.3rem, .8vw, .8rem) clamp(.3rem, .8vw, .8rem)  clamp(.3rem, .8vw, .8rem)"
          : "clamp(.3rem, .8vw, .8rem)",
      }}
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

      {isMobile && (
        <div
          style={{
            border: `1px solid ${colors.borderColor1}`,
            borderRadius: "12px",
            marginBottom: "5px",
            background: colors.backGround3,
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            padding: ".7rem",
          }}
        >
          {showNotification && (
            <HeaderNotifications readAllNotifications={readAllNotifications} />
          )}

          {showMobileNavigation && (
            <div className="mobile-header-navigation">
              <div
                onClick={() => setShowMobileNavigation(false)}
                style={{
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0 5px",
                }}
              >
                <CrossCloseIcon color={colors.brand1} />
                <span style={{ fontWeight: 600, color: colors.brand1 }}>
                  Kapat
                </span>
              </div>

              {ROUTE_LIST.map((route, index) =>
                route.path ? (
                  <MobileNavigationItem
                    closeMobileNavigation={() => setShowMobileNavigation(false)}
                    key={index}
                    route={route}
                  ></MobileNavigationItem>
                ) : null
              )}

              <div
                style={{ marginTop: "auto" }}
                className="mobile-navigation-item"
                onClick={() => {
                  setShowMobileNavigation(false);
                  setShowLogout(true);
                }}
              >
                <LogoutIcon />
                Çıkış Yap
              </div>
            </div>
          )}
          <TbMenu2
            color={colors.brand1}
            size={25}
            onClick={() => setShowMobileNavigation(true)}
          />

          <CurrentUserInfoBox style={{ padding: 0, border: "none" }} />

          <div
            onClick={() => setShowNotification((prev) => !prev)}
            style={{ position: "relative", cursor: "pointer" }}
            className={`center`}
          >
            {isUnReadedLoading ? (
              <div
                style={{ top: "-8px" }}
                className="unreaded-notification-spinner"
              >
                <ClipLoader color={colors.brand1} size={15} />
              </div>
            ) : (
              <div
                style={{ top: "-8px" }}
                className="unreaded-notification-count"
              >
                {" "}
                {unReadedCount < 99 ? unReadedCount : 99}{" "}
              </div>
            )}
            <NotificationIcon />
          </div>
        </div>
      )}

      {!isMobile && (
        <div
          style={{
            marginTop: isUserProfilePage ? "clamp(.3rem, .8vw, .8rem)" : "",
          }}
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
                    buttonClick={onNotificationButtonClick}
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
          {showNotification && (
            <HeaderNotifications readAllNotifications={readAllNotifications} />
          )}
        </div>
      )}

      <Outlet />
    </div>
  );

  //FUNCTIONS

  async function getUnReadedCount({ showLoading = true }) {
    if (showLoading) setIsUnReadedLoading(true);

    try {
      const response = await axiosAmore.get("notification/count", {
        useAuth: true,
      });
      if (response.data.response.code === 200)
        setUnReadedCount(response.data.data.status);
      console.log(response.data.data.status);
    } catch (e) {
      console.log(e);
    } finally {
      if (showLoading) setIsUnReadedLoading(false);
    }
  }

  async function readAllNotifications() {
    try {
      setIsUnReadedLoading(true);
      const response = await axiosAmore.post(
        "notification/read_all",
        {},
        { useAuth: true }
      );
      if (response.status === 200) {
        setUnReadedCount(0);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsUnReadedLoading(false);
    }
  }

  //Show Notifications and handle notification permissions for fist openning of Show Notifications
  function onNotificationButtonClick() {
    setShowNotification((prev) => !prev);
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

            const addResponse = await userFcmToken({
              type: "add",
              token: token,
              language: language,
            });

            localStorage.setItem("fcmToken", JSON.stringify(token));
            localStorage.setItem(
              "notificationOptions",
              JSON.stringify({
                show: true,
                sound: true,
              })
            );
          } else {
            // console.log("Old Token and Token Same !");
          }
        } else {
          const addResponse = await userFcmToken({
            type: "add",
            token: token,
            language: language,
          });

          localStorage.setItem("fcmToken", JSON.stringify(token));
          localStorage.setItem(
            "notificationOptions",
            JSON.stringify({
              show: true,
              sound: true,
            })
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};

export default Dashboard;
