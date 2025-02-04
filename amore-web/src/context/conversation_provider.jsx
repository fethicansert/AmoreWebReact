import React, { createContext, useState } from 'react'

export const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {

    const [conversations, setConversations] = useState([]);

    console.log(conversations);

    return (
        <ConversationContext.Provider value={{ conversations, setConversations }}>
            {children}
        </ConversationContext.Provider>
    )
}

export default ConversationProvider
