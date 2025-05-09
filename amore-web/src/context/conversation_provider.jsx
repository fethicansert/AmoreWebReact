import React, { createContext, useEffect, useRef, useState } from "react";
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

  const currentPageRef = useRef(1);

  const sortedConversations = useMemo(() => {
    return [...conversations].sort(
      (a, b) =>
        new Date(b?.updatedDate || b.updatedDate) -
        new Date(a?.updatedDate || a.updatedDate)
    );
  }, [conversations]);

  //CONTEXT
  const { auth, isAuthenticated } = useAuth();

  //SIDE-EFFECTS
  useEffect(() => {
    if (isAuthenticated)
      getConversations({
        onLoad: () => setIsConversationsLoading(true),
        onFinaly: () => setIsConversationsLoading(false),
      });
  }, [isAuthenticated]);

  // console.log(sortedConversations);

  return (
    <ConversationContext.Provider
      value={{
        sortedConversations,
        conversations,
        setConversations,
        isConversationsLoading,
        isConversationNotEmpty,
        getConversations,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );

  async function getConversations({ onLoad, onFinaly }) {
    onLoad();
    try {
      const response = await axiosAmore.get(
        `/chat/conversations?page=${currentPageRef.current}`,
        {
          headers: { Authorization: auth.token },
        }
      );

      if (response?.data.response.code === 200) {
        setConversations((prev) => [...prev, ...response.data.data]);
        currentPageRef.current = currentPageRef.current + 1;
      }
    } catch (e) {
      console.log(e);
    } finally {
      onFinaly();
    }
  }
};

export default ConversationProvider;
