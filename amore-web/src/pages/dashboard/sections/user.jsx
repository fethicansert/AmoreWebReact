import React, { useEffect, useRef, useState } from "react";
import "../../../css/dashboard/user.css";
import { Outlet } from "react-router-dom";
import UserProfileNavigation from "../components/user_profile_navigation";
import PremiumBox from "../../../copmonents/premium_box";
import { useMediaPredicate } from "react-media-hook";
import DiscoverCTA from "../../../copmonents/discover_cta";

const User = () => {
  //REFS
  const userRightColumnRef = useRef();
  const hidePremiumBox = useMediaPredicate("(min-width:1250px)");
  const isOneColumn = useMediaPredicate("(max-width:650px)");
  const [hideContent, setHideContent] = useState(true);

  useEffect(() => {});

  return (
    <section className="user-profile">
      <div className="user-profile-top-banner"></div>

      <div className="user-profile-grid">
        {(hideContent || !isOneColumn) && (
          <div className="user-profile-left-col">
            <UserProfileNavigation setHideContent={setHideContent} />
            {hidePremiumBox && <PremiumBox />}
            {hideContent && isOneColumn && <DiscoverCTA />}
          </div>
        )}

        {(!hideContent || !isOneColumn) && (
          <div className="user-profile-right-col" ref={userRightColumnRef}>
            <Outlet
              context={{
                userRightColumnRef,
                setHideContent,
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default User;
