import React, { startTransition, useState } from 'react'
import { MicrophoneIcon, SendGiftIcon, SendImageIcon, SendMessageIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';

const ChatInput = ({ sendText, handleImageChange, setShowGifts,showGifts }) => {
    const [messageText, setMessageText] = useState('');
    const [messageTextFocused, setMessageTextFocused] = useState(false);
    return (
        <div className='chat-input-container-wrapper'>

            <div className='chat-send-image-button'>
                <input
                    onChange={handleImageChange}
                    className='chat-image-input'
                    style={{ borderRadius: '50%' }}
                    type='file'
                    accept="image/*"
                />
                <SendImageIcon />
            </div>

            <div className='chat-send-gift-button' style={showGifts ? {background:colors.backGround4}: {}} onClick={() => setShowGifts(prev => !prev)}>
                <SendGiftIcon color={showGifts ? colors.backGround3 : colors.iconColor}/>
            </div>

            <div className='chat-input-container'>
                <input
                    onKeyUp={(e) => e.key === 'Enter' ? handleSendMessage() : null}
                    className='chat-input'
                    placeholder='Hadi mesaj yaz'
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onFocus={() => setMessageTextFocused(true)}
                    onBlur={() => setMessageTextFocused(false)} />
                {(messageTextFocused || messageText) ? <SendMessageIcon onClick={() => handleSendMessage()} className='chat-input-icon chat-send-message-icon' /> : <MicrophoneIcon className='chat-input-icon' color={colors.brand1} />}
            </div>
        </div>
    )

    function handleSendMessage() {
        if (!messageText) return

        sendText(messageText);
        setMessageText('');
    }
}

export default ChatInput
