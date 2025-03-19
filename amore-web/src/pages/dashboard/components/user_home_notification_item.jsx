import React from 'react'
import { HeartLineIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import { useAuth } from '../../../hooks/use_auth';
import NotificationLayout from '../../../copmonents/notification_layout';
import { formatTimeAgo } from '../../../utils/functions';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const UserHomeNotificationItem = ({ notification, type, index, isBlur = false }) => {

    const { auth } = useAuth();
    const { t, _ } = useTranslation();
    const user = getUser(notification, type);
    const userImage = user.photos[0].url;
    const content = getMessageContent(notification, type);
    const icon = getIcon(type);
    const time = getTime(type);
    const hideTime = getHideTime(type);
    const path = getPath(type);
    const navigate = useNavigate();

    return <NotificationLayout
        isBlur={isBlur}
        onClick={() => navigate(`/dashboard/${path}`, { state: { type: type, index: index } })}
        image={userImage}
        title={user?.name || 'username'}
        content={content}
        icon={icon}
        time={time}
        hideTime={hideTime} />

    function getPath(type) {
        switch (type) {
            case 'like':
                return 'matches'
            case 'message':
                return 'chat';
        }
    }

    function getIcon(type) {
        switch (type) {
            case 'like':
                return <HeartLineIcon color={colors.fadedText} fill={colors.fadedText} width='26' height='26' />;
            case 'message':
                return null;
        }
    }

    function getTime() {
        return formatTimeAgo(notification.createdDate)
    }

    function getHideTime(type) {
        return type === 'like' ? true : false;
    }

    function getUser(notication) {
        return notication.participants[0].id !== auth.id ? notification?.participants?.[0] : notification?.participants?.[1];
    }

    function getMessageContent(notification, type) {
        if (type === 'like') return <Trans
            i18nKey={`NOTIFICATION.QUICK_NOTIFICATIONS.${type?.toUpperCase()}`}
            values={{ user: user?.name }}
            components={{
                span: <span style={isBlur ? { color: 'transparent', textShadow: '0 0 6.4px rgba(230, 73, 151, 1)', marginRight: '.15rem' } : null} />,
            }}
        />

        if (!notification?.lastMessage && type === 'message') return `İlk adımı at, ${user?.name} seni bekliyor! ✨`

        else {
            const message = notification.lastMessage?.content.length < 30 ? notification.lastMessage?.content : notification.lastMessage?.content.slice(0, 30) + '...';
            return t(`NOTIFICATION.QUICK_NOTIFICATIONS.${notification?.lastMessage?.type.toUpperCase()}`, { user: user?.name, message });
        }
    };


}

export default UserHomeNotificationItem 
