import React, { useEffect, useRef, useState } from 'react';
import PremiumBox from '../../../copmonents/premium_box';
import { useMediaPredicate } from 'react-media-hook';
import '../../../css/dashboard/user_home.css';
import { axiosAuth } from '../../../api/axios';
import UserHomeNotificationItem from '../comps/user_home_notification_item';
import UserHomeNotifications from '../comps/user_home_notifications';
import { v4 as uuidv4 } from 'uuid';
import SwipeBottomBar from '../comps/swipe_bottom_bar';
import SwipeItem from '../comps/swipe_item';
import { useConversation } from '../../../hooks/use_conversation';
import { useAuth } from '../../../hooks/use_auth';

const UserHome = () => {
  const [swipeList, setSwipeList] = useState([]);
  const [isSwipeListLoading, setIsSwipeListLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popAnimation, setPopupAnimation] = useState();

  const distance = useRef(100);
  const swipeContainer = useRef();

  const hidePremium = useMediaPredicate("(max-width: 1190px)");
  const [likes, setLikes] = useState([]);
  const [isLikesLoading, setIsLikesLoading] = useState(false);
  const { conversations, isConversationsLoading } = useConversation();
  const { auth } = useAuth();

  useEffect(() => {
    getSwipeList({ showLoading: true });
    getLikes();
  }, []);

  useEffect(() => {
    if (currentIndex > swipeList.length - 5 && swipeList.length > 0) getSwipeList({ showLoading: false })
  }, [currentIndex]);

  return (
    <section className='user-home' >

      {/* Premium Box */}
      {!hidePremium && <PremiumBox />}

      {/* Swipe Section */}

      <div className='swipe-container' ref={swipeContainer}>

        <SwipeItem user={swipeList[currentIndex + 2]} loading={isSwipeListLoading} />

        {!isSwipeListLoading && <SwipeBottomBar onLike={setCurrentIndex} setPopupAnimation={setPopupAnimation} />}

        {popAnimation &&
          <div className='like-popup' style={{ backgroundColor: popAnimation.backgroundColor, marginTop: `${swipeContainer?.current?.scrollTop}px` }}>
            {popAnimation.icon}
          </div>
        }

      </div>

      {/* Notfications */}
      <div className='user-home-notications'>

        <UserHomeNotifications path={'/dashboard/chat'} title={'Hızlı Mesajlar'} isLoading={isConversationsLoading}>
          {conversations.slice(0, 4).map(message => message ? <UserHomeNotificationItem key={uuidv4()} type={'message'} notification={message} /> : null)}
        </UserHomeNotifications>

        <UserHomeNotifications path={'/dashboard/matches'} title={'Beğeniler'} isLoading={isLikesLoading}>
          {likes.slice(0, 4).map(like => like ? <UserHomeNotificationItem key={uuidv4()} type={'like'} notification={like} /> : null)}
        </UserHomeNotifications>

        {hidePremium && <PremiumBox style={{ margin: '0 auto 1rem auto' }} />}

      </div>

    </section>
  );

  async function getLikes() {
    setIsLikesLoading(true)
    try {
      const response = await axiosAuth.get('user/likes', {
        headers: { Authorization: auth.token }
      });
      setLikes(response.data.data);
    }
    catch (e) { console.log(e); }
    finally { setIsLikesLoading(false); }
  }


  async function getSwipeList({ showLoading }) {

    if (showLoading) setIsSwipeListLoading(true);

    const count = await getSwipeListCount();
    if (count < 3) return getSwipeList({ showLoading: showLoading });

    try {

      const response = await axiosAuth.get(`user/discover?minAge=18&maxAge=70&isOnline=true&distance=${distance.current - 100}&gender=female`, {
        headers: { Authorization: auth.token }
      });

      setSwipeList(prev => [...prev, ...response.data.data]);

    }

    catch (e) { console.log(e); }

    finally { setIsSwipeListLoading(false); };
  }

  async function getSwipeListCount() {

    let swapListCount;

    try {
      const response = await axiosAuth.get(`user/discover_count?minAge=18&maxAge=70&isOnline=true&distance=${distance.current}&gender=female`, {
        headers: { Authorization: auth.token }
      });

      if (response.status === 200) {
        swapListCount = parseInt(response.data.data.status)
        distance.current = distance.current + 100;
      }

    } catch (e) { console.log(e); }

    return swapListCount;
  }

}


export default UserHome
