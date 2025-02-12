import React, { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useAuth } from '../hooks/use_auth';
import { axiosAuth } from '../api/axios';

export const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {

    const [conversations, setConversations] = useState([]);
    const [isConversationsLoading, setIsConversationsLoading] = useState(false);
    const { auth } = useAuth();

    useEffect(() => { if (auth) getMessages(); }, [auth]);

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
