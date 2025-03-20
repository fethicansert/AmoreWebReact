import React from 'react'
import { colors } from '../../../utils/theme'

const ChatCardImage = ({ image, status, showStatus, radius = '62px' }) => {

    const statusColor = status ? colors.onlineColor : colors.negative

    return (
        <div className='chat-card-image' style={{ width: radius, height: radius }}>
            <img src={image} alt='Chat user image' />
            {showStatus && <div style={{ backgroundColor: statusColor }} className='chat-card-status-circle'></div>}
        </div>
    )
}

export default ChatCardImage
