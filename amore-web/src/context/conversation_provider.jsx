import React, { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/use_auth";
import { axiosAmore } from "../api/axios";
import { useMemo } from "react";
export const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {
  //STATES
  const [conversations, setConversations] = useState([]);
  // const [sortedConversations, setSortedConversations] = useState([]);
  const [isConversationsLoading, setIsConversationsLoading] = useState(true);
  const isConversationNotEmpty = conversations.length > 0;

  const sortedConversations = useMemo(() => {
    return [...conversations].sort(
      (a, b) =>
        new Date(b?.updatedDate || b.updatedDate) -
        new Date(a?.updatedDate || a.updatedDate)
    );
  }, [conversations]);

  //CONTEXT
  const { auth, isAuthenticated } = useAuth();

  console.log(sortedConversations);

  //SIDE-EFFECTS
  useEffect(() => {
    if (isAuthenticated) getMessages();
  }, [isAuthenticated]);

  return (
    <ConversationContext.Provider
      value={{
        sortedConversations,
        conversations,
        setConversations,
        isConversationsLoading,
        isConversationNotEmpty,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );

  async function getMessages() {
    setIsConversationsLoading(true);
    try {
      const response = await axiosAmore.get("/chat/conversations?page=1", {
        headers: { Authorization: auth.token },
      });

      if (response?.data.response.code === 200) {
        setConversations(response.data.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsConversationsLoading(false);
    }
  }
};

export default ConversationProvider;
