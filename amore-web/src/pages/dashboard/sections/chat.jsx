import React, { useEffect, useRef, useState } from "react";
import { useConversation } from "../../../hooks/use_conversation";
import {
  ArrowHeadRight,
  CrossCloseIcon,
  SearchIcon,
  SendImageIcon,
  SendMessageIcon,
} from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import ChatCard from "../components/chat_card";
import whatsAppIcon from "../../../assets/icons/whatsapp_icon.png";
import { useAuth } from "../../../hooks/use_auth";
import { v4 as uuidv4 } from "uuid";
import NotificationShimmer from "../components/notification_shimmer";
import CurrentUserInfoBox from "../../../copmonents/current_user_info_box";
import FlexBox from "../../../copmonents/flex_box";
import ChatCardImage from "../components/chat_card_image";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../css/dashboard/chat.css";
import { axiosAmore } from "../../../api/axios";
import ChatBubbleShimmer from "../components/chat_bubble_shimmer";
import ChatType from "../components/chat_type";
import ChatInput from "../components/chat_input";
import { getImageDimensions } from "../../../utils/functions";
import ChatGiftSelect from "../components/chat_gift_select";

const Chat = () => {
  //NAVIGATION
  const navigate = useNavigate();
  const location = useLocation();

  //STATES
  const [searchedConversations, setSearchedConversations] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [currentChatIndex, setCurrentChatIndex] = useState(
    location?.state?.index || 0
  );
  const [messages, setMessages] = useState([]);
  const [showPreviewImage, setShowPreviewImage] = useState(false);
  const [showGifts, setShowGifts] = useState(false);

  const [isMessagesLoading, setIsMessagesLoading] = useState(true);

  const [selectedImages, setSelectedImages] = useState([]);

  //CONTEXT
  const { auth } = useAuth();
  const { conversations, isConversationsLoading } = useConversation();

  //CONSTANTS
  const placeHolderText = searchFocused
    ? "Aramaya başla!"
    : "Birini mi arıyorsun?";
  const currentChatUser = getUser({
    conversation: conversations[currentChatIndex],
  });

  const messageContentRef = useRef();
  const isInitialLoadRef = useRef(true);
  const sendImageRef = useRef({
    base64: "",
    dimensions: {},
    fileSize: 0,
    mimeType: "",
    file: null,
  });

  useEffect(() => {

    if (isInitialLoadRef.current && messages.length > 0) {
      isInitialLoadRef.current = false
      messageContentRef.current.scroll({
        top: messageContentRef.current.scrollHeight,
        behavior: "instant",
      });
    }
    messageContentRef.current.scroll({
      top: messageContentRef.current.scrollHeight,
      behavior: "smooth",
    });

  }, [messages]);

  useEffect(() => {
    const arr = conversations.filter((conversation) => {
      const user = getUser({ conversation: conversation });
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchedConversations(arr);
  }, [search, conversations]);

  useEffect(() => {
    if (conversations.length > 1)
      getMessages(conversations[currentChatIndex].id);
  }, [currentChatIndex, conversations]);

  return (
    <section className="chat">
      <div className="chat-sidebar">
        <div className={`chat-sidebar-search ${searchFocused ? "active" : ""}`}>
          <SearchIcon
            color={colors.iconColor}
            width="27"
            height="27"
            style={{ margin: "0 1rem" }}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onBlur={() => setSearchFocused(false)}
            onFocus={() => setSearchFocused(true)}
            className="chat-sidebar-search-input"
            placeholder={placeHolderText}
          />
        </div>

        <ChatCard
          image={whatsAppIcon}
          title={"WhatsApp Destek"}
          text={"Destek için hemen yaz."}
          className={"chat-card-whatsapp"}
          icon={
            <ArrowHeadRight
              className="chat-card-whatssapp-arrow"
              color={"#000000"}
              width="35px"
              height="35px"
            />
          }
        />

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
              const currentUser =
                conversations[currentChatIndex].participants[0].id !== auth.id
                  ? conversations[currentChatIndex].participants[0]
                  : conversations[currentChatIndex].participants[1];

              return (
                <ChatCard
                  key={uuidv4()}
                  onClick={() => {
                    setCurrentChatIndex(index);
                    isInitialLoadRef.current = true;
                  }}
                  className={`chat-card-user ${currentUser.id === user.id ? "active" : ""
                    }`}
                  image={user.photos[0].url}
                  title={user.name}
                  text={text}
                  time={time}
                  showStatus={true}
                  status={index % 2 === 0}
                />
              );
            })
          ) : (
            <p className="sidebar-empty-chat-text">
              Sohmbet bulunamadı. Birileriyle eşleşin ve konuşmaya başlayın!
            </p>
          )}
        </div>
      </div>

      <div className="chat-content">
        {/* //Send image preview */}
        {showPreviewImage && (
          <div className="chat-image-preview">

            <div className="chat-image-preview-container">

              <CrossCloseIcon
                className="chat-image-preview-close-icon"
                onClick={() => {
                  setShowPreviewImage(false);
                  sendImageRef.current = null;
                }}
                width="28px"
                height="28px"
              />

              <img className="chat-image-preview-big-image" src={selectedImages[0].base64} />

              <div className="chat-image-preview-row">

                <div className="chat-image-preview-row-item">
                  {
                    selectedImages?.[1]?.base64
                      ? <img src={selectedImages?.[1]?.base64} />
                      : <SendImageIcon className='chat-image-preview-send-image-icon' color={colors.backGround3} />
                  }
                  <input
                    onChange={handleImageChange}
                    className='chat-image-input'
                    style={{ borderRadius: '50%' }}
                    type='file'
                    accept="image/*"
                  />
                </div>

                <div className="chat-image-preview-row-item">
                  <SendImageIcon className='chat-image-preview-send-image-icon' color={colors.backGround3} />

                </div>

                <div className="chat-image-preview-row-item">
                  <SendImageIcon className='chat-image-preview-send-image-icon' color={colors.backGround3} />
                </div>

                <div className="chat-image-preview-row-item">
                  <SendImageIcon className='chat-image-preview-send-image-icon' color={colors.backGround3} />
                </div>

              </div>

              <div className="chat-image-preview-input-wrapper">
                <input
                  className="chat-image-preview-input"
                  placeholder="Bir şeyler yaz"
                  autoFocus={true}
                />
                <div className="send-image-button" onClick={sendImage}>
                  <SendMessageIcon
                    width="15px"
                    height="15px"
                    strokeWidth="1.5"
                    color={colors.backGround3}
                  />
                </div>

              </div>

            </div>

            {/* Preview Image */}


          </div>
        )}

        {showGifts && <ChatGiftSelect sendGift={sendGift} />}

        <div className="chat-content-header">
          {!isConversationsLoading ? (
            <div
              className="current-chat-user"
              onClick={() => navigate(`/dashboard/user/${currentChatUser.id}`)}
            >
              <ChatCardImage
                image={currentChatUser?.photos[0].url}
                showStatus={true}
                radius="53px"
                status={true}
              />
              <FlexBox
                width={"100%"}
                flexDirection="column"
                alignItems="flex-start"
                gap="2.5px 0"
              >
                <span className="current-chat-user-name">
                  {currentChatUser?.name}
                </span>
                <span className="current-chat-user-status">Çevrim içi</span>
              </FlexBox>
            </div>
          ) : (
            <NotificationShimmer
              marginBlock="0"
              width="200px"
              showIcon={false}
            />
          )}
          <CurrentUserInfoBox
            style={{ width: "fit-content", border: "none" }}
            credits={auth.credits}
            image={auth.photos?.[0].url}
            name={auth.name}
          />
        </div>

        <div className="chat-content-messages" ref={messageContentRef}>
          {isMessagesLoading ? (
            <ChatBubbleShimmer />
          ) : (
            messages.map((message) => {
              return <ChatType key={uuidv4()} message={message} />;
            })
          )}
        </div>

        <ChatInput
          sendText={sendText}
          handleImageChange={handleImageChange}
          setShowGifts={setShowGifts}
          showGifts={showGifts}
        />
      </div>
    </section>
  );

  async function sendGift({ gift }) {

    const tempId = uuidv4();

    const optimisticGiftMessage = {
      id: tempId,
      type: "gift",
      user: auth,
      gift: gift,
      isSending: true,
    };

    const giftMessage = {
      gift: gift._id,
      user: currentChatUser.id,
    };

    setMessages((prev) => [...prev, optimisticGiftMessage]);
    setShowGifts(false);

    try {
      const response = await axiosAmore.post("chat/send_gift", giftMessage, {
        useAuth: true,
      });

      if (response.status === 200) {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === tempId ? response.data.data : msg))
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function sendImage() {
    const tempId = uuidv4();

    const image = sendImageRef.current;

    const optimisticMessage = {
      id: tempId,
      dataUrl: image.base64,
      type: "image",
      user: auth,
      isSending: true,
    };

    const message = {
      size: image.fileSize,
      width: image.dimensions.w,
      height: image.dimensions.h,
      type: "image",
      user: currentChatUser.id,
      isSending: false,
    };

    const formData = new FormData();

    for (const key in message) {
      if (message.hasOwnProperty(key)) {
        formData.append(key, message[key]);
      }
    }

    const fileName = image.file.name.split("/").pop();

    formData.append("file", image.file, fileName);

    setMessages((prev) => [...prev, optimisticMessage]);
    setShowPreviewImage(false);

    try {
      const response = await axiosAmore.post("chat/send_message", formData, {
        useAuth: true,
      });
      if (response.status === 200) {
        console.log(response);
        const responseMessage = {
          ...response.data.data,
          dataUrl: image.base64,
        };
        setMessages((prev) =>
          prev.map((msg) => (msg.id === tempId ? responseMessage : msg))
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function sendText(text) {
    const tempId = uuidv4();

    const optimisticMessage = {
      id: tempId,
      content: text,
      type: "text",
      user: auth,
      isSending: true,
    };

    const message = {
      content: text,
      type: "text",
      user: currentChatUser.id,
    };

    setMessages((prev) => [...prev, optimisticMessage]);

    const formData = new FormData();

    for (const key in message) {
      if (message.hasOwnProperty(key)) {
        formData.append(key, message[key]);
      }
    }

    try {
      const response = await axiosAmore.post("chat/send_message", formData, {
        useAuth: true,
      });
      setMessages((prev) =>
        prev.map((msg) => (msg.id === tempId ? response.data.data : msg))
      );
    } catch (err) {
      console.log(err);
    }
  }

  //Work when user upload image reads file-image and setStates
  async function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = async function () {
        const dimensions = await getImageDimensions(reader.result);

        setSelectedImages(prev => [{
          fileSize: file.size,
          base64: reader.result,
          dimensions,
          mimeType: file.type,
          file,
        }, ...prev]);

        setShowPreviewImage(true);
      };
      reader.readAsDataURL(file);

      e.target.value = "";
    }
  }

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
        return "📞 Arama"

      default:
        return "✉️ Mesaj";
    }
  }

  function getUser({ conversation }) {
    return conversation?.participants?.[0]?.id !== auth.id
      ? conversation?.participants[0]
      : conversation?.participants[1];
  }

  async function getMessages(conversationId) {
    setIsMessagesLoading(true);
    try {
      const response = await axiosAmore.get(
        `chat/messages_v2?page=1&conversation=${conversationId}`,
        { useAuth: true }
      );
      const reversedMessages = response.data.data.messages.reverse();
      setMessages(reversedMessages);
    } catch (e) {
      console.log(e);
    } finally {
      setIsMessagesLoading(false);
    }
  }
};

export default Chat;


