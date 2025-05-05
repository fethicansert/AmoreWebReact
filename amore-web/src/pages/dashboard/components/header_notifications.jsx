import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  NotificationConfirmIcon,
  NotificationIcon,
  TrashIcon,
} from "../../../assets/svg/svg_package";
import FlexBox from "../../../copmonents/flex_box";
import PermissionBanner from "../../../copmonents/permission_banner";
import NotificationItem from "./notification_item";
import { useTranslation } from "react-i18next";
import { colors } from "../../../utils/theme";
import { useBanner } from "../../../hooks/use_banner";
import { axiosAmore } from "../../../api/axios";
import { handlePushPermission } from "../../../utils/functions";
import NotificationShimmer from "./notification_shimmer";

const HeaderNotifications = ({
  readAllNotifications,
  showBackButton,
  onBackBottunClick,
}) => {
  const [notifications, setNotifications] = useState([]);

  console.log(notifications);

  const [isNotificationsLoading, setIsNotificationsLoadings] = useState(true);
  const [isNotificationsScollLoading, setIsNotificationsScollLoading] =
    useState(false);

  //CONTEXT
  const { t } = useTranslation();
  const { showNotificationBanner, setShowNotificationBanner } = useBanner();

  //REFS
  const notficationPageRef = useRef(1);
  const abortControllerRef = useRef(new AbortController());

  useEffect(() => {
    getNotificationList({ setLoading: setIsNotificationsLoadings });

    handlePushPermission({
      timeOut: 1200,
      showPrompt: true,
      onGranted: () => setShowNotificationBanner(false),
      onDenied: () => setShowNotificationBanner(true),
      onPrompt: () => setShowNotificationBanner(true),
      onPromptGranted: () => setShowNotificationBanner(false),
    });

    return () => {
      abortControllerRef.current.abort();
    };
  }, []);

  return (
    <div className={`notifications`}>
      <div className="notification-header-container">
        <FlexBox
          justifyContent="space-between"
          className="notifications-header"
        >
          <FlexBox gap="0 14px" onClick={onBackBottunClick}>
            {showBackButton && <ArrowLeftIcon color={colors.brand1} />}
            <h3>{t("DASHBOARD.TITLES.NOTIFICATIONS_TITLE")}</h3>
          </FlexBox>

          <FlexBox gap="0 14px">
            <NotificationConfirmIcon
              width="25"
              height="25"
              color={colors.iconColor}
              onClick={readAllNotifications}
            />
            <TrashIcon width="24" height="24" onClick={null} />
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
        onScroll={onNotificationsScroll}
        className="notifications-wrapper"
        style={{
          transform: `translateY(${showNotificationBanner ? 45 : 0}px)`,
        }}
      >
        {isNotificationsLoading ? (
          Array(10)
            .fill()
            .map((_, i) => <NotificationShimmer marginBlock="25px" key={i} />)
        ) : notifications.length > 0 ? (
          <>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification?._id}
                notification={notification}
              />
            ))}
            {isNotificationsScollLoading &&
              Array(10)
                .fill()
                .map((_, i) => (
                  <NotificationShimmer marginBlock="25px" key={i} />
                ))}
          </>
        ) : (
          <div className="notifications-empty-notifications">
            {/* <Lottie animationData={ghostLottie} className="ghost-lottie" /> */}
            <div>
              <p>{t("DASHBOARD.TITLES.EMPTY_NOTIFICATIONS_TITLE")}</p>
              <p>{t("DASHBOARD.TITLES.EMPTY_NOTIFICATIONS_SUB_TITLE")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  async function getNotificationList({ setLoading }) {
    setLoading(true);

    abortControllerRef.current = new AbortController();

    try {
      const response = await axiosAmore.get(
        `notification/get?page=${notficationPageRef.current}`,
        { useAuth: true, signal: abortControllerRef.current.signal }
      );

      if (response.data.response.code === 200) {
        setNotifications((prev) => [...prev, ...response.data.data]);
        notficationPageRef.current = notficationPageRef.current + 1;
      }
    } catch (e) {
      if (e.name === "CanceledError" || e.name === "AbortError") {
        console.error("Notifications: Request Abortion!");
      } else {
        console.error("Notifications:", e);
      }
    } finally {
      setLoading(false);
    }
  }

  function onNotificationsScroll(e) {
    const scrollDiv = e.target;
    const isBottom =
      scrollDiv.scrollTop + scrollDiv.clientHeight >=
      scrollDiv.scrollHeight - 50;

    if (isBottom && !isNotificationsLoading && !isNotificationsScollLoading) {
      getNotificationList({ setLoading: setIsNotificationsScollLoading });
    }
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
};

export default HeaderNotifications;
