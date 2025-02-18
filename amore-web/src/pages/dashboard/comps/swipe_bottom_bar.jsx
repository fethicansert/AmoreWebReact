import React, { useRef } from 'react'
import { ChatBubbleIcon, CrossLineIcon, HeartLineIcon, StarLineIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme';
import emotinalSound from '../../../sounds/emotinal_damage.mp3';
import dogDoingSound from '../../../sounds/dogdoing.mp3'
import kissSound from '../../../sounds/kisssound.wav';
import amoreLike from '../../../assets/lottie/amore_like.json';
import amoreSuperLike from '../../../assets/lottie/amore_superlike.json';
import amoreDissLike from '../../../assets/lottie/amore_dislike.json';
import Lottie from "lottie-react";

const SwipeBottomBar = ({ onLike, onStar, onPass, setPopupAnimation }) => {

    const emotinal = useRef(new Audio(emotinalSound));
    const dogdoing = useRef(new Audio(dogDoingSound));
    const kiss = useRef(new Audio(kissSound));
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
        kiss.current.play();

        setPopupAnimation(popupAnimation);

        setTimeout(() => {
            onLike(prev => prev + 1);
            setPopupAnimation(false);
        }, 1000)
    }

    function getPopupAnimation(type) {
        switch (type) {
            case 'like':
                return {
                    icon: <Lottie animationData={amoreLike} />
                }
            case 'super-like':
                return {
                    icon: <Lottie animationData={amoreSuperLike} />
                }
            case 'pass':
                return {
                    icon: <Lottie animationData={amoreDissLike} />
                }
        }
    }
}

export default SwipeBottomBar
