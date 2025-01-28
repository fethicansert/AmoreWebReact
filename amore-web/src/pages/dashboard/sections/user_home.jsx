import React, { useEffect, useRef, useState } from 'react';
import PremiumBox from '../../../copmonents/premium_box';
import { useMediaPredicate } from 'react-media-hook';
import '../../../css/dashboard/user-home.css';
import { axiosAuth } from '../../../api/axios';
import { ArrorHeadLeft, ArrowHeadRight, ChatBubbleIcon, CrossLineIcon, HeartLineIcon, StarLineIcon } from '../../../assets/svg/svg_package';
import { colors } from '../../../utils/theme';
import FlexBox from '../../../copmonents/flex_box';
import { Link } from 'react-router-dom';

const headers = { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJiMjFjM2UzNTZiN2U1MTgyODI1MzMiLCJpZCI6IjY2YmIyMWMzZTM1NmI3ZTUxODI4MjUzMyIsIm5hbWUiOiJDYWJiYXIiLCJsYW5ndWFnZSI6ImVuIiwiaWF0IjoxNzM3NjIyOTgwLCJleHAiOjQ4NDgwMjI5ODB9.mwwNpHwqeCOUVRrp6R6CVWkxZeMvWKnpp8I2HFMbp20` }

const UserHome = () => {

  const hidePremium = useMediaPredicate("(max-width: 1190px)");
  const hideNotifications = useMediaPredicate("(max-width:865px)");
  const [swipeList, setSwipeList] = useState([]);

  const distance = useRef(100);

  const syle = {
    // grid-template-columns: auto 3fr 2fr;
  }

  useEffect(() => {
    console.log("Heloo");

    getSwipeList();
  }, []);



  return (
    <section className='user-home' style={{ gridTemplateColumns: !hidePremium ? 'auto 7fr 3.5fr' : !hideNotifications ? '7fr 3.5fr' : '1fr' }}>

      {!hidePremium && <PremiumBox />}

      <div className='swipe-container'>

        <div className='swipe-container-item '></div>
        <div className='swipe-container-item '></div>
        <div className='swipe-container-item '></div>
        <div className='swipe-container-item '></div>
        <div className='swipe-container-item '></div>


        <div className='swipe-bottom-bar'>
          <div className='swipe-bottom-bar-buttons-container'>
            <div className='swipe-bottom-bar-button'>
              <CrossLineIcon />
            </div>

            <div className='swipe-bottom-bar-button'>
              <StarLineIcon />
            </div>

            <div className='swipe-bottom-bar-button'>
              <HeartLineIcon />
            </div>
          </div>

          <div className='swipe-bottom-bar-send-message-button'>
            <ChatBubbleIcon
              width='22'
              height='22'
              color={colors.whiteText}
              className='swipe-bottom-bar-send-message-icon' />
            Mesaj Gönder
          </div>
        </div>

      </div>

      {
        !hideNotifications &&
        <div className='user-home-notications'>

          {hidePremium && <PremiumBox style={{ margin: '0 auto 1rem auto' }} />}

          <div className='user-home-notications-fast-messages'>
            <FlexBox justifyContent='space-between'>
              <h4>Hızlı Mesajlar</h4>
              <Link>
                Tümünü Gör
                <ArrowHeadRight color={colors.brand1} width='13' height='13' strokeWidth='2' />
              </Link>
            </FlexBox>
          </div>


          <div className='user-home-notications-likes'>
            <FlexBox justifyContent='space-between'>
              <h4>Beğeniler</h4>
              <Link>
                Tümünü Gör
                <ArrowHeadRight color={colors.brand1} width='13' height='13' strokeWidth='2' />
              </Link>
            </FlexBox>
          </div>

        </div>
      }

    </section>
  )

  async function getSwipeList() {

    const count = await getSwipeListCount();

    if (count < 3) return getSwipeList();

    try {

      const response = await axiosAuth.get(`http://165.227.142.52:3169/user/discover?minAge=18&maxAge=70&isOnline=true&distance=${distance.current - 100}&gender=female`, {
        headers
      });
      // console.log(response);


    } catch (e) {
      console.log(e);

    }

  }

  async function getSwipeListCount() {

    let swapListCount;

    try {

      const response = await axiosAuth.get(`http://165.227.142.52:3169/user/discover_count?minAge=18&maxAge=70&isOnline=true&distance=${distance.current}&gender=female`, {
        headers
      });

      console.log(response);

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
