import React from "react";
import CurrentUserInfoBox from "../../../copmonents/current_user_info_box";
import { useAuth } from "../../../hooks/use_auth";
import { useLocation, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaPredicate } from "react-media-hook";
import FlexBox from "../../../copmonents/flex_box";
import { ArrorHeadLeft } from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";

const UserProfileHeader = () => {
  const { auth } = useAuth();
  const { t, _ } = useTranslation();
  const currentLocation = useLocation().pathname.split("/").slice(-1).pop();
  const showUserInfoBox = useMediaPredicate("(max-width:650px)");
  const { setHideContent } = useOutletContext();

  return (
    <div className="user-profile-header">
      <FlexBox>
        {showUserInfoBox && (
          <div
            className="center"
            style={{ padding: ".5rem .5rem .5rem 0" }}
            onClick={() => setHideContent(true)}
          >
            <ArrorHeadLeft color={colors.brand1} strokeWidth="2" />
          </div>
        )}
        <h3>
          {t(
            `DASHBOARD.PROFILE.ROUTE_NAMES.${
              currentLocation === "old"
                ? "SUPPORT"
                : currentLocation.replace("-", "_").toUpperCase()
            }`
          )}
        </h3>
      </FlexBox>
      {!showUserInfoBox && (
        <CurrentUserInfoBox
          style={{ width: "fit-content", border: "none", padding: 0 }}
          credits={auth.credits}
          image={auth.photos?.[0].url}
          name={auth.name}
        />
      )}
    </div>
  );
};

export default UserProfileHeader;
