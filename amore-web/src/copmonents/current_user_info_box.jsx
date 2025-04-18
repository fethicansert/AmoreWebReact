import React from 'react'
import { AmoreCoinIcon } from '../assets/svg/svg_package'
import FlexBox from './flex_box'
import { colors } from '../utils/theme';
import userAvatar from '../assets/images/user_avatar.png';
import { useBanner } from '../hooks/use_banner';

const CurrentUserInfoBox = ({ credits, image, name, style }) => {

    const { setLimitedOfferOptions } = useBanner();

    return (
        <div className='current-user-info-box' style={{ ...style }}>
            <FlexBox gap='0 18px' width={'100%'} justifyContent='center'>

                <FlexBox gap='0 8px' >
                    <AmoreCoinIcon className='amore-coin-icon' style={{ cursor: 'pointer' }} onClick={() => {
                        setLimitedOfferOptions({ show: true, type: 'coin' });
                    }} />
                    <span style={{ color: colors.darkText, fontSize: '.85rem', fontWeight: '600' }}>{credits}</span>
                </FlexBox>

                <img className='current-user-info-box-image' src={image || userAvatar} style={{ borderRadius: '12px' }} width={40} height={40} />


                <span className='current-user-info-box-user-name' style={{ color: colors.darkText, fontSize: '.85rem', fontWeight: '300' }} >{name}</span>


            </FlexBox>
        </div>
    )
}

export default CurrentUserInfoBox
