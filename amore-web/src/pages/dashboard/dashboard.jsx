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
import { useMediaPredicate } from "react-media-hook";

import SimplePopup from "../../copmonents/simple_popup";
import FixedOverflow from "../../copmonents/fixed_overflow";
import DashboardMobileHeader from "./components/dashboard_mobile_header";

const DASH_BOARD_ROUTE_LIST = [
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
  const [currentPosition, setCurrentPosition] = useState(0);
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

  //Popup and Banner States
  const {
    setShowLogout,
    setShowLocationBanner,
    setShowLocationPermissionPopup,
    showLocationPermissionPopup,
    showNotificationPermissionPopup,
    setShowNotificationPermissionPopup,
  } = useBanner();

  //MEDIA
  const isMobile = useMediaPredicate("(max-width:500px)");
  const locationRef = useRef(location.pathname);
  //In user profile page different margin and padding style used!
  const isUserProfilePage = location.pathname.includes("user-profile");

  //REFS
  const isInitialLocationPermissinRequested = useRef(false);
  const isInitialNotificationPermissinRequested = useRef(false);

  const permissionsRef = useRef({
    location: false,
  });

  //OPTIONS
  const notificationOptions = JSON.parse(
    localStorage.getItem("notificationOptions")
  );

  const toastOptions = {
    style: { padding: "10px 8px", marginBottom: isMobile ? ".5rem" : "" },
    className: "toast-notification",
    progressClassName: "toast-notification-progress",
    position: "top-center",
    autoClose: 10000,
    closeButton: false,
  };

  //Close Notification and update locationRef on current
  useEffect(() => {
    setShowNotification(false);
    locationRef.current = location.pathname;
  }, [currentPosition]);

  //Show Permission Popup only once when page openned
  //Show Notification Permission only user-swipe (home-page)
  //  => user can allow location permission with location permission banner in swipe item
  //Show Location Permissin only discover-page
  // => user can allow notification permission with noticafication permission banner in notifications
  useEffect(() => {
    if (
      location.pathname.includes("discover") &&
      !isInitialLocationPermissinRequested.current
    ) {
      isInitialLocationPermissinRequested.current = true;
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "prompt") {
          setShowLocationPermissionPopup(true);
        }
      });
    } else if (
      location.pathname.includes("user-swipe") &&
      !isInitialNotificationPermissinRequested.current
    ) {
      isInitialNotificationPermissinRequested.current = true;
      if ("Notification" in window) {
        if (Notification.permission === "default") {
          setShowNotificationPermissionPopup(true);
        }
      }
    }
  }, [location.pathname]);

  //Intial Operations
  useEffect(() => {
    //Change Roout Color Better Visualtion on Mobile
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", colors.backGround2);

    localStorage.setItem(
      "notificationOptions",
      JSON.stringify({
        show: true,
        sound: true,
      })
    );

    getUnReadedCount({ showLoading: true });
  }, []);

  //FCM NOTIFICATIONS AND MESSAGES
  useEffect(() => {
    //If permission given and has fcmToken listen FCM Firebase Cloud Messaging
    if (localStorage.getItem("fcmToken")) {
      onMessage(messaging, (notification) => {
        if (
          !notificationOptions.show ||
          (locationRef.current === "/dashboard/chat" &&
            notification.data.type === "MESSAGE") //MESSAGE => text-image-audio
        )
          return;
        toast(<PushNotification payload={notification} />, {
          ...toastOptions,
          toastId: notification.messageId,
        });
      });
    }
  }, []);

  //SOCKET MESSAGES
  useEffect(() => {
    if (isSocketConnected) {
      //FCM yok ise socketten mesajlar dinlenecek !
      !localStorage.getItem("fcmToken") &&
        socket.on("onMessageWithConversation", (message) => {
          if (
            !JSON.parse(localStorage.getItem("notificationOptions")).show ||
            locationRef.current === "/dashboard/chat"
          )
            return;

          toast(<PushNotification payload={message} isMessage={true} />, {
            ...toastOptions,
            toastId: message.id,
          });
        });

      //Notificationslar yenilenebilir sadece unReadAlmak yeterli zaten her açılışta yenileniyor !!!
      socket.on("refreshNotifications", () => {
        getUnReadedCount({ showLoading: false });
      });
    }
  }, [isSocketConnected]);

  //UI
  return (
    <div
      className="layout"
      style={{
        padding: isUserProfilePage
          ? "0 clamp(.3rem, .8vw, .8rem) 0  clamp(.3rem, .8vw, .8rem)"
          : "clamp(.3rem, .8vw, .8rem) clamp(.3rem, .8vw, .8rem) 0 clamp(.3rem, .8vw, .8rem)",
      }}
    >
      {showLocationPermissionPopup && (
        <FixedOverflow color="#00000073">
          <SimplePopup
            containerStyle={{ padding: "1rem", maxWidth: "300px" }}
            onNo={() => setShowLocationPermissionPopup(false)}
            onYes={() => {
              setShowLocationPermissionPopup(false);
              handleLocationPermissionInitial();
            }}
            icon={
              <LocationSettingIcon
                width="45px"
                height="45px"
                strokeWidth="2.4"
              />
            }
            title={"Konumunu Paylaş"}
            text={
              "Sana en yakın kişileri bulabilmemiz için konum bilgini kullanmamıza izin verir misin? 📍"
            }
          />
        </FixedOverflow>
      )}

      {showNotificationPermissionPopup && (
        <FixedOverflow color="#00000073">
          <SimplePopup
            containerStyle={{ padding: "1rem", maxWidth: "300px" }}
            onNo={() => setShowNotificationPermissionPopup(false)}
            onYes={() => {
              setShowNotificationPermissionPopup(false);
              handleNotificationPermission();
            }}
            icon={
              <NotificationPermissionIcon
                width="45px"
                height="45px"
                xw
                strokeWidth="2.2"
              />
            }
            title={"Bildirimleri Aç"}
            text={
              "Yeni eşleşme ve mesajlardan seni haberdar edebilmemiz için bildirim izni vermek ister misin? 🔔"
            }
          />
        </FixedOverflow>
      )}

      {
        <div
          style={{ visibility: showOverlay ? "visible" : "hidden" }}
          className="layout-overlay"
          onMouseEnter={() => setShowOverlay(false)}
        ></div>
      }

      {isMobile && (
        <DashboardMobileHeader
          showNotification={showNotification}
          setShowNotification={setShowNotification}
          showMobileNavigation={showMobileNavigation}
          setShowMobileNavigation={setShowMobileNavigation}
          setShowLogout={setShowLogout}
          isUnReadedLoading={isUnReadedLoading}
          unReadedCount={unReadedCount}
          readAllNotifications={readAllNotifications}
          routeList={DASH_BOARD_ROUTE_LIST}
        />
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
            setHoverPosition(currentPosition * 61);
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

              {DASH_BOARD_ROUTE_LIST.map((route, index) =>
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
                    onClick={() => setShowNotification((prev) => !prev)}
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

          <div
            onClick={() => setShowLogout(true)}
            style={{
              marginTop: "auto",
              fontSize: ".8rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "flex-end",
              borderTop: `1px solid ${colors.borderColor1}`,
              height: "40px",
            }}
          >
            <LogoutIcon onClick={() => setShowLogout(true)} />
          </div>

          <div
            className="layout-header-active-part"
            onMouseLeave={() => {
              setHoverPosition(currentPosition * 61);
              setShowOverlay(false);
            }}
          >
            <FlexBox flexDirection="column" gap="15px 0">
              <h2 className="layout-header-title">Amore</h2>

              <nav className="layout-header-active-part-navigation">
                {DASH_BOARD_ROUTE_LIST.map((route, index) => (
                  <LayoutLinkBox
                    buttonClick={() => setShowNotification((prev) => !prev)}
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

            <div
              onClick={() => setShowLogout(true)}
              style={{
                marginTop: "auto",
                fontSize: ".8rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "flex-end",
                borderTop: `1px solid ${colors.borderColor1}`,
                height: "40px",
                paddingBottom: "3px",
              }}
            >
              {t("BUTTONS.LOGOUT_BUTTON")}
            </div>
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

  function handleLocationPermissionInitial() {
    handleLocationPermission({
      permissionType: "geolocation",
      listenChange: true,
      onChange: (e) => {
        if (e.currentTarget.state === "denied") setShowLocationBanner(true);
        else {
          setShowLocationBanner(false);
          setShowLocationPermissionPopup(false);
        }
      },
      onGranted: () => {
        setShowLocationBanner(false);
      },
      onDenied: () => {
        setShowLocationBanner(true);
      },
      onPositionReveal: (positon) => {
        //Konum alındığında
        setShowLocationBanner(false);
      },
      //Konum alınamadı ERROR
      onPositionDenied: (error) => {
        setShowLocationBanner(true);
      },
    });
  }

  async function handleNotificationPermission() {
    //If not notification permissin granted request notification permission

    const permission = await Notification.requestPermission();

    //If user allowed permission, permission now granted set FCM Token to user to get nototification - messages
    if (permission === "granted") {
      try {
        // Voluntary Application Server Identification => Gönüllü Uygulama Sunucusu Tanımlaması
        const vapidKey =
          "BFkciB-OrPueQmN0vizjgIgmkzTwi0yO1AYCCa9Pv4Hh1M_iXr5pnpVdBwrSTOxOtNWhajHhL8ZcQZvVO_TbZx8";

        const token = await getToken(messaging, {
          vapidKey: vapidKey,
        });

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
          } else {
            console.warn("Old Token and Token Same !");
          }
        } else {
          const addResponse = await userFcmToken({
            type: "add",
            token: token,
            language: language,
          });

          localStorage.setItem("fcmToken", JSON.stringify(token));
        }
      } catch (e) {
        console.error(e);
      }
    } else if (permission === "default") {
    } else if (permission === "denied") {
    }
  }
};

export default Dashboard;
