import React from 'react'
import { AmoreCoinIcon } from '../assets/svg/svg_package'
import FlexBox from './flex_box'
import { colors } from '../utils/theme';
import userAvatar from '../assets/images/user_avatar.png';
import { useBanner } from '../hooks/use_banner';
import { useAuth } from '../hooks/use_auth';

const CurrentUserInfoBox = ({ style }) => {

    const { setLimitedOfferOptions } = useBanner();

    const { auth } = useAuth();

    return (
        <div className='current-user-info-box' style={{ ...style }}>
            <FlexBox gap='0 18px' width={'100%'} justifyContent='center'>

                <FlexBox gap='0 8px' >
                    <AmoreCoinIcon className='amore-coin-icon' style={{ cursor: 'pointer' }} onClick={() => {
                        setLimitedOfferOptions({ show: true, type: 'coin' });
                    }} />
                    <span style={{ color: colors.darkText, fontSize: '.85rem', fontWeight: '600' }}>{auth.credits}</span>
                </FlexBox>

                <img className='current-user-info-box-image' src={auth?.photos?.[0]?.url || userAvatar} style={{ borderRadius: '12px' }} width={40} height={40} />

                <span className='current-user-info-box-user-name' style={{ color: colors.darkText, fontSize: '.85rem', fontWeight: '300' }} >{auth.name}</span>

            </FlexBox>
        </div>
    )
}

export default CurrentUserInfoBox
