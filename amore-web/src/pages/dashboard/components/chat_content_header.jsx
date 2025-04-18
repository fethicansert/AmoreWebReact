import React from "react";
import { useAuth } from "../../../hooks/use_auth";
import FlexBox from "../../../copmonents/flex_box";
import NotificationShimmer from "./notification_shimmer";
import CurrentUserInfoBox from "../../../copmonents/current_user_info_box";
import ChatCardImage from "./chat_card_image";
import { useNavigate } from "react-router-dom";
import { useUserActivty } from "../../../hooks/use_user_activity";
import { ArrorHeadLeft } from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import { useMediaPredicate } from "react-media-hook";

const ChatContentHeader = ({ isConversationsLoading, currentConversationUser, showBackButton, setHideChatContent }) => {

  //CONTEXT
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { checkUsersStatus } = useUserActivty();
  const isActiveUser = checkUsersStatus(currentConversationUser?.id);

  //Mobile saklama yapmak gerekecek belki sadece coin gosterin !!!!
  const mobileSize = useMediaPredicate('(min-width:500px)');

  return (
    <div className="chat-content-header">

      {!isConversationsLoading ? (
        <div
          style={{ gridTemplateColumns: showBackButton ? 'auto auto auto' : 'auto auto' }}
          className="current-chat-user"
        >
          {showBackButton && <ArrorHeadLeft strokeWidth="2" color={colors.brand1} onClick={() => setHideChatContent(true)} />}

          <ChatCardImage
            onClick={() => navigate(`/dashboard/user/${currentConversationUser?.id}`)}
            image={currentConversationUser?.photos[0].url}
            showStatus={true}
            radius={mobileSize ? "53px" : "45px"}
            status={isActiveUser}
          />
          {
            mobileSize && <FlexBox
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
          }
        </div>
      ) : (
        <NotificationShimmer marginBlock="0" width="200px" showIcon={false} />
      )}
      {
        <CurrentUserInfoBox
          style={{ width: "fit-content", border: "none", padding: 0 }}
          credits={auth.credits}
          image={auth.photos?.[0].url}
          name={auth.name}
        />
      }
    </div>
  );
};

export default ChatContentHeader;
