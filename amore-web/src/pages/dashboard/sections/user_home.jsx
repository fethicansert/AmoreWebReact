import React, { useEffect, useRef, useState } from 'react';
import PremiumBox from '../../../copmonents/premium_box';
import { useMediaPredicate } from 'react-media-hook';
import { axiosAmore } from '../../../api/axios';
import UserHomeNotificationItem from '../components/user_home_notification_item.jsx';
import UserHomeNotifications from '../components/user_home_notifications.jsx';
import SwipeBottomBar from '../components/swipe_bottom_bar';
import SwipeItem from '../components/swipe_item.jsx';
import { useConversation } from '../../../hooks/use_conversation';
import { useAuth } from '../../../hooks/use_auth';
import { useTranslation } from 'react-i18next';
import FilterSlider from '../../../copmonents/filter_slider.jsx'
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box.jsx';
import { colors } from '../../../utils/theme.js';
import CustomRadio from '../../../copmonents/custom_radio.jsx';
import RadioWrapper from '../../../copmonents/radio_wrapper.jsx';
import locationVaveLottie from '../../../assets/lottie/location_vawe.json';
import somethingWentWrongLottie from '../../../assets/lottie/something_went_wrong.json';
import BasicButton from '../../../copmonents/basic_button.jsx';
import likeSound from '../../../sounds/like_sound.mp3'
import FlexBox from '../../../copmonents/flex_box.jsx';
import SwipeErrorContainer from '../components/swipe_error_container.jsx';
import { LocationIcon } from '../../../assets/svg/svg_package.jsx';
import { getSwipePopupAnimation, handleLocationPermission } from '../../../utils/functions';
import { useBanner } from '../../../hooks/use_banner.jsx';
import PermissionBanner from '../../../copmonents/permission_banner.jsx';
import { useNavigate } from 'react-router-dom';
import DiscoverCTA from '../../../copmonents/discover_cta.jsx';
import '../../../css/dashboard/user_home.css';
import UsersMatchPopup from '../components/users_match_popup.jsx';
import { useLikes } from '../../../hooks/use_likes.jsx';

