import React from 'react'
import NotificationLayout from '../../../copmonents/notification_layout'
import { useAuth } from '../../../hooks/use_auth';
import { useTranslation } from 'react-i18next';
import amoreCoin from '../../../assets/icons/amore_coin.png';
import amoreIcon from '../../../assets/icons/amore_notification.png';
import { EyeIcon, HeartLineIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import FlexBox from '../../../copmonents/flex_box';
import { useBanner } from '../../../hooks/use_banner';

const NotificationItem = ({ notification }) => {

    const { _, t } = useTranslation();
    const { auth } = useAuth();
    const type = notification.type;
    const userName = getUserName();
    const userImage = getImage();
    const title = getTitle();
    const content = getDescription();
    const icon = getIcon();

    const { setShowLimitedOffer } = useBanner();

    return <NotificationLayout
        blurImage={checkBlur()}
        onClick={handleClick}
        title={title}
        image={userImage}
        content={content}
        icon={icon}
    />

    function checkBlur() {
        if ((type === 'VISIT_FREE' || type === 'LIKE_FREE' || type === 'VISIT' || type === 'LIKE') && !auth.premiumSubscription)
            return true;
        else return false;
    }

    function handleClick() {
        setShowLimitedOffer(true);
    }

    function getUserName() {
        return notification?.titleArgs[0];
    }

    function getTitle() {
        if (auth?.isSystem) { return notification.title; }
        if (auth?.premiumSubscription && (type === 'VISIT_FREE' || type === 'LIKE_FREE')) {
            return t(`NOTIFICATION.${type.slice(0, -5)}.TITLE`, { user: userName });
        }
        return t(`NOTIFICATION.${type}.TITLE`, { user: userName });
    };

    function getDescription(notification) {
        if (auth?.isSystem) { return notification.description; }
        if (auth?.premiumSubscription && (type === 'VISIT_FREE' || type === 'LIKE_FREE')) {
            return t(`NOTIFICATION.${type.slice(0, -5)}.DESCRIPTION`, { user: userName });
        }
        return t(`NOTIFICATION.${type}.DESCRIPTION`, { user: userName, jetonQuantity: 100 });
    };

    function getIcon() {
        switch (type) {
            case 'LIKE_FREE':
                return <div className='notification-item-icon-wrapper' style={{ backgroundColor: colors.brand2 }}>
                    <HeartLineIcon color={colors.backGround3} fill={colors.backGround3} width='19' height='19' />
                </div>

            case 'VISIT_FREE':
                return <div className='notification-item-icon-wrapper' style={{ backgroundColor: colors.blue }}>
                    <EyeIcon color={colors.backGround3} fill={colors.backGround3} width='19' height='19' />
                </div>
            default:
                return <span className='notification-time'>14:03</span>
        }
    }

    function getImage() {
        switch (type) {
            case 'CONSUMABLE':
                return amoreCoin;
            default:
                return notification?.extraData?.senderImage || amoreIcon;
        }
    };


}

export default NotificationItem


//CALL_ADMIN_REQUEST_MISSED
//CALL_ADMIN_REQUEST_STARTED