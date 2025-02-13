import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import React from 'react'
import { useAuth } from "../hooks/use_auth";

export const SocketContext = createContext();


const SocketProvider = ({ children }) => {

    const [socketData, setSocketData] = useState();
    // const { auth } = useAuth();

    // useEffect(() => {
    //     const socket = io('http://165.227.142.52:3170', {
    //         transports: ['websocket'],
    //         autoConnect: true,
    //         forceNew: true,
    //         extraHeaders: {
    //             'Authrorization': auth?.token
    //         },
    //         query: {
    //             'Authrorization': auth?.token
    //         }
    //     });

    //     socket.on('connect', () => { console.log('Connected to socket server'); });

    //     return () => socket.disconnect();
    // })

    return (
        <SocketContext.Provider value={{ socketData }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider
