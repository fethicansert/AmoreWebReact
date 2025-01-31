import React, { useEffect, useRef, useState } from 'react';
import PremiumBox from '../../../copmonents/premium_box';
import { useMediaPredicate } from 'react-media-hook';
import '../../../css/dashboard/user-home.css';
import { axiosAuth } from '../../../api/axios';
import UserHomeNotificationItem from '../comps/notification_item';
import UserHomeNotifications from '../comps/user_home_notifications';
import { v4 as uuidv4 } from 'uuid';
import AmoreLoading from '../../../copmonents/amore_loading';
import SwipeBottomBar from '../comps/swipe_bottom_bar';

const headers = { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJiMjFjM2UzNTZiN2U1MTgyODI1MzMiLCJpZCI6IjY2YmIyMWMzZTM1NmI3ZTUxODI4MjUzMyIsIm5hbWUiOiJDYWJiYXIiLCJsYW5ndWFnZSI6ImVuIiwiaWF0IjoxNzM3NjIyOTgwLCJleHAiOjQ4NDgwMjI5ODB9.mwwNpHwqeCOUVRrp6R6CVWkxZeMvWKnpp8I2HFMbp20` }

const UserHome = () => {
  const hidePremium = useMediaPredicate("(max-width: 1190px)");
  const [swipeList, setSwipeList] = useState([]);
  const [likes, setLikes] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [isSwipeListLoading, setIsSwipeListLoading] = useState(false);
  const distance = useRef(100);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getSwipeList();
    getLikes();
  }, []);


  return (
    <section className='user-home' >

      {!hidePremium && <PremiumBox />}

      {!isSwipeListLoading ?

        <div className='swipe-container'>

          <div className='swipe-container-item'>

            <div className='swipe-container-image-wrapper'>
              <div className='swipe-container-image-wrapper-overlay'>
                <span>{swipeList[currentIndex]?.name}</span>
                <span>{25}</span>
              </div>
              <img src={swipeList[currentIndex]?.photos[0]?.url} />
            </div>

            <div className='swipe-container-item-about-container'>

            </div>

            <div className='swipe-container-image-wrapper'>
              <img src={swipeList[currentIndex]?.photos[1]?.url} />
            </div>

          </div>


          <SwipeBottomBar />

        </div> : <AmoreLoading amoreWidth={'80%'} amoreMaxWidth={'200px'} />}



      <div className='user-home-notications'>

        <UserHomeNotifications path={'/dashboard/chat'} title={'Hızlı Mesajlar'} isLoading={isMessagesLoading}>
          {likes.slice(0, 4).map(like => like !== undefined ? <UserHomeNotificationItem key={uuidv4()} type={'message'} notification={like} /> : null)}
        </UserHomeNotifications>

        <UserHomeNotifications path={'/dashboard/matches'} title={'Beğeniler'} isLoading={isMessagesLoading}>
          {likes.slice(4, 8).map(like => <UserHomeNotificationItem key={uuidv4()} type={'like'} notification={like} />)}
        </UserHomeNotifications>

        {hidePremium && <PremiumBox style={{ margin: '0 auto 1rem auto' }} />}

      </div>

    </section>
  );


  async function getLikes() {
    setIsMessagesLoading(true)
    try {
      const response = await axiosAuth.get('http://165.227.142.52:3169/user/likes', { headers });
      setLikes(response.data.data)

    } catch (e) {
      console.log(e);
    } finally {
      setIsMessagesLoading(false)
    }
  }

  async function getSwipeList() {

    setIsSwipeListLoading(true);
    const count = await getSwipeListCount();

    if (count < 3) return getSwipeList();



    try {

      const response = await axiosAuth.get(`http://165.227.142.52:3169/user/discover?minAge=18&maxAge=70&isOnline=true&distance=${distance.current - 100}&gender=female`, {
        headers
      });
      setSwipeList(response.data.data);

    } catch (e) {
      console.log(e);

    } finally {
      setIsSwipeListLoading(false);
    }

  }

  async function getSwipeListCount() {

    let swapListCount;

    try {

      const response = await axiosAuth.get(`http://165.227.142.52:3169/user/discover_count?minAge=18&maxAge=70&isOnline=true&distance=${distance.current}&gender=female`, {
        headers
      });

      // console.log(response);

      if (response.status === 200) {
        swapListCount = parseInt(response.data.data.status)
        distance.current += 100;
      }

    } catch (e) {
      console.log(e);
    }

    return swapListCount;
  }


}


export default UserHome
