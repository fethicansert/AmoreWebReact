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
import '../../../css/dashboard/user_home.css';
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box.jsx';
import { colors } from '../../../utils/theme.js';
import CustomRadio from '../../../copmonents/custom_radio.jsx';
import RadioWrapper from '../../../copmonents/radio_wrapper.jsx';
import arrowLottie from '../../../assets/lottie/arrow_pink.json';
import Lottie from 'lottie-react';
import BasicButton from '../../../copmonents/basic_button.jsx';


const UserHome = () => {

  //STATS
  const [swipeList, setSwipeList] = useState([]);
  const [filteredSwipeList, setFilteredSwipeList] = useState([]);
  const [isSwipeListLoading, setIsSwipeListLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popAnimation, setPopupAnimation] = useState();
  const [likes, setLikes] = useState([]);
  const [isLikesLoading, setIsLikesLoading] = useState(false);
  const [age, setAge] = useState([25, 80]);
  const [showFilter, setShowFilter] = useState(false)

  //FILTER STATES
  const [filterdGender, setFilterGender] = useState('female');
  const [filterUserStatus, setFilterUserStatus] = useState('online');
  const [filterDistance, setFilterDistance] = useState(200)

  //CONTEXT
  const { conversations, isConversationsLoading } = useConversation();
  const { auth } = useAuth();
  const { t, i18n } = useTranslation();

  //REFS
  const distance = useRef(200);
  const swipeContainer = useRef();
  const userViewedIds = useRef([]);



  //MEDIA
  const hidePremium = useMediaPredicate("(max-width: 1190px)");

  //SIDE-EFFECTS
  useEffect(() => {
    getLikes();
  }, []);

  useEffect(() => {
    distance.current = filterDistance;
  }, [filterDistance]);

  useEffect(() => {
    getSwipeList({ showLoading: true, isAutoDistance: true, isResetList: true });
  }, [filterdGender]);

  useEffect(() => {
    if ((currentIndex > swipeList.length - 2) && (swipeList.length > 0)) {
      getSwipeList({ showLoading: false, isAutoDistance: true })
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
              onChangeCommitted={() => { getSwipeList({ showLoading: true, isAutoDistance: false, isResetList: true }) }}
            />

            <FilterSlider
              step={3}
              min={1}
              max={1500}
              value={filterDistance}
              setValue={setFilterDistance}
              title={"Mesafe"}
              valueTitle={`${filterDistance} ${auth.distanceType}`}
              onChangeCommitted={() => { getSwipeList({ showLoading: true, isAutoDistance: false, isResetList: true }) }}
            />

            <RadioWrapper title={t('GENDER.TITLE')} style={{ margin: '.5rem 0' }} >
              <CustomRadio text={t('GENDER.MALE')} value={'male'} setValue={setFilterGender} isSelected={filterdGender === 'male'} />
              <CustomRadio text={t('GENDER.FEMALE')} value={'female'} setValue={setFilterGender} isSelected={filterdGender === 'female'} />
            </RadioWrapper>

            <RadioWrapper title={t('STATUS.TITLE')} style={{ margin: '1rem 0' }}>
              <CustomRadio text={t('STATUS.ONLINE')} value={'online'} setValue={setFilterUserStatus} isSelected={filterUserStatus === 'online'} />
              <CustomRadio text={t('STATUS.OFFLINE')} value={'offline'} setValue={setFilterUserStatus} isSelected={filterUserStatus === 'offline'} />
            </RadioWrapper>

          </div>

          <BasicButton onClick={() => setShowFilter(prev => !prev)} backgroundColor={colors.brand1} width={'90%'} height={'45px'} borderRadius={'10px'} margin='0 auto' >
            {showFilter ? 'Filtre Sakla' : 'Filtre'}
          </BasicButton>

        </div>

        <PremiumBox />

      </div>
      }

      {/* Swipe Section */}

      <div className='swipe-container' ref={swipeContainer}>

        {
          !isSwipeListLoading && swipeList.length === 0
            ? <>
              <div className='user-home-not-found-swipe-list-empty-container'>
                <p>Aranan Niteliklerde Kullanıcı Bulunamadı !</p>
                <p>Filter seçeneklerini değiştirmeyi denemelisin.</p>
              </div>

              <Lottie animationData={arrowLottie} style={{ rotate: '90deg', width: '45%' }} />

            </>
            : <>

              <SwipeItem user={swipeList[currentIndex]} loading={isSwipeListLoading} />

              {!isSwipeListLoading && <SwipeBottomBar onLike={setCurrentIndex} setPopupAnimation={setPopupAnimation} />}

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


  async function likeUser() {
    setCurrentIndex(prev => prev + 1);

  }

  async function getLikes() {
    setIsLikesLoading(true)
    try {
      const response = await axiosAmore.get('user/likes', {
        headers: { Authorization: auth.token }
      });
      setLikes(response.data.data);
    }
    catch (e) { console.log(e); }
    finally { setIsLikesLoading(false); }
  }


  async function getSwipeList({ showLoading, isAutoDistance, isResetList }) {

    //if showLoading is true show loading animation if user swiping I will update swipe list behind while not showing loading animation
    if (showLoading) setIsSwipeListLoading(true);

    //if is AutoDistance we need to update distance if we don't have any users in current distance !!!
    if (isAutoDistance) { await updateDistance(); }

    //Send Request => if sukseks set swipeList with response data 
    try {
      const response = await axiosAmore.get(`user/discover?minAge=${age[0]}&maxAge=${age[1]}&isOnline=true&distance=${distance.current}&gender=${filterdGender}&ids=${userViewedIds.current.join(',')}`, {
        headers: { Authorization: auth.token }
      });

      console.log(response);

      if (response.data.response.code === 200) {

        const fetchedList = response.data.data;

        console.log(fetchedList);


        fetchedList.filter(user => {
          console.log(!userViewedIds.current.includes(user.id));

          return !userViewedIds.current.includes(user.id);
        });

        console.log(fetchedList);


        if (fetchedList.length > 0) userViewedIds.current.push(fetchedList[0].id);


        setSwipeList(prev => isResetList ? [...fetchedList] : [...prev, ...fetchedList]);

        if (isResetList) setCurrentIndex(0);

      }
    }

    catch (e) { console.log(e); }

    finally { setIsSwipeListLoading(false); };
  }

  //Update distance if request count smaller than given Number !!!
  async function updateDistance() {

    let swapListCount = 0;
    try {
      const response = await axiosAmore.get(`user/discover_count?minAge=18&maxAge=70&isOnline=true&distance=${distance.current}&gender=${filterdGender}&ids=${userViewedIds.current.join(',')}`, {
        headers: { Authorization: auth.token }
      });

      if (response.status === 200) {

        swapListCount = response.data.data.status;

        //if count lower than given number increase distance do recursive!!!
        if (swapListCount === 0 && distance.current <= 1000) {
          distance.current += 100;
          await updateDistance();
        }
      }

    } catch (e) { console.log(e); }

  }

}


export default UserHome

// http://165.227.142.52:3169/user/discover_count?minAge=18&maxAge=70&isOnline=true&distance=200&gender=female
