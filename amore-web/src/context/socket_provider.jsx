import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import React from 'react'
import { useAuth } from "../hooks/use_auth";

export const SocketContext = createContext();


const SocketProvider = ({ children }) => {

    const [socketData, setSocketData] = useState();
    const { auth } = useAuth();

    useEffect(() => {
        const socket = io('https://devsok.servicelabs.tech', {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            extraHeaders: {
                'Authorization': auth?.token
            },
            query: {
                'Authorization': auth?.token
            }
        }, []);

        socket.on('connect', () => { console.log('Connected to socket server'); });

        socket.on('connect_error', () => { console.log('Connected to socket server'); });

        socket.on('error', (error) => { console.log(`Socket Error:, ${error}`); });

        return () => socket.disconnect();
    })

    return (
        <SocketContext.Provider value={{ socketData }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider
