import React from 'react'
import NotificationLayout from '../../../copmonents/notification_layout'
import { useAuth } from '../../../hooks/use_auth';
import { useTranslation } from 'react-i18next';
import amoreIcon from '../../../assets/icons/amore_icon.png';
import { EyeIcon, HeartLineIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import FlexBox from '../../../copmonents/flex_box';

const NotificationItem = ({ notification }) => {

    const { i18n, t } = useTranslation();
    const { auth } = useAuth();
    const type = notification.type;
    const userName = getUserName();
    const userImage = getImage();
    const title = getTitle();
    const content = getDescription();
    const icon = getIcon();

    return <NotificationLayout title={title} image={userImage} content={content} icon={icon} />

    function getUserName() {
        return notification?.titleArgs[0];
    }

    function getTitle() {

        if (auth?.isSystem) { return notification.title; }
        if (auth?.isPremium) {
            //SAFA GELINCE BAKILACAK
        }
        return t(`NOTIFICATION.${type}.TITLE`, { user: userName });
    }

    function getDescription(notification) {
        if (auth?.isSystem) { return notification.description; }
        if (auth?.isPremium) {
            //SAFA GELINCE BAKILACAK
        }
        return t(`NOTIFICATION.${type}.DESCRIPTION`, { user: userName });
    }

    function getIcon() {
        switch (type) {
            case 'LIKE_FREE':
                return <FlexBox justifyContent='center' width={'30px'} height={'30px'} style={{ backgroundColor: colors.brand2, borderRadius: '50%' }}>
                    <HeartLineIcon color={colors.backGround3} fill={colors.backGround3} width='19' height='19' />
                </FlexBox>

            case 'VISIT_FREE':
                return <FlexBox justifyContent='center' width={'30px'} height={'30px'} style={{ backgroundColor: colors.blue, borderRadius: '50%' }}>
                    <EyeIcon color={colors.backGround3} fill={colors.backGround3} width='19' height='19' />
                </FlexBox>
            default:
                return <span className='notification-time'>14:03</span>
        }
    }

    function getImage() {
        return notification?.extraData?.senderImage || amoreIcon;
    }
}

export default NotificationItem


//CALL_ADMIN_REQUEST_MISSED
//CALL_ADMIN_REQUEST_STARTED