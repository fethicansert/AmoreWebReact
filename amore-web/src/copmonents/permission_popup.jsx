import React from 'react'
import { LocationSettingIcon } from '../assets/svg/svg_package';
import BasicButton from './basic_button';
import { colors } from '../utils/theme';
import pinkArrowLottie from '../assets/lottie/arrow_pink.json';
import Lottie from 'lottie-react';

const PermissionPopup = ({ onClick, title, text, icon }) => {
    return (
        <div className='permission-wrapper'>
            <Lottie animationData={pinkArrowLottie} className='permission_pink_arrow' style={{ left: `${-57}px` }} />

            <div className='permission-popup-container' onClick={onClick}>
                {icon}
                <h3>{title}</h3>
                <p>{text}</p>
                <BasicButton height={'45px'} width={'100%'} margin='.75rem 0 0 0' color={colors.whiteText} backgroundColor={colors.brand1} borderRadius={'10px'}>
                    Tamam
                </BasicButton>
            </div>
        </div>
    );
}

export default PermissionPopup;
