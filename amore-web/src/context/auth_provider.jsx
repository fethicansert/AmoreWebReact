import React, { createContext, useState } from 'react'

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({ name: 'sss', id: '66bb21c3e356b7e518282533' });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
