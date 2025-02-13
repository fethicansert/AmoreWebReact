import React, { useEffect, useRef, useState } from 'react'
import { axiosAuth } from '../../../api/axios';
import { useAuth } from '../../../hooks/use_auth';
import '../../../css/dashboard/discover.css';
import { v4 as uuidv4 } from 'uuid';
import 'react-slideshow-image/dist/styles.css';

import AmoreLoading from '../../../copmonents/amore_loading.jsx';
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box.jsx';
import { colors } from '../../../utils/theme.js';
import FlexBox from '../../../copmonents/flex_box.jsx';
import BasicButton from '../../../copmonents/basic_button.jsx';
import { SearchIcon } from '../../../assets/svg/svg_package.jsx';
import { useMediaPredicate } from 'react-media-hook';
import UserCard from '../../../copmonents/user_card.jsx';
import FilterSlider from '../../../copmonents/filter_slider.jsx';
import CustomRadio from '../../../copmonents/custom_radio.jsx';
const userStatus = [{ name: 'Çevrim içi', value: 'online' }, { name: 'Çevrim Dışı', value: 'offline' },];

const Discover = () => {

    //STATES
    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isScrollLoading, setIsScrollLoading] = useState(false);
    const [age, setAge] = useState([25, 80]);
    const [name, setName] = useState('');
    const [selectedUserStatus, setSelectedUserStatus] = useState('online');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isInputHovered, setIsInputHovered] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    //MEDIA
    const isMobile = useMediaPredicate("(max-width:575px)");

    //REFS
    const currentPage = useRef(1);
    const userBox = React.createRef();

    //CONTEXT
    const { auth } = useAuth();

    //EFFECTS
    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => setSearchedUsers(users.filter(user => user.name.toLowerCase().includes(name?.toLowerCase()))),
        [name, users]);

    //UI
    return (
        <section className='discover'>

            {
                !isLoading ? <div className='discover-users' onScroll={handleScrollFetch}>
                    {searchedUsers.map(user => <UserCard ref={userBox} key={uuidv4()} user={user} />)}
                </div> : <AmoreLoading className='discover-loading' containerWidth={'100%'} containerHeight={'100%'} amoreWidth={'70%'} amoreMaxWidth={'200px'} />
            }

            <div className='discover-users-filter'>

                <div className='discover-users-filter-header'>

                    <CurrentUserInfoBox credits={auth?.credits} name={auth?.name} image={auth?.photos?.[0].url} />

                    <BasicButton
                        onClick={() => setShowFilter(prev => !prev)}
                        className='discover-users-filter-header-btn'
                        height={'35px'}
                        width={'100%'}
                        backgroundColor={colors.brand1}
                        borderRadius={'7px'}>
                        Filtrele
                    </BasicButton>

                </div>

                <div
                    className='discover-users-filter-selection'
                    style={{ display: !isMobile ? 'flex' : isMobile && !showFilter ? 'none' : 'flex' }}>

                    <div>

                        <FlexBox flexDirection='column' alignItems='start'>
                            <span style={{ color: colors.darkText, fontSize: '.8rem' }}>İsim</span>
                            <div
                                onMouseEnter={() => setIsInputHovered(true)}
                                onMouseLeave={() => setIsInputHovered(false)}
                                className='discover-user-filter-input-container'
                                style={{
                                    border: (isInputFocused || isInputHovered) ? `1px solid ${colors.brand1}` : `1px solid ${colors.borderColor1}`,
                                    background: (isInputFocused || isInputHovered) ? colors.backGround3 : colors.inputColor
                                }}>
                                <SearchIcon color={colors.fadedText} />
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={() => setIsInputFocused(true)}
                                    onBlur={() => setIsInputFocused(false)}
                                    style={{ background: isInputHovered || isInputFocused ? colors.whiteText : colors.inputColor }}
                                    className='discover-user-filter-input'
                                    type='text'
                                    placeholder='Kullanıcı aramaya başla !'>
                                </input>
                            </div>

                        </FlexBox>

                        <FilterSlider min={18} max={99} value={age} setValue={setAge} title={"Yaş"} valueTitle={`${age[0]}-${age[1]}`} />

                        <div className='discover-user-filter-radio-group'>
                            <span style={{ color: colors.darkText, fontSize: '.8rem' }}>Kullanıcı Durumu</span>
                            <div className='discover-user-filter-radio-wrapper'>
                                {userStatus.map(status => <CustomRadio
                                    key={uuidv4()}
                                    text={status.name}
                                    value={status.value}
                                    setValue={setSelectedUserStatus}
                                    isSelected={status.value === selectedUserStatus} />)}
                            </div>
                        </div>
                    </div>

                    <BasicButton
                        style={{ zIndex: '1' }}
                        onClick={() => getUsers()}
                        width={'100%'}
                        height={'50px'}
                        backgroundColor={colors.brand1}
                        color={colors.whiteText}
                        borderRadius={'12px'} >
                        Filtreyi Uygula
                    </BasicButton>

                </div>

            </div>
        </section>
    )

    //FUNCTIONS
    async function handleScrollFetch(e) {
        if (isScrollLoading) return;
        const totalScroll = e.target.scrollTop;
        const userBoxHeight = userBox.current.offsetHeight
        const boxColumnCount = getBoxColumnCount(window.innerWidth);
        const calculatedHeight = ((userBoxHeight * users.length) / boxColumnCount) * 0.7;
        if (totalScroll > calculatedHeight) await getScrollUser();
    }

    function getBoxColumnCount(width) {
        if (width < 842) return 1;
        else if (width >= 1663) return 5;
        else if (width >= 1393) return 4;
        else if (width >= 1103) return 3;
        else if (width >= 842) return 2;
    };

    async function fetchUsers(loading) {

        loading(true);

        try {

            const headers = { Authorization: auth.token }
            const response = await axiosAuth.get(`user/all_v3?minAge=${age[0]}&maxAge=${age[1]}&${userStatus}=true&page=${currentPage.current}`, {
                headers
            });

            if (response.status === 200) {
                currentPage.current += 1;
                return response.data.data;
            }
        }
        //Set Error There !!!
        catch (e) { return 0; }

        finally { loading(false); }
    }

    async function getScrollUser() {
        const fetchedUsers = await fetchUsers(setIsScrollLoading);
        if (users) setUsers(prev => {
            const newUsers = [...prev, ...fetchedUsers];
            return newUsers;
        });
    }

    async function getUsers() {
        const fetchedUsers = await fetchUsers(setIsLoading);
        if (users) setUsers(fetchedUsers);
        if (isMobile) setShowFilter(false);
    }
}

export default Discover


