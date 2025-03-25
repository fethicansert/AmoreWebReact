import ChatCardImage from './chat_card_image';
import { colors } from '../../../utils/theme';
import { BeatLoader } from 'react-spinners';


const ChatBubble = ({ message, isSender }) => {

    const time = getTimeFromISO(message?.createdDate);

    const messageStyle = {
        color: isSender ? colors.darkText : colors.whiteText,
        fontWeight: isSender ? 300 : 600,
        fontSize: '.85rem',
        lineHeight: '20px'
    }

    const timeStyle = {
        color: isSender ? 'rgba(0, 0, 0, .6.5)' : 'rgba(255, 255, 255, .7)',
        fontWeight: isSender ? 400 : 600,
        fontSize: '.6rem',
        alignSelf: 'self-end',
        justifySelf: 'center'
    }

    const wrapperStyle = {
        backgroundColor: isSender ? colors.inputColor : colors.brand1,
        padding: '.85rem .9rem',
        borderRadius: '16px',
    }

    return <div className='chat-bubble' style={{ alignSelf: isSender ? 'flex-start' : 'flex-end', gridTemplateColumns: isSender ? 'auto auto' : 'auto' }}>
        {isSender && <ChatCardImage image={message?.user?.photos?.[0]?.url} showStatus={false} radius='37px' />}

        <div style={wrapperStyle} className='chat-bubble-wrapper'>
            <p style={messageStyle} >
                {message?.content || message?.type}
            </p>

            {
                message?.isSending
                    ? <BeatLoader size={3} color={'rgba(255, 255, 255, .8)'} style={{ alignSelf: 'self-end', jusifySelf: 'center', position: "relative", top: '2px' }} />
                    : <span style={timeStyle}>{time}</span>
            }
        </div>
    </div>


    function getTimeFromISO(isoString) {
        const date = new Date(isoString);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
}

export default ChatBubble


{/* <div className='chat-bubble' style={{ justifySelf: isSender ? 'self-start' : 'self-end', gridTemplateColumns: isSender ? 'auto auto' : 'auto auto' }}>
{isSender && <ChatCardImage image={message?.user?.photos?.[0]?.url} showStatus={false} radius='37px' />}
<div style={wrapperStyle}>
    <p style={messageStyle} className='chat-bubble-wrapper'>
        {message?.content || message?.type}
    </p>

    {
        message?.isSending
            ? <BeatLoader size={3.5} color={'rgba(255, 255, 255, .8)'} style={{ position: 'relative', top: '1.5px' }} />
            : <span style={timeStyle}>{time}</span>
    }
</div>
</div>
); */}
