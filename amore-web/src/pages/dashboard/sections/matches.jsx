import React, { useEffect, useState } from 'react'
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box';
import { useAuth } from '../../../hooks/use_auth';
import FlexBox from '../../../copmonents/flex_box';
import { axiosAmore } from '../../../api/axios';
import UserCard from '../../../copmonents/user_card';
import AmoreLoading from '../../../copmonents/amore_loading';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../../utils/theme';
import '../../../css/dashboard/matches.css';
import CustomRadio from '../../../copmonents/custom_radio';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Matches = () => {


    const location = useLocation();
    //STATES
    const [currentIndex, setCurrentIndex] = useState(getCurrentIndex());
    const [users, setUsers] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(false);

    //REFS
    const userBox = React.createRef();

    //CONTEXT
    const { auth } = useAuth();
    const { t, _ } = useTranslation();

    //CONSTANTS
    const titles = ["MATCHES", "LIKES", "VISITS"];

    console.log(currentIndex);


    //SIDE_EFFECTS
    useEffect(() => { fetchData(currentIndex); }, [currentIndex]);


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
                !isUsersLoading ? <div className='discover-users' >
                    {users.map((user, index) => <UserCard isFromHome={currentIndex === 1 && index === parseInt(location?.state?.index)} ref={userBox} key={uuidv4()} user={user} />)}
                </div> : <AmoreLoading className='discover-loading' containerWidth={'100%'} containerHeight={'90%'} amoreWidth={'70%'} amoreMaxWidth={'200px'} />
            }

        </section>
    );

    //FUNCTIONS
    async function fetchData(index) {
        setIsUsersLoading(true);
        const link = getLink(index);
        try {
            const response = await axiosAmore.get(link, {
                headers: { Authorization: auth.token }
            });
            setUsers(filterUserData(response.data.data));
        }
        catch (e) { console.log(e); }
        finally { setIsUsersLoading(false); }
    };

    function getLink(index) {
        switch (index) {
            case 0: return 'user/matches'
            case 1: return 'user/likes';
            case 2: return 'user/visits'
        };
    };

    function filterUserData(users) {
        return users.map(user => {
            if (user.participants[0].id !== auth.id) return user.participants[0];
            return user.participants[1];
        });
    }

    //ALTTAKI FUNCTIONLAR KULLANILACAK ILERDE !!!
    async function handleScrollFetch(e) {
        if (isUsersLoading) return;
        const totalScroll = e.target.scrollTop;
        const userBoxHeight = userBox.current.offsetHeight
        const boxColumnCount = getBoxColumnCount(window.innerWidth);
        const calculatedHeight = ((userBoxHeight * users.length) / boxColumnCount) * 0.7;
        if (totalScroll > calculatedHeight) {
            //FETCH YAPILACAK AMA 50 TANE USER GELMIYORSA NAPACAN ?
            // await fetchData(currentIndex);
        }
    }

    //Bu Sayilarin Değişmesi gerekecek bu bolumde fılter sıde bar yok !!!
    function getBoxColumnCount(width) {
        if (width < 842) return 1;
        else if (width >= 1663) return 5;
        else if (width >= 1393) return 4;
        else if (width >= 1103) return 3;
        else if (width >= 842) return 2;
    };

}

export default Matches