const UserHome = () => {

  //STATS
  const [swipeList, setSwipeList] = useState([]);
  const [isSwipeListLoading, setIsSwipeListLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popAnimation, setPopupAnimation] = useState();

  const [age, setAge] = useState([25, 80]);
  const [showFilter, setShowFilter] = useState(true);
  const [swipeError, setSwipeError] = useState(false);
  const [showUserMatchesPopup, setShowUserMatchesPopup] = useState(false);

  //FILTER STATES
  const [filterdGender, setFilterGender] = useState('female');
  const [filterUserStatus, setFilterUserStatus] = useState('online');
  const [filterDistance, setFilterDistance] = useState(200)

  //CONTEXT
  const { likes, isLikesLoading } = useLikes();
  const { conversations, isConversationsLoading } = useConversation();
  const { auth, isPremium } = useAuth();
  const { t, _ } = useTranslation();
  const { showLocationBanner, setShowLocationBanner, setShowLocationSetting, setLimitedOfferOptions } = useBanner();
  const navigate = useNavigate();

  //REFS
  const distanceRef = useRef(200);
  const swipeContainer = useRef();
  const userViewedIds = useRef([]);
  const isFecthing = useRef(false);
  const matchedUserRef = useRef({});

  //SOUNDS
  const likeSoundRef = useRef(new Audio(likeSound));

  //MEDIA
  const hidePremium = useMediaPredicate("(max-width: 1190px)");

  //SIDE-EFFECTS
  useEffect(() => {
    //Fetch likes

    handleLocationPermission({
      permissionType: "geolocation",
      onPrompt: () => setShowLocationBanner(true),
      onDenied: () => setShowLocationBanner(true)
    });
  }, []);

  //fetch swipelist data
  useEffect(() => {
    getSwipeList({ showLoading: true, isAutoDistance: true, isResetList: true, gender: filterdGender, age: age });
    return () => setShowLocationBanner(false);
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
            image={auth.photos?.[0].url}
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
              title={t('FILTER.AGE')}
              valueTitle={`${age[0]}-${age[1]}`}
              onChangeCommitted={() => handleFilter({ isAutoDistance: true })}
            />

            <FilterSlider
              step={3}
              min={1}
              max={1500}
              value={filterDistance}
              setValue={setFilterDistance}
              title={t('FILTER.DISTANCE')}
              valueTitle={`${filterDistance} ${auth.distanceType}`}
              onChangeCommitted={() => handleFilter({ isAutoDistance: false })}
            />

            <RadioWrapper title={t('FILTER.GENDER')} style={{ margin: '.5rem 0' }} >

              <CustomRadio text={t('GENDER.MALE')} value={'male'} setValue={setFilterGender} isSelected={filterdGender === 'male'} onClick={(() => handleGender('male'))} />

              <CustomRadio text={t('GENDER.FEMALE')} value={'female'} setValue={setFilterGender} isSelected={filterdGender === 'female'} onClick={() => handleGender('female')} />

            </RadioWrapper>

            <RadioWrapper title={t('FILTER.USER_STATUS')} style={{ margin: '1rem 0' }}>

              <CustomRadio text={t('STATUS.ONLINE')} value={'online'} onClick={() => setFilterUserStatus('online')} isSelected={filterUserStatus === 'online'} />

              <CustomRadio text={t('STATUS.OFFLINE')} value={'offline'} onClick={() => setFilterUserStatus('offline')} isSelected={filterUserStatus === 'offline'} />

            </RadioWrapper>

          </div>

          <FlexBox width={'100%'} justifyContent='center' style={{ padding: '0 1rem' }} gap='0 10px'>

            <BasicButton fontSize={showFilter ? '.75rem' : '.8rem'} onClick={() => setShowFilter(prev => !prev)} backgroundColor={colors.brand1} width={'100%'} height={'45px'} borderRadius={'10px'} margin='0 auto' >
              {showFilter ? t('FILTER.HIDE_BUTTON') : t('FILTER.FILTER_BUTTON')}
            </BasicButton>

            {showFilter && <BasicButton fontSize={'.75rem'} onClick={handleRest} backgroundColor={colors.brand2} width={'100%'} height={'45px'} borderRadius={'10px'} margin='0 auto' >
              {t('FILTER.RESET_BUTTON')}
            </BasicButton>}

          </FlexBox>

        </div>

        <PremiumBox />

      </div>
      }

      {/* Swipe Section */}

      <div className='swipe-container' ref={swipeContainer} style={{ borderRadius: showLocationBanner ? '0' : '0 0 12px 12px' }}>

        {
          swipeError

            ? <SwipeErrorContainer errorText={t('ERRORS.UNEXPECTED_ERROR.TITLE')} subErrorText={t('ERRORS.UNEXPECTED_ERROR.SUB_TITLE')} animation={somethingWentWrongLottie} width={'62%'} />

            : !isSwipeListLoading && swipeList.length === 0 && !showUserMatchesPopup

              ? <SwipeErrorContainer errorText={t('DASHBOARD.TITLES.FILTER_CHANGE_TITLE')} subErrorText={t('DASHBOARD.TITLES.FILTER_CHANGE_SUB_TITLE')} animation={locationVaveLottie} width={'70%'} />

              : <>
                <PermissionBanner
                  style={{ position: 'absolute', width: '100%', top: 0 }}
                  onCrossCloseClick={() => setShowLocationBanner(false)}
                  onClik={handleLocationBanner}
                  showPermissionBanner={showLocationBanner}
                  text={t('PERMISSION.LOCATION_BANNER_TEXT')}
                  icon={<LocationIcon color={colors.whiteText} width='20px' height='20px' />}
                />

                {<SwipeItem user={swipeList[currentIndex]} loading={isSwipeListLoading || swipeList.length === 0} />}

                {(!isSwipeListLoading && swipeList.length !== 0) && <SwipeBottomBar onMessage={null} onSwipe={handleSwipe} />}

                {popAnimation && <div className='like-popup' style={{ marginTop: `${swipeContainer?.current?.scrollTop}px` }}>
                  {popAnimation.icon}
                </div>}

                {showUserMatchesPopup && <UsersMatchPopup onClose={() => setShowUserMatchesPopup(false)} images={[auth?.photos?.[0]?.url, matchedUserRef.current?.photos?.[0].url]} matchedName={matchedUserRef.current?.name} />}

              </>
        }

      </div>

      {/* Notfications */}
      <div className='user-home-notications'>

        <UserHomeNotifications path={'/dashboard/chat'} title={t('DASHBOARD.TITLES.QUICK_MESSAGES')} isLoading={isConversationsLoading} type='message'>
          {conversations.slice(0, 4).map((message, index) => message ? <UserHomeNotificationItem index={index} key={message?.id} type={'message'} notification={message} /> : null)}
        </UserHomeNotifications>

        <UserHomeNotifications path={'/dashboard/matches'} title={t('DASHBOARD.TITLES.LIKES')} isLoading={isLikesLoading} type='like'>
          {likes.slice(0, 4).map((like, index) => like ? <UserHomeNotificationItem isBlur={!isPremium} index={index} key={like?.id} type={'like'} notification={like} /> : null)}
        </UserHomeNotifications>

        <DiscoverCTA />

      </div>

    </section>
  );

  //FUNCTIONS
  function handleLocationBanner(e) {

    //SVG VE PATH ise iconlara tikaldim
    //Fonksiyonun calismasina gerek yok
    if (e.target.tagName === 'svg' || e.target.tagName === 'path') return;

    handleLocationPermission({
      permissionType: "geolocation",
      onDenied: () => setShowLocationSetting(true),
      onPositionReveal: (positon) => { setShowLocationBanner(false); },
      onPositionDenied: (error) => setShowLocationSetting(true),
    });

  }

  function handleRest() {
    if (filterdGender !== 'female' || filterDistance !== 200 || age[0] !== 25 || age[1] !== 80) {
      setFilterGender('female');
      setFilterDistance(200);
      setAge([25, 80]);
      distanceRef.current = 200;
      getSwipeList({ showLoading: true, isAutoDistance: true, isResetList: true, gender: 'female', age: [25, 80] });
    }
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

    if (type === 'superlike' && !isPremium)
      return setLimitedOfferOptions({ show: true, type: 'premium-subscription' })

    //Return Popup Animation according to given parameter type
    const popupAnimation = getSwipePopupAnimation(type);
    const body = { receiverUserId: swipeList[currentIndex].id };

    matchedUserRef.current = swipeList[currentIndex];

    setPopupAnimation(popupAnimation);
    likeSoundRef.current.play();

    setTimeout(() => {
      setPopupAnimation(null);
      if (currentIndex + 1 === swipeList.length) return setSwipeList([]);
      setCurrentIndex(prev => prev + 1);
      swipeContainer.current.scroll({ top: 0, behavior: 'auto' });
    }, 1000);

    try {
      const response = await axiosAmore.post(`user/${type}`, body, { useAuth: true });
      if (response.status === 200 && response.data.response.code === 200) {
        if (response.data?.data?.isMatch) {
          setShowUserMatchesPopup(true);
          setPopupAnimation(null);
        }
      } else
        setSwipeError(true);
    }
    catch (e) {
      setSwipeError(true);
      console.log(e);
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
        if (swapListCount < 2 && distanceRef.current <= 1500) {
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

