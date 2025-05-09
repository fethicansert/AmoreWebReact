import React, { useState } from "react";
import ChatCard from "./chat_card";
import NotificationShimmer from "./notification_shimmer";
import { useUserActivty } from "../../../hooks/use_user_activity";
import { useConversation } from "../../../hooks/use_conversation";

const ChatSidebarUsers = ({
  currentConversationUser,
  isConversationsLoading,

  handleConversationChange,
  getUser,
}) => {
  const { checkUsersStatus } = useUserActivty();
  const { getConversations, sortedConversations } = useConversation();
  const [scrollLoading, setScrollLoading] = useState();

  return (
    <div
      className="chat-card-user-wrapper"
      onScroll={(e) => handleScrollFetch(e)}
    >
      {isConversationsLoading ? (
        <div style={{ padding: "0 1rem" }}>
          {Array(10)
            .fill()
            .map((_, index) => (
              <NotificationShimmer key={index} marginBlock="27px" />
            ))}
        </div>
      ) : sortedConversations.length > 0 ? (
        <>
          {sortedConversations.map((conversation) => {
            const user = getUser({ conversation: conversation });
            const text = getLastMessage({ conversation: conversation });
            const time = conversation?.updatedDate;
            const isActive = checkUsersStatus(user.id);

            return (
              <ChatCard
                key={conversation.id}
                onClick={() => handleConversationChange(conversation)}
                className={`chat-card-user ${
                  currentConversationUser?.id === user.id ? "active" : ""
                }`}
                image={user.photos[0].url}
                title={user.name}
                text={text}
                time={time}
                showStatus={true}
                status={isActive}
              />
            );
          })}

          {scrollLoading && (
            <div style={{ padding: "0 1rem" }}>
              {Array(10)
                .fill()
                .map((_, index) => (
                  <NotificationShimmer key={index} marginBlock="27px" />
                ))}
            </div>
          )}
        </>
      ) : (
        <p className="sidebar-empty-chat-text">
          Sohmbet bulunamadı. Birileriyle eşleşin ve konuşmaya başlayın!
        </p>
      )}
    </div>
  );

  function handleScrollFetch(e) {
    const scrollDiv = e.target;
    const isBottom =
      scrollDiv.scrollTop + scrollDiv.clientHeight >=
      scrollDiv.scrollHeight - 50;
    if (isBottom && !isConversationsLoading && !scrollLoading) {
      getConversations({
        onLoad: () => setScrollLoading(true),
        onFinaly: () => setScrollLoading(false),
      });
    }
  }

  function getLastMessage({ conversation }) {
    if (!conversation?.lastMessage) return "Hadi ilk adımı sen at!";

    switch (conversation?.lastMessage.type) {
      case "text":
        return conversation?.lastMessage?.content.length > 20
          ? `${conversation?.lastMessage?.content.slice(0, 20)}...`
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
