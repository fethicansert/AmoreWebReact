import React, { startTransition, useEffect, useLayoutEffect, useRef, useState, useTransition } from 'react';
import { useConversation } from '../../../hooks/use_conversation';
import { ArrowHeadRight, CrossCloseIcon, MicrophoneIcon, PlayIcon, SearchIcon, SendGiftIcon, SendImageIcon, SendMessageIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import ChatCard from '../components/chat_card';
import whatsAppIcon from '../../../assets/icons/whatsapp_icon.png';
import { useAuth } from '../../../hooks/use_auth';
import { v4 as uuidv4 } from 'uuid';
import NotificationShimmer from '../components/notification_shimmer';
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box';
import FlexBox from '../../../copmonents/flex_box';
import ChatCardImage from '../components/chat_card_image';
import { useLocation, useNavigate } from "react-router-dom";
import '../../../css/dashboard/chat.css'
import { axiosAmore } from '../../../api/axios';
import ChatBubbleShimmer from '../components/chat_bubble_shimmer';
import ChatType from '../components/chat_type';
import { useOptimistic } from "react";
import ChatInput from '../components/chat_input';

const Chat = () => {

    //NAVIGATION
    const navigate = useNavigate();
    const location = useLocation();

    //STATES
    const [searchedConversations, setSearchedConversations] = useState([]);
    const [search, setSearch] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);
    const [currentChatIndex, setCurrentChatIndex] = useState(location?.state?.index || 0);
    const [messages, setMessages] = useState([]);
    const [showPreviewImage, setShowPreviewImage] = useState(false);

    const [isMessagesLoading, setIsMessagesLoading] = useState(true);

    //CONTEXT
    const { auth } = useAuth();
    const { conversations, isConversationsLoading } = useConversation();

    //CONSTANTS
    const placeHolderText = searchFocused ? 'Aramaya başla!' : 'Birini mi arıyorsun?';
    const currentChatUser = getUser({ conversation: conversations[currentChatIndex] });

    const messageContentRef = useRef();
    const isInitialLoadRef = useRef(true);
    const sendImageRef = useRef(null);

    useEffect(() => {
        if (isInitialLoadRef.current && messages.length > 0) {
            messageContentRef.current.scroll({ top: messageContentRef.current.scrollHeight, behavior: 'instant' });
            isInitialLoadRef.current = false;
        } else {
            messageContentRef.current.scroll({ top: messageContentRef.current.scrollHeight, behavior: 'smooth' });
        }

    }, [messages])

    useEffect(() => {
        const arr = conversations.filter(conversation => {
            const user = getUser({ conversation: conversation })
            return user.name.toLowerCase().includes(search.toLowerCase());
        });
        setSearchedConversations(arr);
    }, [search, conversations]);

    useEffect(() => {
        if (conversations.length > 1)
            getMessages(conversations[currentChatIndex].id);
    }, [currentChatIndex, conversations]);

    return (
        <section className='chat'>

            <div className='chat-sidebar'>

                <div className={`chat-sidebar-search ${searchFocused ? 'active' : ''}`} >
                    <SearchIcon color={colors.iconColor} width='27' height='27' style={{ margin: '0 1rem' }} />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onBlur={() => setSearchFocused(false)}
                        onFocus={() => setSearchFocused(true)}
                        className='chat-sidebar-search-input'
                        placeholder={placeHolderText} />
                </div>

                <ChatCard image={whatsAppIcon} title={'WhatsApp Destek'} text={'Destek için hemen yaz.'} className={'chat-card-whatsapp'} icon={<ArrowHeadRight className='chat-card-whatssapp-arrow' color={'#000000'} width='35px' height='35px' />} />

                <div className='chat-card-user-wrapper' >

                    {
                        isConversationsLoading
                            ? <div style={{ padding: '0 1rem' }}>
                                {Array(10).fill().map((_, i) => <NotificationShimmer key={uuidv4()} marginBlock='27px' />)}
                            </div>
                            : searchedConversations.length > 0 ?
                                searchedConversations.map((conversation, index) => {
                                    const user = getUser({ conversation: conversation })
                                    const text = !conversation?.lastMessage?.content ? 'Hadi ilk adımı sen at!' : conversation?.lastMessage?.content.length > 30 ? `${conversation?.lastMessage?.content.slice(0, 30)}...` : conversation?.lastMessage?.content;
                                    const time = conversation?.createdDate;
                                    const currentUser = conversations[currentChatIndex].participants[0].id !== auth.id ? conversations[currentChatIndex].participants[0] : conversations[currentChatIndex].participants[1];

                                    return <ChatCard
                                        key={uuidv4()}
                                        onClick={() => {
                                            setCurrentChatIndex(index);
                                            isInitialLoadRef.current = true;
                                        }}
                                        className={`chat-card-user ${currentUser.id === user.id ? 'active' : ''}`}
                                        image={user.photos[0].url} title={user.name}
                                        text={text}
                                        time={time}
                                        showStatus={true}
                                        status={index % 2 === 0}
                                    />
                                }) : <p className='sidebar-empty-chat-text'>Sohmbet bulunamadı. Birileriyle eşleşin ve konuşmaya başlayın!</p>
                    }

                </div>

            </div>

            <div className='chat-content'>

                {/* //Send image preview */}
                {showPreviewImage && <div className='chat-image-preview'>

                    <div className='chat-image-preview-container'>
                        <CrossCloseIcon onClick={() => {
                            setShowPreviewImage(false);
                            sendImageRef.current = null;
                        }} width='28px' height='28px' style={{ position: 'absolute', top: '0', right: '0', margin: '1.5rem', cursor: 'pointer' }} />
                        <img src={sendImageRef.current} />
                    </div>

                    <div className='chat-image-preview-input-wrapper'>
                        <input className='chat-image-preview-input' placeholder='Bir şeyler yaz' autoFocus={true} />
                        <div className='send-image-button' onClick={sendImage}>
                            <SendImageIcon width='28px' height='28px' color={colors.backGround3} />
                        </div>
                    </div>
                </div>}


                <div className='chat-content-header'>
                    {
                        !isConversationsLoading
                            ? <div className='current-chat-user' onClick={() => navigate(`/dashboard/user/${currentChatUser.id}`)}>
                                <ChatCardImage image={currentChatUser?.photos[0].url} showStatus={true} radius='53px' status={true} />
                                <FlexBox width={'100%'} flexDirection='column' alignItems='flex-start' gap='2.5px 0'>
                                    <span className='current-chat-user-name'>{currentChatUser?.name}</span>
                                    <span className='current-chat-user-status'>Çevrim içi</span>
                                </FlexBox>
                            </div>
                            : <NotificationShimmer marginBlock='0' width='200px' showIcon={false} />
                    }
                    <CurrentUserInfoBox style={{ width: 'fit-content', border: 'none' }} credits={auth.credits} image={auth.photos?.[0].url} name={auth.name} />
                </div>

                <div className='chat-content-messages' ref={messageContentRef}>


                    {isMessagesLoading
                        ? <ChatBubbleShimmer />
                        : messages.map(message => {
                            return <ChatType key={uuidv4()} message={message} />
                        })
                    }

                </div>

                <ChatInput sendText={sendText} handleImageChange={handleImageChange} />

            </div>

        </section >

    );

    //Work when user upload image reads file-image and setStates
    function handleImageChange(e) {

        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = function () {
                sendImageRef.current = reader.result;
                setShowPreviewImage(true);
            };
            reader.readAsDataURL(file);

            e.target.value = "";
        }
    }

    async function sendImage() {

        const tempId = uuidv4();

        // const optimisticMessage = {
        //     id: tempId,
        //     content: text,
        //     type: 'text',
        //     user: auth,
        //     isSending: true
        // };

        const imageMessage = {
            dataUrl: sendImageRef.current,
            type: 'image',
            user: auth,
            // isSending: true
        };

        setMessages(prev => [...prev, imageMessage]);
        setShowPreviewImage(false);
    }

    async function sendText(text) {

        const tempId = uuidv4();

        const optimisticMessage = {
            id: tempId,
            content: text,
            type: 'text',
            user: auth,
            isSending: true
        };

        const message = {
            content: text,
            type: 'text',
            user: currentChatUser.id,
        };

        setMessages(prev => [...prev, optimisticMessage]);

        try {
            const response = await axiosAmore.post('chat/send_message', message, { useAuth: true });
            setMessages(prev => prev.map(msg => msg.id === tempId ? response.data.data : msg));
        } catch (err) {
            console.log(err);
        }


    }

    function getUser({ conversation }) {
        return conversation?.participants?.[0]?.id !== auth.id ? conversation?.participants[0] : conversation?.participants[1];
    }

    async function getMessages(conversationId) {
        setIsMessagesLoading(true);
        try {
            const response = await axiosAmore.get(`chat/messages_v2?page=1&conversation=${conversationId}`, { useAuth: true });
            const reversedMessages = response.data.data.messages.reverse();
            setMessages(reversedMessages);
        } catch (e) {
            console.log(e);
        } finally {
            setIsMessagesLoading(false);
        }
    }
}

export default Chat
