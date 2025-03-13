import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserData } from '../../api/services/user_servives';
import Header from '../../copmonents/header';
import { colors } from '../../utils/theme';
import amoreIcon from '../../assets/icons/amore_icon.png';
import '../../css/visit/visit.css'
import SwipeItem from '../dashboard/components/swipe_item';
import PremiumBox from '../../copmonents/premium_box';
import SwipeBottomBar from '../dashboard/components/swipe_bottom_bar';
import { useAuth } from '../../hooks/use_auth';
import UserHomeNotifications from '../dashboard/components/user_home_notifications';
import UserHomeNotificationItem from '../dashboard/components/user_home_notification_item';
import { useConversation } from '../../hooks/use_conversation';
import { useTranslation } from 'react-i18next';

import { v4 as uuidv4 } from 'uuid';
import { axiosAmore } from '../../api/axios';
import CurrentUserInfoBox from '../../copmonents/current_user_info_box';
import { useBanner } from '../../hooks/use_banner';
import { getSwipePopupAnimation } from '../../utils/functions';

const Visit = () => {
    const { conversations, isConversationsLoading } = useConversation();
    const { userId } = useParams();
    const [isLikesLoading, setIsLikesLoading] = useState(false);
    const [user, setUser] = useState();
    const [isUserLoading, setIsUserLoading] = useState();
    const [likes, setLikes] = useState([]);
    const { auth, isAuthenticated } = useAuth()
    const { t, _ } = useTranslation();
    const { setShowLogin } = useBanner();
    const [popAnimation, setPopupAnimation] = useState();

    useEffect(() => {
        getUser(userId);
        if (isAuthenticated) getLikes();
    }, []);

    return (
        <div className='visit' style={{ padding: !isAuthenticated ? '1rem' : '', height: !isAuthenticated ? '100vh' : '100%' }}>

            {!isAuthenticated && <Header
                hasShadow={true}
                hasBorder={false}
                backgroundColor={colors.backGround3}
                title={'Amore'}
                titleColor={colors.brand1}
                menuIconColor={colors.brand1}
                textColor={colors.darkText}
                icon={amoreIcon}
                iconWidth={35}
                languageIconColor={colors.brand1}
            />}

            <div className='visit-grid-container' style={{ marginTop: !isAuthenticated ? '.75rem' : '', gridTemplateColumns: !isAuthenticated ? '2fr 4fr 2fr' : '270px 4fr 2.5fr' }}>

                <div className='visit-grid-container-left-column' >
                    {isAuthenticated && <>
                        <CurrentUserInfoBox credits={auth.credits} name={auth.name} style={{ marginBottom: '.85rem', background: colors.backGround3, border: `1px solid ${colors.borderColor1}`, padding: '1rem', borderRadius: '12px' }} />
                        <PremiumBox />
                    </>}
                </div>

                <div className='visit-user-container'>
                    <SwipeItem user={user} loading={isUserLoading} />
                    <SwipeBottomBar onMessage={() => !isAuthenticated ? setShowLogin(true) : null} onSwipe={() => !isAuthenticated ? setShowLogin(true) : handleSwipe({ type: 'like' })} />
                    {popAnimation && <div className='like-popup' >
                        {popAnimation.icon}
                    </div>}
                </div>

                <div className='visit-grid-container-right-column'>

                    {isAuthenticated && <>
                        <UserHomeNotifications path={'/dashboard/chat'} title={t('DASHBOARD.TITLES.QUICK_MESSAGES')} isLoading={isConversationsLoading} type='message'>
                            {conversations.slice(0, 4).map((message, index) => message ? <UserHomeNotificationItem index={index} key={uuidv4()} type={'message'} notification={message} /> : null)}
                        </UserHomeNotifications>


                        <UserHomeNotifications path={'/dashboard/matches'} title={t('DASHBOARD.TITLES.LIKES')} isLoading={isLikesLoading} type='like'>
                            {likes.slice(0, 4).map((like, index) => like ? <UserHomeNotificationItem blurImage={true} index={index} key={uuidv4()} type={'like'} notification={like} /> : null)}
                        </UserHomeNotifications></>}

                </div>
            </div>
        </div>
    );


    async function handleSwipe({ type = 'like' }) {
        const swipePopupAnimation = getSwipePopupAnimation(type);
        setPopupAnimation(swipePopupAnimation);
    }

    //Return Popup Animation according to given parameter type
    async function getUser(id) {
        setIsUserLoading(true);
        try {
            const response = await getUserData({ userId: id });
            setUser(response.data.data)

        } catch (err) {
            console.log(err);
        } finally {
            setIsUserLoading(false);
        }
    }

    async function getLikes() {

        setIsLikesLoading(true);
        try {
            const response = await axiosAmore.get('user/likes', { headers: { Authorization: auth.token } });
            console.log(response);

            setLikes(response.data.data);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setIsLikesLoading(false);
        }
    }
}

export default Visit
