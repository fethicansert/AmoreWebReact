import React, { createContext, useState } from 'react';

export const BannerContext = createContext({});

const BannerProvider = ({ children }) => {

    const [limitedOfferOptions, setLimitedOfferOptions] = useState({ show: false, type: 'coin' });

    const [showLogin, setShowLogin] = useState(false);

    return (
        <BannerContext.Provider value={{ limitedOfferOptions, setLimitedOfferOptions, showLogin, setShowLogin }}>
            {children}
        </BannerContext.Provider>
    );
};

export default BannerProvider;
