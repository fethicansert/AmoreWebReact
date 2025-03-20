import React, { useEffect, useRef, useState } from 'react';
import { useConversation } from '../../../hooks/use_conversation';
import '../../../css/dashboard/chat.css'
import { ArrowHeadRight, SearchIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import ChatCard from '../components/chat_card';
import whatsAppIcon from '../../../assets/icons/whatsapp_icon.png';
import { useAuth } from '../../../hooks/use_auth';
import { v4 as uuidv4 } from 'uuid';
import NotificationShimmer from '../components/notification_shimmer';
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box';
import FlexBox from '../../../copmonents/flex_box';
import ChatCardImage from '../components/chat_card_image';


const Chat = () => {
    const { auth } = useAuth();
    const { conversations, isConversationsLoading } = useConversation();
    const [searchedConversations, setSearchedConversations] = useState([]);
    const [search, setSearch] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);
    const [currentChatIndex, setCurrentChatIndex] = useState(0);

    const placeHolderText = searchFocused ? 'Aramaya başla!' : 'Birini mi arıyorsun?';
    const currentChatUser = getUser({ conversation: conversations[currentChatIndex] })



    useEffect(() => {
        const arr = conversations.filter(conversation => {
            const user = getUser({ conversation: conversation })
            return user.name.toLowerCase().includes(search.toLowerCase());
        });
        setSearchedConversations(arr);
    }, [search, conversations])

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

                <div className='chat-card-user-wrapper'>

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
                                        onClick={() => setCurrentChatIndex(index)}
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
                <div className='chat-content-header'>
                    <div className='current-chat-user'>
                        <ChatCardImage image={currentChatUser?.photos[0].url} showStatus={true} radius='52px' status={true} />

                        <FlexBox width={'100%'} flexDirection='column' alignItems='flex-start' gap='2.5px 0'>
                            <span className='current-chat-user-name'>{currentChatUser?.name}</span>
                            <spa className='current-chat-user-status'>Çevrim içi</spa>
                        </FlexBox>
                    </div>
                    <CurrentUserInfoBox style={{ width: 'fit-content', border: 'none' }} credits={auth.credits} image={auth.photos?.[0].url} name={auth.name} />
                </div>
            </div>

        </section>
    );


    function getUser({ conversation }) {
        return conversation?.participants?.[0]?.id !== auth.id ? conversation?.participants[0] : conversation?.participants[1];
    }
}

export default Chat
