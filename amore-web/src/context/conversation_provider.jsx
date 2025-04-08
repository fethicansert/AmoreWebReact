import React, { createContext, useEffect, useState } from 'react'
import { useAuth } from '../hooks/use_auth';
import { axiosAmore } from '../api/axios';
import { useUserActivty } from '../hooks/use_user_activity';

export const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {

    //STATES
    const [conversations, setConversations] = useState([]);
    const [isConversationsLoading, setIsConversationsLoading] = useState(true);

    //CONTEXT
    const { auth, isAuthenticated } = useAuth();
    const { activeUsers } = useUserActivty();

    //SIDE-EFFECTS
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

            if (response?.data.response.code === 200) {
                console.log(response.data.data);

                setConversations(response.data.data);
            }

        }
        catch (e) { console.log(e); }
        finally { setIsConversationsLoading(false); }
    }


}

export default ConversationProvider
