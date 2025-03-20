import React from 'react'
import FlexBox from '../../../copmonents/flex_box'
import { formatTimeAgo } from '../../../utils/functions'
import ChatCardImage from './chat_card_image'


const ChatCard = ({ image, title, text, icon, time, className, onClick = null, showStatus, status }) => {


    return (
        <div className={`chat-card ${className ? className : ''}`} onClick={onClick}>

            <ChatCardImage image={image} showStatus={showStatus} status={status} />

            <FlexBox width={'100%'} height={'100%'} flexDirection='column' alignItems='flex-start' justifyContent='space-between' style={{ paddingBlock: '.60rem' }}>
                <h3>{title}</h3>
                <p>{text}</p>
            </FlexBox>


            {icon && icon}
            {(!icon && time) && <span className='chat-card-time'>{formatTimeAgo(time)}</span>}


        </div>
    )
}

export default ChatCard
