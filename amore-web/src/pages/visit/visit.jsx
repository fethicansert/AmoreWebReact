import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserData } from '../../api/services/user_servives';
import Header from '../../copmonents/header';
import { colors } from '../../utils/theme';
import amoreIcon from '../../assets/icons/amore_icon.png';
import '../../css/visit/visit.css'
import SwipeItem from '../dashboard/comps/swipe_item';
import PremiumBox from '../../copmonents/premium_box';
import SwipeBottomBar from '../dashboard/comps/swipe_bottom_bar';
import { useAuth } from '../../hooks/use_auth';
import UserHomeNotifications from '../dashboard/comps/user_home_notifications';
import { useConversation } from '../../hooks/use_conversation';
import { useTranslation } from 'react-i18next';
import UserHomeNotificationItem from '../dashboard/comps/user_home_notification_item';
import { v4 as uuidv4 } from 'uuid';
import { axiosAmore } from '../../api/axios';
import CurrentUserInfoBox from '../../copmonents/current_user_info_box';

const Visit = () => {

    const { conversations, isConversationsLoading } = useConversation();
    const { userId } = useParams();
    const [isLikesLoading, setIsLikesLoading] = useState(false);
    const [user, setUser] = useState();
    const [isUserLoading, setIsUserLoading] = useState();
    const [likes, setLikes] = useState([]);
    const { auth } = useAuth()
    const { t, _ } = useTranslation()

    useEffect(() => {
        getUser(userId);
        getLikes();
    }, []);

    return (
        <div className='visit'>

            {!auth && <Header
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

            <div className='visit-grid-container'>
                <div className='visit-grid-container-left-column'>
                    <CurrentUserInfoBox credits={auth.credits} name={auth.name} style={{ marginBottom: '.85rem', background: colors.backGround3, border: `1px solid ${colors.borderColor1}`, padding: '.8rem', borderRadius: '12px' }} />
                    <PremiumBox />
                </div>
                <div className='visit-user-container'>
                    <SwipeItem user={user} loading={isUserLoading} />
                    <SwipeBottomBar onSwipe={null} />
                </div>

                <div className='visit-grid-container-right-column'>

                    <UserHomeNotifications path={'/dashboard/chat'} title={t('DASHBOARD.TITLES.QUICK_MESSAGES')} isLoading={isConversationsLoading} type='message'>
                        {conversations.slice(0, 4).map((message, index) => message ? <UserHomeNotificationItem index={index} key={uuidv4()} type={'message'} notification={message} /> : null)}
                    </UserHomeNotifications>


                    <UserHomeNotifications path={'/dashboard/matches'} title={t('DASHBOARD.TITLES.LIKES')} isLoading={isLikesLoading} type='like'>
                        {likes.slice(0, 4).map((like, index) => like ? <UserHomeNotificationItem blurImage={true} index={index} key={uuidv4()} type={'like'} notification={like} /> : null)}
                    </UserHomeNotifications>

                </div>
            </div>
        </div>
    )

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
