import React, { useEffect, useRef, useState } from 'react';
import { useConversation } from '../../../hooks/use_conversation';
import '../../../css/dashboard/chat.css'
import { ArrowHeadRight, SearchIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import ChatCard from '../components/chat_card';
import whatsAppIcon from '../../../assets/icons/whatsapp_icon.png';
import { useAuth } from '../../../hooks/use_auth';
import { v4 as uuidv4 } from 'uuid';


const Chat = () => {
    const { auth } = useAuth();
    const { conversations, isConversationsLoading } = useConversation();
    const [search, setSearch] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);
    const [currentChatIndex, setCurrentChatIndex] = useState(0);
    const placeHolderText = searchFocused ? 'Aramaya başla!' : 'Birini mi arıyorsun?';

    console.log(conversations);

    return (
        <section className='chat'>


            <div className='chat-sidebar'>

                <div className={`chat-sidebar-search ${searchFocused ? 'active' : ''}`} >
                    <SearchIcon color={colors.iconColor} width='27' height='27' style={{ margin: '0 1rem' }} />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onBlur={() => {
                            setSearchFocused(false);
                            setSearch('');
                        }}
                        onFocus={() => setSearchFocused(true)}
                        className='chat-sidebar-search-input'
                        placeholder={placeHolderText} />
                </div>


                <ChatCard image={whatsAppIcon} title={'WhatsApp Destek'} text={'Destek için hemen yaz.'} className={'chat-card-whatsapp'} icon={<ArrowHeadRight className='chat-card-whatssapp-arrow' color={'#000000'} width='35px' height='35px' />} />

                <div className='chat-card-user-wrapper'>

                    {conversations.map((chat, index) => {
                        const user = chat.participants[0].id !== auth.id ? chat.participants[0] : chat.participants[1];
                        const text = !chat?.lastMessage?.content ? 'Hadi ilk adımı sen at!' : chat?.lastMessage?.content.length > 30 ? `${chat?.lastMessage?.content.slice(0, 30)}...` : chat?.lastMessage?.content;
                        const time = chat?.createdDate;

                        return <ChatCard
                            key={uuidv4()}
                            onClick={() => setCurrentChatIndex(index)}
                            className={`chat-card-user ${currentChatIndex === index ? 'active' : ''}`}
                            image={user.photos[0].url} title={user.name}
                            text={text}
                            time={time}
                        />
                    })}

                </div>

            </div>



            <div className='chat-content'>

            </div>

        </section>
    )
}

export default Chat
