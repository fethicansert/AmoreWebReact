import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const MobileNavigationItem = ({ route, closeMobileNavigation }) => {
  const { t } = useTranslation();

  return (
    <NavLink
      onClick={closeMobileNavigation}
      to={route.path}
      className="mobile-navigation-item"
    >
      {route.icon}
      {t(
        `ROUTE_NAMES.${
          route?.path?.replace("-", "_").toUpperCase() || "NOTIFICATIONS"
        }`
      )}
    </NavLink>
  );
};

export default MobileNavigationItem;
