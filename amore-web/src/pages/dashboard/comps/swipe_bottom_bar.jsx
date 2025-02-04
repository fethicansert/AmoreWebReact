import React, { useRef } from 'react'
import { ChatBubbleIcon, CrossLineIcon, HeartLineIcon, StarLineIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme';
import emotinalSound from '../../../sounds/emotinal_damage.mp3';
import dogDoingSound from '../../../sounds/dogdoing.mp3'

const SwipeBottomBar = ({ onLike, onStar, onPass, setPopupAnimation }) => {

    const emotinal = useRef(new Audio(emotinalSound));
    const dogdoing = useRef(new Audio(dogDoingSound));
    return (
        <div className='swipe-bottom-bar'>

            <div className='swipe-bottom-bar-buttons-container'>

                <div className='swipe-bottom-bar-button' onClick={() => handleClick('pass')}>
                    <CrossLineIcon />
                </div>

                <div className='swipe-bottom-bar-button' onClick={() => handleClick('super-like')}>
                    <StarLineIcon />
                </div>

                <div className='swipe-bottom-bar-button' onClick={() => handleClick('like')}>
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

    function handleClick(type) {

        const popupAnimation = getPopupAnimation(type);

        setPopupAnimation(popupAnimation);

        setTimeout(() => {
            onLike(prev => prev + 1);
            setPopupAnimation(false);
        }, 500)
    }

    function getPopupAnimation(type) {
        const width = '70%';
        const height = '70%';
        switch (type) {
            case 'like':
                return {
                    icon: <HeartLineIcon width={width} height={height} />,
                    backgroundColor: colors.brand2
                }
            case 'super-like':
                return {
                    icon: <StarLineIcon width={width} height={height} />,
                    backgroundColor: colors.backGround4
                }
            case 'pass':
                return {
                    icon: <CrossLineIcon width={width} height={height} />,
                    backgroundColor: colors.backGround2
                }
        }
    }
}

export default SwipeBottomBar
