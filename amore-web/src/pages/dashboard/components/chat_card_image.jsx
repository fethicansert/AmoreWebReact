import React from 'react'
import { colors } from '../../../utils/theme'
import { BounceLoader, PuffLoader } from 'react-spinners'

const ChatCardImage = ({ image, status, showStatus, radius = '62px', onClick = undefined }) => {

    const statusColor = status ? colors.onlineColor : colors.negative;

    return (
        <div className='chat-card-image' style={{ width: radius, height: radius }} onClick={onClick}>
            <img src={image} alt='Chat user image' />
            {showStatus && <div style={{ backgroundColor: status === undefined ? 'white' : statusColor }} className='chat-card-status-circle'>
                {status === undefined && <PuffLoader size={9} color={colors.brand1} />}
            </div>}
        </div>
    )
}

export default ChatCardImage
