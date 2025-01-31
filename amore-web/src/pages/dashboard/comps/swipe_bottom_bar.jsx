import React from 'react'
import { ChatBubbleIcon, CrossLineIcon, HeartLineIcon, StarLineIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme'

const SwipeBottomBar = () => {
    return (
        <div className='swipe-bottom-bar'>

            <div className='swipe-bottom-bar-buttons-container'>

                <div className='swipe-bottom-bar-button'>
                    <CrossLineIcon />
                </div>

                <div className='swipe-bottom-bar-button'>
                    <StarLineIcon />
                </div>

                <div className='swipe-bottom-bar-button'>
                    <HeartLineIcon />
                </div>
            </div>

            <div className='swipe-bottom-bar-send-message-button'>
                <ChatBubbleIcon
                    width='22'
                    height='22'
                    color={colors.whiteText}
                    className='swipe-bottom-bar-send-message-icon' />
                Mesaj Gönder
            </div>

        </div>
    )
}

export default SwipeBottomBar
