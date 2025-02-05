import React, { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useAuth } from '../hooks/use_auth';

export const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {

    const [conversations, setConversations] = useState([]);
    const { auth } = useAuth();

    useEffect(() => {
        const socket = io('http://165.227.142.52:3170', {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            extraHeaders: {
                'Authrorization': auth?.authorization
            },
            query: {
                'Authrorization': auth?.authorization
            }
        });

        socket.on('connect', (e) => {
            console.log('Connected to socket server');
        });

        socket.on('message', (data) => console.log(data));

        return () => socket.disconnect();
    }, []);

    return (
        <ConversationContext.Provider value={{ conversations, setConversations }}>
            {children}
        </ConversationContext.Provider>
    )
}

export default ConversationProvider
