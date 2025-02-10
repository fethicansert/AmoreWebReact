import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || {});

    console.log(auth);


    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
