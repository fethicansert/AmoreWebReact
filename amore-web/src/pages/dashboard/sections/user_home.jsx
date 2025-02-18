import React, { useEffect, useRef, useState } from 'react';
import PremiumBox from '../../../copmonents/premium_box';
import { useMediaPredicate } from 'react-media-hook';
import { axiosAuth } from '../../../api/axios';
import UserHomeNotificationItem from '../comps/user_home_notification_item';
import UserHomeNotifications from '../comps/user_home_notifications';
import { v4 as uuidv4 } from 'uuid';
import SwipeBottomBar from '../comps/swipe_bottom_bar';
import SwipeItem from '../comps/swipe_item';
import { useConversation } from '../../../hooks/use_conversation';
import { useAuth } from '../../../hooks/use_auth';
import { useTranslation } from 'react-i18next';
import FilterSlider from '../../../copmonents/filter_slider.jsx'
import '../../../css/dashboard/user_home.css';
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box.jsx';
import { colors } from '../../../utils/theme.js';
import CustomRadio from '../../../copmonents/custom_radio.jsx';
import { RadioGroup } from '@mui/material';
import RadioWrapper from '../../../copmonents/radio_wrapper.jsx';


const UserHome = () => {

  //STATS
  const [swipeList, setSwipeList] = useState([]);
  const [isSwipeListLoading, setIsSwipeListLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popAnimation, setPopupAnimation] = useState();
  const [likes, setLikes] = useState([]);
  const [isLikesLoading, setIsLikesLoading] = useState(false);
  const [age, setAge] = useState([25, 80]);

  //FILTER STATES
  const [filterdGender, setFilterGender] = useState('female');
  const [filterUserStatus, setFilterUserStatus] = useState('online');
  const [filterDistance, setFilterDistance] = useState(300)

  //CONTEXT
  const { conversations, isConversationsLoading } = useConversation();
  const { auth } = useAuth();
  const { t, i18n } = useTranslation();

  //REFS
  const distance = useRef(100);
  const swipeContainer = useRef();

  //MEDIA
  const hidePremium = useMediaPredicate("(max-width: 1190px)");

  //SIDE-EFFECTS
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
      {!hidePremium && <div className='user-home-sidebar-container' >

        <div className='user-home-filters'>

          <CurrentUserInfoBox
            credits={auth.credits}
            name={auth.name}
            style={{ borderBottom: `1px solid ${colors.borderColor1}`, paddingBottom: '.8rem' }}
          />

          <div className='user-home-filters-options-wrapper'>

            <FilterSlider min={18} max={99} value={age} setValue={setAge} title={"Yaş"} valueTitle={`${age[0]}-${age[1]}`} />

            <FilterSlider step={100} min={100} max={1000} value={filterDistance} setValue={setFilterDistance} title={"Mesafe"} valueTitle={`${Math.floor(filterDistance * (auth.distanceType === 'km' ? 1 : 0.621371))} ${auth.distanceType}`} />

            <RadioWrapper title={t('GENDER.TITLE')}>
              <CustomRadio text={t('GENDER.MALE')} value={'male'} setValue={setFilterGender} isSelected={filterdGender === 'male'} />
              <CustomRadio text={t('GENDER.FEMALE')} value={'female'} setValue={setFilterGender} isSelected={filterdGender === 'female'} />
            </RadioWrapper>

            <RadioWrapper title={t('STATUS.TITLE')}>
              <CustomRadio text={t('STATUS.ONLINE')} value={'online'} setValue={setFilterUserStatus} isSelected={filterUserStatus === 'online'} />
              <CustomRadio text={t('STATUS.OFFLINE')} value={'offline'} setValue={setFilterUserStatus} isSelected={filterUserStatus === 'offline'} />
            </RadioWrapper>

          </div>

        </div>

        <PremiumBox />

      </div>
      }

      {/* Swipe Section */}

      <div className='swipe-container' ref={swipeContainer}>

        <SwipeItem user={swipeList[currentIndex]} loading={isSwipeListLoading} />

        {!isSwipeListLoading && <SwipeBottomBar onLike={setCurrentIndex} setPopupAnimation={setPopupAnimation} />}

        {popAnimation &&
          <div className='like-popup' style={{ backgroundColor: popAnimation.backgroundColor, marginTop: `${swipeContainer?.current?.scrollTop}px` }}>
            {popAnimation.icon}
          </div>
        }

      </div>

      {/* Notfications */}
      <div className='user-home-notications'>

        <UserHomeNotifications path={'/dashboard/chat'} title={t('DASHBOARD.TITLES.QUICK_MESSAGES')} isLoading={isConversationsLoading}>
          {conversations.slice(0, 4).map(message => message ? <UserHomeNotificationItem key={uuidv4()} type={'message'} notification={message} /> : null)}
        </UserHomeNotifications>

        <UserHomeNotifications path={'/dashboard/matches'} title={t('DASHBOARD.TITLES.LIKES')} isLoading={isLikesLoading}>
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
