import React, { useEffect, useRef, useState } from "react";
import { useConversation } from "../../../hooks/use_conversation";
import { ArrowHeadRight, SearchIcon } from "../../../assets/svg/svg_package";
import ChatCard from "../components/chat_card";
import whatsAppIcon from "../../../assets/icons/whatsapp_icon.png";
import { useAuth } from "../../../hooks/use_auth";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../css/dashboard/chat.css";
import { axiosAmore } from "../../../api/axios";
import ChatBubbleShimmer from "../components/chat_bubble_shimmer";
import ChatType from "../components/chat_type";
import ChatInput from "../components/chat_input";
import { getImageDimensions } from "../../../utils/functions";
import ChatGiftSelect from "../components/chat_gift_select";
import ChatImagePreview from "../components/chat_image_preview";
import ChatContentHeader from "../components/chat_content_header";
import ChatSidebarSearch from "../components/chat_sidebar_search";
import ChatSidebarUsers from "../components/chat_sidebar_users";

const Chat = () => {
  //NAVIGATION
  const location = useLocation();

  //STATES
  const [searchedConversations, setSearchedConversations] = useState([]);
  const [search, setSearch] = useState("");

  //User can come from another pages with state user index so I can show selected user conversation.
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

  // If user type something means user in searching state
  const isSearching = search.length > 0;

  //REFS
  const currentChatUser = useRef(
    getUser({
      conversation: !isSearching
        ? conversations[currentChatIndex]
        : searchedConversations[currentChatIndex],
    })
  );
  //Use this to get height of message content so and we can know how much sroll need to scroll to bottom.
  const messageContentRef = useRef();
  //Use this check if messages is initial load state or not if initial scroll instant if not smooth behavior.
  const isInitialLoadRef = useRef(true);

  //If user searching setUser from searched conversation if not user main conversation
  useEffect(() => {
    currentChatUser.current = getUser({
      conversation: !isSearching
        ? conversations[currentChatIndex]
        : searchedConversations[currentChatIndex],
    });
  }, [currentChatIndex, conversations]);


  //If initialMessageLoading instantly go down if not smoothly scroll to show scroll animation
  useEffect(() => {
    //INSTANT SCROLL
    if (isInitialLoadRef.current && messages.length > 0) {
      isInitialLoadRef.current = false;
      messageContentRef.current.scroll({
        top: messageContentRef.current.scrollHeight,
        behavior: "instant",
      });
    }
    //SMOOTH SCROLL
    messageContentRef.current.scroll({
      top: messageContentRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  //Fetch Messages if currentChatIndex or searched conversation changge
  useEffect(() => {
    if (conversations.length > 1)
      getMessages(
        !isSearching
          ? conversations[currentChatIndex]?.id
          : searchedConversations[currentChatIndex]?.id
      );
  }, [currentChatIndex, conversations]);

  //Search and set searchedConversations
  useEffect(() => {
    const arr = conversations.filter((conversation) => {
      const user = getUser({ conversation: conversation });
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchedConversations(arr);
  }, [search, conversations]);

  return (
    <section className="chat">
      <div className="chat-sidebar">

        {/* SIDEBAR SEARCH */}
        <ChatSidebarSearch search={search} setSearch={setSearch} />

        {/* WHATSAPP SUPPORT */}
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

        {/* SIDEBAR CHAT USERS */}
        <ChatSidebarUsers
          getUser={getUser}
          currentChatUser={currentChatUser.current}
          isConversationsLoading={isConversationsLoading}
          searchedConversations={searchedConversations}
          handleConversationChange={handleConversationChange}
        />
      </div>

      <div className="chat-content">

        {/*CHAT CONTENT HEADER */}
        <ChatContentHeader
          isConversationsLoading={isConversationsLoading}
          currentChatUser={currentChatUser.current}
        />

        {/* CHAT CONTENT MESSAGES */}
        <div className="chat-content-messages" ref={messageContentRef}>
          {isMessagesLoading ? (
            <ChatBubbleShimmer />
          ) : (
            messages.map((message) => {
              return <ChatType key={uuidv4()} message={message} />;
            })
          )}
        </div>

        {/* CHAT CONTENT INPUTS */}
        <ChatInput
          sendVoice={sendVoice}
          sendText={sendText}
          handleImageChange={handleImageChange}
          setShowGifts={setShowGifts}
          showGifts={showGifts}
        />

        {/* CHAT GIFT SELECTION */}
        {showGifts && <ChatGiftSelect sendGift={sendGift} />}

        {/* SHOW PREVIEW OF IMAGES SELECTED TO SEND */}
        {showPreviewImage && (
          <ChatImagePreview
            setShowPreviewImage={setShowPreviewImage}
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
            handleImageChange={handleImageChange}
            sendImage={sendImage}
          />
        )}
      </div>
    </section>
  );


  //SEND VOICE
  async function sendVoice({ audioUrl, audioFile, duration }) {
    console.log(audioUrl);
    console.log(audioFile);
    console.log(duration);

    const tempId = uuidv4();

    const optimisticVoiceMessage = {
      id: tempId,
      type: "audio",
      metadata: { duration },
      dataUrl: audioUrl,
      user: auth,
      isSending: true,
    };

    const message = {
      type: "audio",
      user: currentChatUser.current.id,
      duration: duration,
      size: audioFile.size
    };

    setMessages((prev) => [...prev, optimisticVoiceMessage]);

    const formData = new FormData();

    for (const key in message) {
      if (message.hasOwnProperty(key)) {
        formData.append(key, message[key]);
      }
    }

    formData.append("file", audioFile, audioFile.name);

    try {
      const response = await axiosAmore.post("chat/send_message", formData, {
        useAuth: true,
      });
      console.log(response.data.data);
      // setMessages((prev) => [...prev, response.data.data]);

    } catch (err) {
      console.log(err);
    }

  }

  //SEND GIFT
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
      user: currentChatUser.current.id,
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

  //SEND IMAGE
  async function sendImage(index) {
    const tempId = uuidv4();

    const image = selectedImages[index];

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
      user: currentChatUser.current.id,
    };

    const formData = new FormData();

    for (const key in message) {
      if (message.hasOwnProperty(key)) {
        formData.append(key, message[key]);
      }
    }

    formData.append("file", image.file, image.file.name);

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

  //SEND TEXT
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
      user: currentChatUser.current.id,
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

        setSelectedImages((prev) => [
          ...prev,
          {
            fileSize: file.size,
            base64: reader.result,
            dimensions,
            mimeType: file.type,
            file,
          },
        ]);

        setShowPreviewImage(true);
      };
      reader.readAsDataURL(file);

      e.target.value = "";
    }
  }

  function handleConversationChange(index) {
    setCurrentChatIndex(index);
    isInitialLoadRef.current = true;
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
