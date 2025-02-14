import React from 'react'
import { AmoreCoinIcon } from '../assets/svg/svg_package'
import FlexBox from './flex_box'
import { colors } from '../utils/theme';
import userAvatar from '../assets/images/user_avatar.png';

const CurrentUserInfoBox = ({ credits, image, name, style }) => {
    return (
        <div className='current-user-info-box' style={{ ...style }}>
            <FlexBox gap='0 18px' width={'100%'} justifyContent='center'>

                <FlexBox gap='0 8px' >
                    <AmoreCoinIcon />
                    <span style={{ color: colors.darkText, fontSize: '.85rem', fontWeight: '600' }}>{credits}</span>
                </FlexBox>

                <img src={image || userAvatar} style={{ borderRadius: '12px' }} width={35} />
                <FlexBox gap='0 2px' >
                    <span className='current-user-info-box-user-name' style={{ color: colors.darkText, fontSize: '.85rem', fontWeight: '300' }} >{name}</span>
                </FlexBox>


            </FlexBox>
        </div>
    )
}

export default CurrentUserInfoBox
