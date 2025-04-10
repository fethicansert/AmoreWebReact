import React from "react";
import { useAuth } from "../../../hooks/use_auth";
import FlexBox from "../../../copmonents/flex_box";
import NotificationShimmer from "./notification_shimmer";
import CurrentUserInfoBox from "../../../copmonents/current_user_info_box";
import ChatCardImage from "./chat_card_image";
import { useNavigate } from "react-router-dom";
import { useUserActivty } from "../../../hooks/use_user_activity";

const ChatContentHeader = ({ isConversationsLoading, currentConversationUser }) => {

  //CONTEXT
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { checkUsersStatus } = useUserActivty();
  const isActiveUser = checkUsersStatus(currentConversationUser?.id);

  return (
    <div className="chat-content-header">
      {!isConversationsLoading ? (
        <div
          className="current-chat-user"
          onClick={() => navigate(`/dashboard/user/${currentConversationUser?.id}`)}
        >
          <ChatCardImage
            image={currentConversationUser?.photos[0].url}
            showStatus={true}
            radius="53px"
            status={isActiveUser}
          />
          <FlexBox
            width={"100%"}
            flexDirection="column"
            alignItems="flex-start"
            gap="2.5px 0"
          >
            <span className="current-chat-user-name">
              {currentConversationUser?.name}
            </span>
            <span className="current-chat-user-status">{isActiveUser ? 'Çevrim içi' : 'Çevrim dışı'}</span>
          </FlexBox>
        </div>
      ) : (
        <NotificationShimmer marginBlock="0" width="200px" showIcon={false} />
      )}
      <CurrentUserInfoBox
        style={{ width: "fit-content", border: "none" }}
        credits={auth.credits}
        image={auth.photos?.[0].url}
        name={auth.name}
      />
    </div>
  );
};

export default ChatContentHeader;
