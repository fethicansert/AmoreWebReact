import React, { useEffect, useRef, useState } from 'react';
import PremiumBox from '../../../copmonents/premium_box';
import { useMediaPredicate } from 'react-media-hook';
import { axiosAmore } from '../../../api/axios';
import UserHomeNotificationItem from '../comps/user_home_notification_item';
import UserHomeNotifications from '../comps/user_home_notifications';
import { v4 as uuidv4 } from 'uuid';
import SwipeBottomBar from '../comps/swipe_bottom_bar';
import SwipeItem from '../comps/swipe_item';
import { useConversation } from '../../../hooks/use_conversation';
import { useAuth } from '../../../hooks/use_auth';
import { useTranslation } from 'react-i18next';
import FilterSlider from '../../../copmonents/filter_slider.jsx'
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box.jsx';
import { colors } from '../../../utils/theme.js';
import CustomRadio from '../../../copmonents/custom_radio.jsx';
import RadioWrapper from '../../../copmonents/radio_wrapper.jsx';
import locationLottie from '../../../assets/lottie/amore_location.json';
import somethingWentWrongLottie from '../../../assets/lottie/something_went_wrong.json';
import Lottie from 'lottie-react';
import BasicButton from '../../../copmonents/basic_button.jsx';
import amoreLike from '../../../assets/lottie/amore_like.json';
import amoreSuperLike from '../../../assets/lottie/amore_superlike.json';
import amoreDissLike from '../../../assets/lottie/amore_dislike.json';
import likeSound from '../../../sounds/like_sound.mp3'
import FlexBox from '../../../copmonents/flex_box.jsx';
import '../../../css/dashboard/user_home.css';
import SwipeErrorContainer from '../comps/swipe_error_container.jsx';
const UserHome = () => {

  //STATS
  const [swipeList, setSwipeList] = useState([]);
  const [isSwipeListLoading, setIsSwipeListLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popAnimation, setPopupAnimation] = useState();
  const [likes, setLikes] = useState([]);
  const [isLikesLoading, setIsLikesLoading] = useState(false);
  const [age, setAge] = useState([25, 80]);
  const [showFilter, setShowFilter] = useState(false);
  const [swipeError, setSwipeError] = useState(false);

  //FILTER STATES
  const [filterdGender, setFilterGender] = useState('female');
  const [filterUserStatus, setFilterUserStatus] = useState('online');
  const [filterDistance, setFilterDistance] = useState(200)

  //CONTEXT
  const { conversations, isConversationsLoading } = useConversation();
  const { auth } = useAuth();
  const { t, i18n } = useTranslation();

  //REFS
  const distanceRef = useRef(200);
  const swipeContainer = useRef();
  const userViewedIds = useRef([]);
  const isFecthing = useRef(false);

  //SOUNDS
  const likeSoundRef = useRef(new Audio(likeSound));

  //MEDIA
  const hidePremium = useMediaPredicate("(max-width: 1190px)");

  //SIDE-EFFECTS

  //Fetch likes
  useEffect(() => {
    getLikes();
  }, []);

  //fetch swipelist data
  useEffect(() => {
    getSwipeList({ showLoading: true, isAutoDistance: true, isResetList: true, gender: filterdGender, age: age });
  }, []);

  //Try fetch swipe list if user half of the list or swipelist not empty or is not fetchind data at the moment
  useEffect(() => {
    if ((currentIndex >= Math.floor(swipeList.length / 2)) && (swipeList.length > 0) && isFecthing.current === false) {
      getSwipeList({ showLoading: false, isAutoDistance: true, isResetList: false, gender: filterdGender, age: age })
    }
  }, [currentIndex]);


  return (
    <section className='user-home' >

      {/* Premium Box */}
      {!hidePremium && <div className='user-home-sidebar-container' >

        <div className='user-home-filters' >

          <CurrentUserInfoBox
            credits={auth.credits}
            name={auth.name}
            style={{ borderBottom: `1px solid ${colors.borderColor1}`, paddingBottom: '.8rem' }}
          />

          <div className={`user-home-filters-options-wrapper ${showFilter ? 'active' : ''}`}>

            <FilterSlider
              min={18}
              max={99}
              value={age}
              setValue={setAge}
              title={"Yaş"}
              valueTitle={`${age[0]}-${age[1]}`}
              onChangeCommitted={() => handleFilter({ isAutoDistance: true })}
            />

            <FilterSlider
              step={3}
              min={1}
              max={1500}
              value={filterDistance}
              setValue={setFilterDistance}
              title={"Mesafe"}
              valueTitle={`${filterDistance} ${auth.distanceType}`}
              onChangeCommitted={() => handleFilter({ isAutoDistance: false })}
            />

            <RadioWrapper title={t('GENDER.TITLE')} style={{ margin: '.5rem 0' }} >

              <CustomRadio text={t('GENDER.MALE')} value={'male'} setValue={setFilterGender} isSelected={filterdGender === 'male'} onClick={(() => handleGender('male'))} />

              <CustomRadio text={t('GENDER.FEMALE')} value={'female'} setValue={setFilterGender} isSelected={filterdGender === 'female'} onClick={() => handleGender('female')} />

            </RadioWrapper>

            <RadioWrapper title={t('STATUS.TITLE')} style={{ margin: '1rem 0' }}>

              <CustomRadio text={t('STATUS.ONLINE')} value={'online'} onClick={() => setFilterUserStatus('online')} isSelected={filterUserStatus === 'online'} />

              <CustomRadio text={t('STATUS.OFFLINE')} value={'offline'} onClick={() => setFilterUserStatus('offline')} isSelected={filterUserStatus === 'offline'} />

            </RadioWrapper>

          </div>

          <FlexBox width={'100%'} justifyContent='center' style={{ padding: '0 1rem' }} gap='0 10px'>

            <BasicButton fontSize={showFilter ? '.75rem' : '.8rem'} onClick={() => setShowFilter(prev => !prev)} backgroundColor={colors.brand1} width={'100%'} height={'45px'} borderRadius={'10px'} margin='0 auto' >
              {showFilter ? 'Filtre Sakla' : 'Filtrele'}
            </BasicButton>

            {showFilter && <BasicButton fontSize={'.75rem'} onClick={handleRest} backgroundColor={colors.brand2} width={'100%'} height={'45px'} borderRadius={'10px'} margin='0 auto' >
              Filtre Sıfırla
            </BasicButton>}

          </FlexBox>

        </div>

        <PremiumBox />

      </div>
      }

      {/* Swipe Section */}

      <div className='swipe-container' ref={swipeContainer}>

        {
          swipeError

            ? <SwipeErrorContainer errorText={'Beklenmedik bir hata oluştu !'} subErrorText={'Lütfen birazdan tekrar dene.'} animation={somethingWentWrongLottie} width={'62%'} />

            : !isSwipeListLoading && swipeList.length === 0

              ? <SwipeErrorContainer errorText={'Aranan Niteliklerde Kullanıcı Bulunamiyor !'} subErrorText={'Filtre seçeneklerini değiştirmeyi denemelisin.'} animation={locationLottie} width={'70%'} />

              : <>
                <SwipeItem user={swipeList[currentIndex]} loading={isSwipeListLoading} />

                {!isSwipeListLoading && <SwipeBottomBar onSwipe={handleSwipe} />}

                {popAnimation && <div className='like-popup' style={{ marginTop: `${swipeContainer?.current?.scrollTop}px` }}>
                  {popAnimation.icon}
                </div>}
              </>
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

  //FUNCTIONS
  function handleRest() {
    setFilterGender('female');
    setFilterDistance(200);
    setAge([25, 80]);
    distanceRef.current = 200;
    getSwipeList({ showLoading: true, isAutoDistance: true, isResetList: true, gender: 'female', age: [25, 80] });
  }

  function handleGender(gender) {
    distanceRef.current = filterDistance;
    setFilterGender(gender);
    getSwipeList({ showLoading: true, isAutoDistance: true, isResetList: true, gender: gender, age: age });
  }

  function handleFilter({ isAutoDistance }) {
    distanceRef.current = filterDistance;
    getSwipeList({ showLoading: true, isAutoDistance: isAutoDistance, isResetList: true, gender: filterdGender, distance: filterDistance, age: age })
  }

  async function handleSwipe(type) {
    const popupAnimation = getPopupAnimation(type);
    const body = { receiverUserId: swipeList[currentIndex].id };

    setPopupAnimation(popupAnimation);
    likeSoundRef.current.play();

    setTimeout(() => {
      if (currentIndex + 1 === swipeList.length) return setSwipeList([]);
      setCurrentIndex(prev => prev + 1);
      setPopupAnimation(null);
      swipeContainer.current.scroll({ top: 0, behavior: 'smooth' });
    }, 1000);

    try {

      const response = await axiosAmore.post(`user/${type}`, body, { headers: { Authorization: auth.token } });

      if (response?.data?.response?.code !== 200 || response.status !== 200) setSwipeError(true);

    } catch (e) {
      setSwipeError(true);
      console.log(e);
    }

  }

  //Return Popup Animation according to given parameter type
  function getPopupAnimation(type) {
    switch (type) {
      case 'like':
        return {
          icon: <Lottie animationData={amoreLike} />
        }
      case 'superlike':
        return {
          icon: <Lottie animationData={amoreSuperLike} />
        }
      case 'dismiss':
        return {
          icon: <Lottie animationData={amoreDissLike} />
        }
    }
  }

  //Fecth and Set User Likes
  async function getLikes() {

    setIsLikesLoading(true);
    try {
      const response = await axiosAmore.get('user/likes', { headers: { Authorization: auth.token } });
      setLikes(response.data.data);
    }

    catch (e) {
      console.log(e);
    }

    finally {
      setIsLikesLoading(false);
    }
  }


  //Fetch Swipe and Set Swipe List
  async function getSwipeList({ showLoading, isAutoDistance, isResetList, gender, distance, age }) {

    isFecthing.current = true;

    //if showLoading is true show loading animation if user swiping I will update swipe list behind while not showing loading animation
    if (showLoading) setIsSwipeListLoading(true);

    //if is AutoDistance we need to update distance if we don't have any users in current distance !!!
    if (isAutoDistance) await updateDistance({ age: age, gender: gender });

    //Send Request => if sukseks set swipeList with response data 
    try {
      const response = await axiosAmore.get(`user/discover?minAge=${age[0]}&maxAge=${age[1]}&isOnline=true&distance=${isAutoDistance ? distanceRef.current : distance}&gender=${gender}&ids=${userViewedIds.current.join(',')}`, {
        headers: { Authorization: auth.token }
      });

      if (response.data.response.code === 200) {

        const fetchedList = response.data.data;

        //if fetched data not empty set ids to userViewedIds
        if (fetchedList.length > 0) fetchedList.forEach(user => userViewedIds.current.push(user.id));

        //If isResetList SET fetched data to swipeList if not ADD fetched data to swipeList
        setSwipeList(prev => isResetList ? [...fetchedList] : [...prev, ...fetchedList]);

        //If isResetList setCurrentIndex 0
        if (isResetList) setCurrentIndex(0);

      }
    }

    catch (e) {
      setSwipeError(true);
      console.log(e);
    }

    finally {
      if (showLoading) setIsSwipeListLoading(false);
      isFecthing.current = false
    };
  }

  //Update Distance If Request Count Smaller Than Given Number !!!
  async function updateDistance({ gender, age }) {

    let swapListCount = 0;
    try {
      const response = await axiosAmore.get(`user/discover_count?minAge=${age[0]}&maxAge=${age[1]}&isOnline=true&distance=${distanceRef.current}&gender=${gender}&ids=${userViewedIds.current.join(',')}`, {
        headers: { Authorization: auth.token }
      });

      if (response.status === 200) {

        swapListCount = response.data.data.status;

        //if count equal 0 mins no data at this distance so increase(100) to distance and try again until distance smaller and equal to 1000
        if (swapListCount === 0 && distanceRef.current <= 1500) {
          distanceRef.current += 100;
          await updateDistance({ gender: gender, age: age });
        }
      }

    } catch (e) {
      setSwipeError(true);
      console.log(e);
    }

  }

}


export default UserHome

