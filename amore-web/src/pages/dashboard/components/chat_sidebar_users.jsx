import React from "react";
import ChatCard from "./chat_card";
import NotificationShimmer from "./notification_shimmer";
import { v4 as uuidv4 } from "uuid";
import { useUserActivty } from "../../../hooks/use_user_activity";

const ChatSidebarUsers = ({
  currentChatUser,
  isConversationsLoading,
  searchedConversations,
  handleConversationChange,
  getUser
}) => {

  const { checkUsersStatus } = useUserActivty();

  return (
    <div className="chat-card-user-wrapper">
      {isConversationsLoading ? (
        <div style={{ padding: "0 1rem" }}>
          {Array(10)
            .fill()
            .map((_, i) => (
              <NotificationShimmer key={uuidv4()} marginBlock="27px" />
            ))}
        </div>
      ) : searchedConversations.length > 0 ? (
        searchedConversations.map((conversation, index) => {
          const user = getUser({ conversation: conversation });
          const text = getLastMessage({ conversation: conversation });
          const time = conversation?.createdDate;
          const isActive = checkUsersStatus(user.id);

          return (
            <ChatCard
              key={uuidv4()}
              onClick={() => handleConversationChange(index)}
              className={`chat-card-user ${currentChatUser?.id === user.id ? "active" : ""
                }`}
              image={user.photos[0].url}
              title={user.name}
              text={text}
              time={time}
              showStatus={true}
              status={isActive}
            />
          );
        })
      ) : (
        <p className="sidebar-empty-chat-text">
          Sohmbet bulunamadı. Birileriyle eşleşin ve konuşmaya başlayın!
        </p>
      )}
    </div>
  );


  function getLastMessage({ conversation }) {
    if (!conversation?.lastMessage) return "Hadi ilk adımı sen at!";

    switch (conversation?.lastMessage.type) {
      case "text":
        return conversation?.lastMessage?.content.length > 30
          ? `${conversation?.lastMessage?.content.slice(0, 30)}...`
          : conversation?.lastMessage?.content;

      case "image":
        return "📷 Fotoğraf";

      case "audio":
        return "🎵 Ses Kaydı";

      case "gift":
        return "🎁 Gift";

      case "call_request":
        return "📞 Arama";

      default:
        return "✉️ Mesaj";
    }
  }
};

export default ChatSidebarUsers;
