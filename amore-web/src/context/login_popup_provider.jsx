import React, { createContext, useState } from 'react'


export const LoginPopupContext = createContext()

const LoginPopupProvider = ({ children }) => {

    const [showLoginPopup, setShowLoginPopup] = useState(false);

    return (
        <LoginPopupContext.Provider value={{ showLoginPopup, setShowLoginPopup }}>
            {children}
        </LoginPopupContext.Provider>
    );
}

export default LoginPopupProvider
