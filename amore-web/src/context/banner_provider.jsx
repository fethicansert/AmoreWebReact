import React, { createContext, useState } from "react";

export const BannerContext = createContext({});

const BannerProvider = ({ children }) => {
  const [limitedOfferOptions, setLimitedOfferOptions] = useState({
    show: false,
    type: "coin",
  });
  const [showLogin, setShowLogin] = useState(false);

  //Bunlar ayri bir contexte alinabilir popUpContext
  const [showLocationBanner, setShowLocationBanner] = useState(false);
  const [showLocationSetting, setShowLocationSetting] = useState(false);

  const [showNotificationBanner, setShowNotificationBanner] = useState(false);
  const [showNotificationPermission, setShowNotificationPermission] =
    useState(false);

  return (
    <BannerContext.Provider
      value={{
        limitedOfferOptions,
        setLimitedOfferOptions,
        showLogin,
        setShowLogin,
        showLocationBanner,
        setShowLocationBanner,
        showLocationSetting,
        setShowLocationSetting,
        showNotificationBanner,
        setShowNotificationBanner,
        showNotificationPermission,
        setShowNotificationPermission,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export default BannerProvider;
