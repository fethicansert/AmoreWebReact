import React from 'react'
import placeHolderUserImage from '../../../assets/images/placeholder_user_image.png'
import FlexBox from '../../../copmonents/flex_box';
import { HeartLineIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
const UserHomeNotificationItem = ({ notification, type }) => {

    const user = notification?.participants?.[0];
    const userImage = notification?.participants?.[0]?.photos?.[0]?.url || placeHolderUserImage;


    return (
        <div className='user-home-notification-item'>
            <div className='user-home-notification-item-image-avatar'>
                <img src={userImage}></img>
            </div>
            <FlexBox gap='8px 0' flexDirection='column' alignItems='flex-start'>
                {<span className='user-home-notification-item-title'>{user?.name || 'usernama'}</span>}
                {<span className='user-home-notification-item-text'>{user?.name || 'username'} seni beğendi</span>}
            </FlexBox>

            {type === 'like' && <HeartLineIcon color={colors.fadedText} fill={colors.fadedText} width='26' height='26' />}
            {type === 'message' && <span className='user-home-notification-item-message'>14:03</span>}
        </div>
    )
}

export default UserHomeNotificationItem 
