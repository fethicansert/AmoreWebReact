import React from 'react'
import FlexBox from '../../../copmonents/flex_box'
import { formatTimeAgo } from '../../../utils/functions'


const ChatCard = ({ image, title, text, icon, time, className, onClick = null }) => {




    return (
        <div className={`chat-card ${className ? className : ''}`} onClick={onClick}>

            <div className='chat-card-image'>
                <img src={image} alt='Chat user image' />
            </div>

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
