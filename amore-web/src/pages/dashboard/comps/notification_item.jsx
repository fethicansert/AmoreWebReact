import React from 'react'
import placeHolderUserImage from '../../../assets/images/placeholder_user_image.png'
import FlexBox from '../../../copmonents/flex_box';
import { HeartLineIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import { useAuth } from '../../../hooks/use_auth';
const UserHomeNotificationItem = ({ notification, type }) => {

    const { auth } = useAuth();
    const user = getUser(notification, type);
    const userImage = user.photos[0].url;
    const content = getMessageContent(notification, type);

    return (
        <div className='user-home-notification-item'>
            <div className='user-home-notification-item-image-avatar'>
                <img src={userImage}></img>
            </div>
            <FlexBox gap='8px 0' flexDirection='column' alignItems='flex-start'>
                {<span className='user-home-notification-item-title'>{user?.name || 'username'}</span>}
                {<span className='user-home-notification-item-text'>{content}</span>}
            </FlexBox>

            {type === 'like' && <HeartLineIcon color={colors.fadedText} fill={colors.fadedText} width='26' height='26' />}
            {type === 'message' && <span className='user-home-notification-item-message'>14:03</span>}
        </div>
    )

    function getUser(notication) {
        return notication.participants[0].id !== auth.id ? notification?.participants?.[0] : notification?.participants?.[1];
    }


    function getMessageContent(notification, type) {
        if (type === 'like') return user?.name + ' ' + 'seni beğendi';
        switch (notification?.lastMessage.type) {
            case 'text':
                return notification.lastMessage.content.length < 30 ? notification.lastMessage.content : notification.lastMessage.content.slice(0, 30) + '...';
            case 'audio':
                return user?.name + ' ' + 'bir ses kaydı gönderdi.'
            case 'image':
                return user?.name + ' ' + 'bir fotoğraf gönderdi.'
            case 'gift':
                return user?.name + ' ' + 'bir gift gönderdi.'
            default:
                return user?.name + ' ' + 'bir mesaj gönderdi.'
        }
    };
}

export default UserHomeNotificationItem 
