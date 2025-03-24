import React from 'react'
import { useAuth } from '../../../hooks/use_auth';
import ChatBubble from './chat_bubble';
import ChatAudio from './chat_audio';

const ChatType = ({ message }) => {

    //CONTEXT
    const { auth } = useAuth();

    //COSTANT
    const isSender = auth?.id !== message?.user?.id;

    return getMessage();

    //RETURN MESSAGE - CHAT ACCORDING TO GIVEN MESSAGE
    function getMessage() {
        switch (message?.type) {
            case 'text':
                return <ChatBubble message={message} isSender={isSender} />
            case 'audio':
                return <ChatAudio message={message} isSender={isSender} />
        }
    }
}

export default ChatType
