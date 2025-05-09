import React, { createContext, useState } from "react";

export const BannerContext = createContext({});

const BannerProvider = ({ children }) => {
  const [limitedOfferOptions, setLimitedOfferOptions] = useState({
    show: false,
    type: "coin",
  });
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [showLocationBanner, setShowLocationBanner] = useState(false);
  const [showLocationPermissionPopup, setShowLocationPermissionPopup] =
    useState(false);

  const [showNotificationBanner, setShowNotificationBanner] = useState(false);
  const [showNotificationPermissionPopup, setShowNotificationPermissionPopup] =
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
        showLocationPermissionPopup,
        setShowLocationPermissionPopup,
        showNotificationBanner,
        setShowNotificationBanner,
        showNotificationPermissionPopup,
        setShowNotificationPermissionPopup,
        showLogout,
        setShowLogout,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export default BannerProvider;
