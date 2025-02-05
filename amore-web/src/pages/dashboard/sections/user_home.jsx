import React, { useEffect, useRef, useState } from 'react';
import PremiumBox from '../../../copmonents/premium_box';
import { useMediaPredicate } from 'react-media-hook';
import '../../../css/dashboard/user_home.css';
import { axiosAuth } from '../../../api/axios';
import NotificationItem from '../comps/notification_item';
import UserHomeNotifications from '../comps/user_home_notifications';
import { v4 as uuidv4 } from 'uuid';
import SwipeBottomBar from '../comps/swipe_bottom_bar';
import SwipeItem from '../comps/swipe_item';
import { useConversation } from '../../../hooks/use_conversation';
import { useLikes } from '../../../hooks/use_likes';

const headers = { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJiMjFjM2UzNTZiN2U1MTgyODI1MzMiLCJpZCI6IjY2YmIyMWMzZTM1NmI3ZTUxODI4MjUzMyIsIm5hbWUiOiJDYWJiYXIiLCJsYW5ndWFnZSI6ImVuIiwiaWF0IjoxNzM3NjIyOTgwLCJleHAiOjQ4NDgwMjI5ODB9.mwwNpHwqeCOUVRrp6R6CVWkxZeMvWKnpp8I2HFMbp20` }

const UserHome = () => {
  const hidePremium = useMediaPredicate("(max-width: 1190px)");
  const [swipeList, setSwipeList] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [isSwipeListLoading, setIsSwipeListLoading] = useState(false);
  const distance = useRef(100);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { conversations, setConversations } = useConversation();
  const [popAnimation, setPopupAnimation] = useState();

  const swipeContainer = useRef();

  const { likes, isLikesLoading } = useLikes();

  useEffect(() => {
    getSwipeList({ showLoading: true });
    if (conversations.length === 0) getMessages();
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

        <UserHomeNotifications path={'/dashboard/chat'} title={'Hızlı Mesajlar'} isLoading={isMessagesLoading}>
          {conversations.slice(0, 4).map(message => message ? <NotificationItem key={uuidv4()} type={'message'} notification={message} /> : null)}
        </UserHomeNotifications>

        <UserHomeNotifications path={'/dashboard/matches'} title={'Beğeniler'} isLoading={isLikesLoading}>
          {likes.slice(0, 4).map(like => like ? <NotificationItem key={uuidv4()} type={'like'} notification={like} /> : null)}
        </UserHomeNotifications>

        {hidePremium && <PremiumBox style={{ margin: '0 auto 1rem auto' }} />}

      </div>

    </section>
  );

  async function getMessages() {
    setIsMessagesLoading(true);
    try {
      const response = await axiosAuth.get('/chat/conversations?page=1', { headers });
      if (response?.data.response.code === 200)
        setConversations(response.data.data)
    }
    catch (e) { console.log(e); }
    finally { setIsMessagesLoading(false); }
  }

  async function getLikes() {
    setIsLikesLoading(true)
    try {
      const response = await axiosAuth.get('user/likes', { headers });
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
      const response = await axiosAuth.get(`user/discover?minAge=18&maxAge=70&isOnline=true&distance=${distance.current - 100}&gender=female`, { headers });
      setSwipeList(prev => [...prev, ...response.data.data]);
    }
    catch (e) { console.log(e); }
    finally { setIsSwipeListLoading(false); };
  }

  async function getSwipeListCount() {

    let swapListCount;

    try {
      const response = await axiosAuth.get(`user/discover_count?minAge=18&maxAge=70&isOnline=true&distance=${distance.current}&gender=female`, {
        headers
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
