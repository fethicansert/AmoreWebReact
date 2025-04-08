import React, { useEffect, useRef, useState } from 'react'
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box';
import { useAuth } from '../../../hooks/use_auth';
import FlexBox from '../../../copmonents/flex_box';
import { axiosAmore } from '../../../api/axios';
import UserCard from '../../../copmonents/user_card';
import AmoreLoading from '../../../copmonents/amore_loading';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../../utils/theme';
import CustomRadio from '../../../copmonents/custom_radio';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { DoubleHeartIcon, HeartLineIcon, UserIcon } from '../../../assets/svg/svg_package';
import EmptyUsersPopup from '../components/empty_users_popup';
import { checkScrollThresold } from '../../../utils/functions';
import '../../../css/dashboard/matches.css';
import { useUserActivty } from '../../../hooks/use_user_activity';
const Matches = () => {

    //LOCATION
    const location = useLocation();
    //STATES
    const [currentIndex, setCurrentIndex] = useState(getCurrentIndex());
    const [users, setUsers] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(true);

    //REFS
    const userCardRef = useRef();
    const currentPage = useRef(1);
    const isScrollLoading = useRef(false);
    const stopFetchRef = useRef(false);

    //CONTEXT
    const { auth, isPremium } = useAuth();
    const { t, _ } = useTranslation();
    const navigate = useNavigate();
    const { setUserStatus } = useUserActivty();

    //CONSTANTS
    const titles = ["MATCHES", "LIKES", "VISITS"];

    const emptyUserPopupContent = [
        {
            title: "Eşleşme Yok!",
            text: "Üzgünüz, şu an eşleşme bulunmamaktadır. Eşleşmek için sağa kaydırmayı deneyin.",
            icon: <DoubleHeartIcon className='' width='60px' height='60px' strokeWidth={1.3} />
        },
        {
            title: "Henüz Beğeni Almadın!",
            text: "Şu an seni beğenen kimse yok. Daha fazla kişiyle etkileşim kurmak için aktif olmaya devam et!",
            icon: <HeartLineIcon className='' color={colors.darkText} width='57px' height='57px' strokeWidth={1.3} />
        },
        {
            title: "Ziyaretçin Bulunamadı!",
            text: "Profilini henüz kimse ziyaret etmemiş. Daha fazla görünür olmak için profilini güncelleyebilir veya keşfetmeye başlayabilirsin!",
            icon: <UserIcon className='' width='50px' height='50px' strokeWidth={1.3} />
        }
    ]
    //SIDE_EFFECTS
    useEffect(() => {
        currentPage.current = 1;
        fetchData({ index: currentIndex });
    }, [currentIndex]);

    return (
        <section className='matches'>

            <div className='matches-header'>
                <FlexBox className='matches-header-flex' height={'100%'} width={'100%'} alignItems='center' >
                    {titles.map((title, index) => <CustomRadio
                        className={'matches-custom-radio'}
                        key={uuidv4()}
                        unSelectedTextColor={colors.darkText}
                        padding=''
                        fontSize=''
                        onClick={() => setCurrentIndex(index)}
                        isSelected={index === currentIndex}
                        text={t(`ROUTE_NAMES.${title}`)}
                        value={index} />)}
                </FlexBox>

                <CurrentUserInfoBox
                    credits={auth.credits}
                    name={auth.name}
                    image={auth.photos?.[0].url}
                />
            </div>

            {
                !isUsersLoading ? <div className='discover-users' onScroll={handleScrollFetch}>
                    {
                        users.length > 0
                            ? setUserStatus(users).map((user, index) =>
                                <UserCard
                                    isOnlyPremium={currentIndex === 0 ? false : !isPremium}
                                    isFromHome={currentIndex === 1 && index === parseInt(location?.state?.index)}
                                    ref={userCardRef}
                                    key={uuidv4()}
                                    user={user}
                                />)
                            : <EmptyUsersPopup
                                icon={emptyUserPopupContent[currentIndex].icon}
                                title={emptyUserPopupContent[currentIndex].title}
                                text={emptyUserPopupContent[currentIndex].text}
                                buttonText={"Kaydırmaya Başla"}
                                onClick={() => navigate('/dashboard/user-swipe')}
                            />
                    }
                </div> : <AmoreLoading className='discover-loading' containerWidth={'100%'} containerHeight={'90%'} amoreWidth={'70%'} amoreMaxWidth={'200px'} />
            }

        </section>
    );

    //FUNCTIONS

    //if users come from another page with params so chanhe index according to param
    function getCurrentIndex() {
        switch (location?.state?.type) {
            case 'matches':
                return 0
            case 'like':
                return 1
            case 'visit':
                return 2
            default:
                return 0
        }
    };

    //Fetch User with given index
    async function fetchData({ index }) {

        //If dowloading on scroll not need to show loading animation
        !isScrollLoading.current && setIsUsersLoading(true);

        //get fetch URL
        const link = getUrl(index);

        try {
            const response = await axiosAmore.get(`${link}?page=${currentPage.current}`, {
                headers: { Authorization: auth.token }
            });
            if (response.status === 200) {
                //get fetched users
                const fetchedUsers = response.data.data;

                //filter participants and set users
                const filteredUsers = isScrollLoading.current ? [...users, ...filterUserData(response.data.data)] : filterUserData(response.data.data);
                setUsers(filteredUsers);

                //Incresae page count to get next page on next fetch
                currentPage.current = currentPage.current + 1;

                //IF fetched users length smaller than 20 no need to fetch again beacuse max fetch users = 20
                if (fetchedUsers.length < 20) stopFetchRef.current = true;
                isScrollLoading.current = false;
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setIsUsersLoading(false);
        }
    };

    //Get URL with given index
    function getUrl(index) {
        switch (index) {
            case 0: return 'user/matches'
            case 1: return 'user/likes';
            case 2: return 'user/visits'
        };
    };

    //Liked users not always at index[0] get liked users using auth id
    function filterUserData(users) {
        return users.map(user => {
            if (user.participants[0].id !== auth.id) return user.participants[0];
            return user.participants[1];
        });
    }

    async function handleScrollFetch(e) {

        //Stop fetch when users are fetching or users length smaller than 20
        if (isScrollLoading.current || stopFetchRef.current) return;

        //if users scrolls the page ang get specific point we determine fetch users from behind !
        const columnCount = getBoxColumnCount(window.innerWidth);
        const isFecthUser = checkScrollThresold({ e: e, card: userCardRef, rowLength: users.length, columnCount: columnCount, thresholdPercentage: .9 });
        if (isFecthUser) {
            isScrollLoading.current = true;
            fetchData({ index: currentIndex });
        }
    }

    //Get column count acordinh to windwow width
    function getBoxColumnCount(width) {
        if (width < 584) return 1;
        else if (width >= 1649) return 6;
        else if (width >= 1376) return 5;
        else if (width >= 1105) return 4;
        else if (width >= 839) return 3;
        else if (width >= 584) return 2;
    };

}

export default Matches
