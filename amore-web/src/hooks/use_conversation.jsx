import { useContext } from "react";
import { ConversationContext } from "../context/conversation_provider";
export const useConversation = () => useContext(ConversationContext);