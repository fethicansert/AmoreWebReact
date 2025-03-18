import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/use_localstorage';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useLocalStorage('auth', {});
    const isAuthenticated = auth?.token ? true : false;
    const isPremium = auth?.premiumSubscription || auth?.isTester;
    // const isPremium = false;

    console.log(auth);

    return (
        <AuthContext.Provider value={{ auth, setAuth, isAuthenticated, isPremium }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
