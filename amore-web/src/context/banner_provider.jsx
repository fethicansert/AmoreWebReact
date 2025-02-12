import React, { createContext, useState } from 'react';

export const BannerContext = createContext({});

const BannerProvider = ({ children }) => {

    const [showLimitedOffer, setShowLimitedOffer] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <BannerContext.Provider value={{ showLimitedOffer, setShowLimitedOffer, showLogin, setShowLogin }}>
            {children}
        </BannerContext.Provider>
    );
};

export default BannerProvider;
