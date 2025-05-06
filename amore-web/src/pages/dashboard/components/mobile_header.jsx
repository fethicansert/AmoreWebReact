import React from "react";
import HeaderNotifications from "./header_notifications";
import { colors } from "../../../utils/theme";
import MobileNavigationItem from "./mobile_navigation_item";
import {
  AmoreCoinIcon,
  CrossCloseIcon,
  LogoutIcon,
  NotificationIcon,
} from "../../../assets/svg/svg_package";
import { TbMenu2 } from "react-icons/tb";
import CurrentUserInfoBox from "../../../copmonents/current_user_info_box";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../hooks/use_auth";
import FlexBox from "../../../copmonents/flex_box";

const MobileHeader = ({
  showNotification,
  setShowNotification,
  showMobileNavigation,
  setShowMobileNavigation,
  setShowLogout,
  isUnReadedLoading,
  unReadedCount,
  readAllNotifications,
  routeList,
}) => {
  const { t } = useTranslation();
  const { auth } = useAuth();
  return (
    <div
      style={{
        border: `1px solid ${colors.borderColor1}`,
        borderRadius: "16px",
        marginBottom: "5px",
        background: colors.backGround3,
        display: "grid",
        gap: "0 7px",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        padding: "1rem .8rem",
      }}
    >
      {showNotification && (
        <HeaderNotifications
          readAllNotifications={readAllNotifications}
          showBackButton={true}
          onBackBottunClick={() => setShowNotification(false)}
        />
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
            <span style={{ fontWeight: 600, color: colors.brand1 }}>Kapat</span>
          </div>

          {routeList.map((route, index) =>
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
            {t("BUTTONS.LOGOUT_BUTTON")}
          </div>
        </div>
      )}
      <TbMenu2
        color={colors.brand1}
        size={25}
        onClick={() => setShowMobileNavigation(true)}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox gap="0 5px">
          <img
            width={35}
            height={35}
            style={{ borderRadius: "50%" }}
            src={auth?.photos?.[0]?.url}
          />
          <span style={{ fontWeight: 300, fontSize: ".93rem" }}>
            {auth?.name}
          </span>
        </FlexBox>

        <FlexBox gap="0 5px">
          <AmoreCoinIcon width="21" height="21" />
          <span style={{ fontWeight: 600, fontSize: ".93rem" }}>
            {auth.credits}
          </span>
        </FlexBox>
      </div>

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
          <div style={{ top: "-8px" }} className="unreaded-notification-count">
            {" "}
            {unReadedCount < 99 ? unReadedCount : 99}{" "}
          </div>
        )}
        <NotificationIcon
          width="24"
          height="24"
          color={showNotification ? colors.brand1 : colors.iconColor}
        />
      </div>
    </div>
  );
};

export default MobileHeader;
