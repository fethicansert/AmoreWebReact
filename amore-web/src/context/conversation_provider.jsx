import React, { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useAuth } from '../hooks/use_auth';
import { axiosAuth } from '../api/axios';

export const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {

    const [conversations, setConversations] = useState([]);
    const [isConversationsLoading, setIsConversationsLoading] = useState(false);
    const { auth } = useAuth();

    useEffect(() => {

        if (auth) {
            // const socket = io('http://165.227.142.52:3170', {
            //     transports: ['websocket'],
            //     autoConnect: true,
            //     forceNew: true,
            //     extraHeaders: {
            //         'Authrorization': auth?.token
            //     },
            //     query: {
            //         'Authrorization': auth?.token
            //     }
            // });

            // socket.on('connect', () => { console.log('Connected to socket server'); });

            getMessages();
        }

        // return () => socket.disconnect();
    }, [auth]);

    return (
        <ConversationContext.Provider value={{ conversations, isConversationsLoading }}>
            {children}
        </ConversationContext.Provider>
    )


    async function getMessages() {
        setIsConversationsLoading(true);
        try {
            const response = await axiosAuth.get('/chat/conversations?page=1', {
                headers: { Authorization: auth.token }
            });

            console.log(response.data);

            if (response?.data.response.code === 200)
                setConversations(response.data.data)
        }
        catch (e) { console.log(e); }
        finally { setIsConversationsLoading(false); }
    }
}

export default ConversationProvider
