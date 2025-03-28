import React, { createContext, useEffect, useState } from 'react'
import { useAuth } from '../hooks/use_auth';
import { axiosAmore } from '../api/axios';

export const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {

    const [conversations, setConversations] = useState([]);
    const [isConversationsLoading, setIsConversationsLoading] = useState(true);
    const { auth, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) getMessages();
    }, [auth]);

    return (
        <ConversationContext.Provider value={{ conversations, isConversationsLoading }}>
            {children}
        </ConversationContext.Provider>
    )

    async function getMessages() {
        setIsConversationsLoading(true);
        try {
            const response = await axiosAmore.get('/chat/conversations?page=1', {
                headers: { Authorization: auth.token }
            });

            if (response?.data.response.code === 200)
                setConversations(response.data.data);
        }
        catch (e) { console.log(e); }
        finally { setIsConversationsLoading(false); }
    }
}

export default ConversationProvider
