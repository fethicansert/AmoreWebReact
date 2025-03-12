import React, { useRef } from 'react'
import { ChatBubbleIcon, CrossLineIcon, HeartLineIcon, StarLineIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme';
import { useTranslation } from 'react-i18next';



const SwipeBottomBar = ({ onSwipe, onMessage }) => {

    const { t, _ } = useTranslation();

    return (
        <div className='swipe-bottom-bar'>

            <div className='swipe-bottom-bar-buttons-container'>

                <div className='swipe-bottom-bar-button' onClick={() => onSwipe('dismiss')}>
                    <CrossLineIcon />
                </div>

                <div className='swipe-bottom-bar-button' onClick={() => onSwipe('superlike')}>
                    <StarLineIcon />
                </div>

                <div className='swipe-bottom-bar-button' onClick={() => onSwipe('like')}>
                    <HeartLineIcon />
                </div>
            </div>

            <div className='swipe-bottom-bar-send-message-button' onClick={onMessage}>
                <ChatBubbleIcon
                    width='22'
                    height='22'
                    color={colors.whiteText}
                    className='swipe-bottom-bar-send-message-icon' />
                {t('BUTTONS.SEND_MESSAGE_BUTTON')}
            </div>

        </div>
    )




}

export default SwipeBottomBar
