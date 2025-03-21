import React from 'react'
import { useAuth } from '../../../hooks/use_auth'
import ChatCardImage from './chat_card_image';
import { colors } from '../../../utils/theme';

const ChatBubble = ({ message }) => {

    const { auth } = useAuth();

    const isSender = auth?.id !== message?.user?.id;

    const style = {
        alignSelf: isSender ? 'self-start' : 'self-end',
    }

    const messageStyle = {
        color: isSender ? colors.darkText : colors.whiteText,
        backgroundColor: isSender ? colors.inputColor : colors.brand1,
        padding: '1.1rem 1rem',
        borderRadius: '16px',
        fontWeight: isSender ? 300 : 600,
        fontSize: '.85rem',
        marginBottom: isSender ? '.3rem' : ''
    }

    if (message?.type === 'audio') {
        console.log(message);

    }

    return (
        <div className='chat-bubble' style={style}>
            {isSender && <ChatCardImage image={message?.user?.photos?.[0]?.url} showStatus={false} radius='40px' />}
            <p style={messageStyle}>{message?.content || message?.type}</p>
        </div>
    )
}

export default ChatBubble
