import React from "react";
import CurrentUserInfoBox from "../../../copmonents/current_user_info_box";
import { useAuth } from "../../../hooks/use_auth";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserProfileHeader = () => {
  const { auth } = useAuth();
  const { t, _ } = useTranslation();
  const currentLocation = useLocation().pathname.split("/").slice(-1).pop();

  return (
    <div className="user-profile-header">
      <h3>
        {t(
          `DASHBOARD.PROFILE.ROUTE_NAMES.${
            currentLocation === "old"
              ? "SUPPORT"
              : currentLocation.replace("-", "_").toUpperCase()
          }`
        )}
      </h3>
      <CurrentUserInfoBox
        style={{ width: "fit-content", border: "none", padding: 0 }}
        credits={auth.credits}
        image={auth.photos?.[0].url}
        name={auth.name}
      />
    </div>
  );
};

export default UserProfileHeader;
