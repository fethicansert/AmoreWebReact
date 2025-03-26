import React from 'react'
import { colors } from '../../../utils/theme'
import { getTimeFromISO } from '../../../utils/functions'
import { BeatLoader, CircleLoader, ClipLoader, FadeLoader, MoonLoader, PuffLoader, } from 'react-spinners'

const ChatImage = ({ message, isSender }) => {

    return (
        <div className='chat-image' style={{ background: isSender ? colors.borderColor1 : colors.brand1, alignSelf: isSender ? 'flex-start' : 'flex-end' }}>
            <div className='chat-image-sending'>


                <BeatLoader size={30} color={colors.brand1} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} />
            </div>


            <img src={message.dataUrl} />
            {/* <div className='chat-image-time'>
                {message.isSending ? <BeatLoader color={colors.brand1} size={5} /> : getTimeFromISO('2025-03-26T08:12:23.717Z')}
            </div> */}
        </div>
    )
}

export default ChatImage
