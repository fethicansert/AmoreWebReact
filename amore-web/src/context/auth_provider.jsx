import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/use_localstorage';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useLocalStorage('auth', {});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
