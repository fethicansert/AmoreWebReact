import React, { useEffect, useRef, useState } from "react";
import { useConversation } from "../../../hooks/use_conversation";
import { ArrowHeadRight } from "../../../assets/svg/svg_package";
import ChatCard from "../components/chat_card";
import whatsAppIcon from "../../../assets/icons/whatsapp_icon.png";
import { useAuth } from "../../../hooks/use_auth";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import { axiosAmore } from "../../../api/axios";
import ChatBubbleShimmer from "../components/chat_bubble_shimmer";
import ChatType from "../components/chat_type";
import { getImageDimensions } from "../../../utils/functions";
import ChatGiftSelect from "../components/chat_gift_select";
import ChatInput from "../components/chat_input";
import ChatImagePreview from "../components/chat_image_preview";
import ChatContentHeader from "../components/chat_content_header";
import ChatSidebarSearch from "../components/chat_sidebar_search";
import ChatSidebarUsers from "../components/chat_sidebar_users";
import ChatUnlockImage from "../components/chat_unlock_image";
import "../../../css/dashboard/chat.css";
import { useSocket } from "../../../hooks/use_socket";

const Chat = () => {
 
  //NAVIGATION
  const location = useLocation();

  //STATES
  const [searchedConversations, setSearchedConversations] = useState([]);
  const [search, setSearch] = useState("");

  const [messages, setMessages] = useState([]);
  const [showPreviewImage, setShowPreviewImage] = useState(false);
  const [showGifts, setShowGifts] = useState(false);

  const [isMessagesLoading, setIsMessagesLoading] = useState(true);

  const [selectedImages, setSelectedImages] = useState([]);
  const [showUnlockImage, setShowUnlockImage] = useState(false);

  //CONTEXT
  const { auth } = useAuth();
  const { conversations, isConversationsLoading } = useConversation();
  const { socket, isSocketConnected } = useSocket();

  //REFS
  const currentConversationRef = useRef(
    conversations[location?.state?.index || 0]
  );

  const currentChatUser = useRef(
    getUser({ conversation: currentConversationRef.current })
  );

  //Use this to get height of message content so and we can know how much sroll need to scroll to bottom.
  const messageContentRef = useRef();
  //Use this check if messages is initial load state or not if initial scroll instant if not smooth behavior.
  const isInitialLoadRef = useRef(true);

  const unlockImagRef = useRef();

  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  },[messages]) 

  //Fetch Messages and Set Conversation and CurrentUser if conversation length > 1
  useEffect(() => {
    if (conversations.length > 1) {
      currentConversationRef.current =
        conversations[location?.state?.index || 0];
      currentChatUser.current = getUser({
        conversation: currentConversationRef.current,
      });

      getMessages(currentConversationRef.current.id);
    }
  }, [conversations]);

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

  //Search and set searchedConversations
  useEffect(() => {
    const arr = conversations.filter((conversation) => {
      const user = getUser({ conversation: conversation });
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchedConversations(arr);
  }, [search, conversations]);



  useEffect(() => {
    if (isSocketConnected && conversations.length > 1) {
      socket.on("onMessageWithConversation", (message) =>
        handleNewMessage(message)
      );
    }
    return () => {
      if (socket) socket.off("onMessageWithConversation", handleNewMessage);
    };
  }, [isSocketConnected, conversations]);


  const handleNewMessage = (message) => {
    console.log(message);

    // const isMessageNotDuplicate = messagesRef.current.every(msg => msg.id !== message.id);
    // console.log(isMessageNotDuplicate);
    // (currentConversationRef.current.id === message.conversation.id && message.receiverUser.id === auth.id) || isMessageNotDuplicate
    
    if (
      (currentConversationRef.current.id === message.conversation.id && message.receiverUser.id === auth.id)
    ) {
      console.log("added");
      
      setMessages((prev) => [...prev, message]);
    }
  };

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
              return (
                <ChatType
                  key={message?.id}
                  message={message}
                  handleUnlockMessage={handleUnlockMessage}
                />
              );
            })
          )}
        </div>

        {/* CHAT CONTENT INPUTS */}
        <ChatInput
          sendMessage={sendMessage}
          handleImageChange={handleImageChange}
          setShowGifts={setShowGifts}
          showGifts={showGifts}
        />

        {/* CHAT GIFT SELECTION */}
        {showGifts && <ChatGiftSelect sendGift={sendMessage} />}

        {/* SHOW PREVIEW OF IMAGES SELECTED TO SEND */}
        {showPreviewImage && (
          <ChatImagePreview
            setShowPreviewImage={setShowPreviewImage}
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
            handleImageChange={handleImageChange}
            sendImage={sendMessage}
          />
        )}

        {showUnlockImage && (
          <ChatUnlockImage
            image={unlockImagRef.current}
            setShowUnlockImage={setShowUnlockImage}
          />
        )}
      </div>
    </section>
  );

  function handleUnlockMessage({ image, messageId }) {
    unlockImagRef.current = image;
    setShowUnlockImage(true);
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === messageId) {
          return { ...message, isExpired: true };
        }
        return message;
      })
    );
  }

  //SEND TEXT
  async function sendMessage({
    text = "",
    messageType = null,
    audioUrl = null,
    audioFile = null,
    duration = null,
    imageIndex,
    gift = null,
  }) {
    const tempId = uuidv4();

    //If image get selected image
    const image = messageType === "image" ? selectedImages[imageIndex] : null;
    //If image or audio get data url
    const dataUrl =
      messageType === "image"
        ? image.base64
        : messageType === "audio"
        ? audioUrl
        : null;
    //If audio get voice duration
    const metaData = messageType === "audio" ? { duration } : null;

    //set optimistic message
    const optimisticMessage = {
      id: tempId,
      user: auth,
      type: messageType,
      content: text,
      dataUrl: dataUrl,
      gift: gift,
      metadata: metaData,
      isSending: true,
    };

    //Close Image Preview
    messageType === "image" && setShowPreviewImage(false);

    //Close Gifts
    messageType === "gift" && setShowGifts(false);

    setMessages((prev) => [...prev, optimisticMessage]);

    //IF Message Image or Audio get size or null
    const size =
      messageType === "image"
        ? image.fileSize
        : messageType === "audio"
        ? audioFile.size
        : null;

    //Prepare real message
    const message = {
      type: messageType,
      content: text,
      size,
      width: image?.dimensions?.w,
      height: image?.dimensions?.h,
      duration: duration,
      gift: gift?._id,
      user: currentChatUser.current.id,
    };

    let formData = null;

    //if not 'gift' I have to use formData to send API !
    if (messageType !== "gift") {
      formData = new FormData();

      //Fill Form Data
      for (const key in message) {
        if (message.hasOwnProperty(key)) {
          formData.append(key, message[key]);
        }
      }

      //Set File
      if (messageType === "image" || messageType === "audio") {
        const file = messageType === "image" ? image.file : audioFile;
        formData.append("file", file, file?.name);
      }
    }

    //If gift use gift end point else message => send_gift or send_message
    const endpoint = messageType === "gift" ? "gift" : "message";

    try {
      const response = await axiosAmore.post(
        `chat/send_${endpoint}`,
        formData || message,
        {
          useAuth: true,
        }
      );

      if (response.status === 200) {
        //if image use base64 response message has url not neend to fetcth again
        const responseMessage =
          messageType === "image"
            ? { ...response.data.data, dataUrl: image.base64 }
            : messageType === "audio"
            ? { ...response.data.data, dataUrl: audioUrl }
            : response.data.data;

        console.log(response);

        //Exchange optimistic message with real message !!!
        setMessages((prev) =>
          prev.map((msg) => (msg.id === tempId ? responseMessage : msg))
        );
      }
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

  //Change Current Conversation
  function handleConversationChange(conversation) {
    isInitialLoadRef.current = true;
    currentConversationRef.current = conversation;
    currentChatUser.current = getUser({ conversation: conversation });
    getMessages(conversation.id);
  }

  //Used this for participants indexs changes sometimes 0 is sender sometimes 1 use id to get user
  function getUser({ conversation }) {
    return conversation?.participants?.[0]?.id !== auth.id
      ? conversation?.participants[0]
      : conversation?.participants[1];
  }

  //Fetch Messages with given conversation Id
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
