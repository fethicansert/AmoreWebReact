import React from 'react'
import placeHolderUserImage from '../../../assets/images/placeholder_user_image.png'
import FlexBox from '../../../copmonents/flex_box';
import { EyeIcon, HeartLineIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import { useAuth } from '../../../hooks/use_auth';
import NotificationLayout from '../../../copmonents/notification_layout';
const UserHomeNotificationItem = ({ notification, type }) => {

    console.log(notification);


    const { auth } = useAuth();
    const user = getUser(notification, type);
    const userImage = user.photos[0].url;
    const content = getMessageContent(notification, type);
    const icon = getIcon(type);

    return <NotificationLayout image={userImage} title={user?.name || 'username'} content={content} icon={icon} />

    function getIcon(type) {
        switch (type) {
            case 'like':
                return <HeartLineIcon color={colors.fadedText} fill={colors.fadedText} width='26' height='26' />;
            case 'visit':
                return <FlexBox alignItems='center' justifyContent='center' style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: colors.blue }}>
                    <EyeIcon color={colors.backGround3} fill={colors.brand2} width='18' height='18' />
                </FlexBox>
            case 'message':
                return <span className='notification-time'>{timeAgo(notification.createdDate)}</span>
        }
    }

    function getUser(notication) {
        return notication.participants[0].id !== auth.id ? notification?.participants?.[0] : notification?.participants?.[1];
    }

    function getMessageContent(notification, type) {
        if (type === 'like') return user?.name + ' ' + 'seni beğendi';
        switch (notification?.lastMessage?.type) {
            case 'text':
                return notification.lastMessage.content.length < 30 ? notification.lastMessage.content : notification.lastMessage.content.slice(0, 30) + '...';
            case 'audio':
                return user?.name + ' ' + 'bir ses kaydı gönderdi 🎵';
            case 'image':
                return user?.name + ' ' + 'bir fotoğraf gönderdi 📷';
            case 'gift':
                return user?.name + ' ' + 'bir gift gönderdi 🎁';
            default:
                return user?.name + ' ' + 'bir mesaj gönderdi.';
        }
    };

    function timeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date; // Milisaniye farkı
        const diffSec = Math.floor(diffMs / 1000); // Saniye farkı
        const diffMin = Math.floor(diffSec / 60); // Dakika farkı
        const diffHrs = Math.floor(diffMin / 60); // Saat farkı
        const diffDays = Math.floor(diffHrs / 24); // Gün farkı
        const diffWeeks = Math.floor(diffDays / 7); // Hafta farkı
        const diffMonths = Math.floor(diffDays / 30); // Ay farkı (ortalama)
        const diffYears = Math.floor(diffDays / 365); // Yıl farkı (ortalama)

        if (diffMin < 60) return `${diffMin} dakika önce`;
        if (diffHrs < 24) return `${diffHrs} saat önce`;
        if (diffDays < 7) return `${diffDays} gün önce`;
        if (diffWeeks < 4) return `${diffWeeks} hafta önce`;
        if (diffMonths < 12) return `${diffMonths} ay önce`;
        return `${diffYears} yıl önce`;
    }


}

export default UserHomeNotificationItem 
