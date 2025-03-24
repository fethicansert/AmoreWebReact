import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../hooks/use_auth'
import ChatCardImage from './chat_card_image';
import { colors } from '../../../utils/theme';
import ChatAudio from './chat_audio';

const ChatBubble = ({ message, isSender }) => {

    const messageStyle = {
        color: isSender ? colors.darkText : colors.whiteText,
        backgroundColor: isSender ? colors.inputColor : colors.brand1,
        fontWeight: isSender ? 300 : 600,
        padding: '1.1rem 1rem',
        borderRadius: '16px',
        fontSize: '.85rem',
    }

    return (
        message?.type === 'audio' ? <ChatAudio message={message} /> :
            <div className='chat-bubble' style={{ alignSelf: isSender ? 'self-start' : 'self-end', }}>
                {isSender && <ChatCardImage image={message?.user?.photos?.[0]?.url} showStatus={false} radius='37px' />}
                <p style={messageStyle}>{message?.content || message?.type}</p>
            </div>
    )
}

export default ChatBubble
