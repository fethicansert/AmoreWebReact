import React, { useEffect, useState } from 'react'
import { axiosAuth } from '../../../api/axios';
import { useAuth } from '../../../hooks/use_auth';
import '../../../css/dashboard/discover.css';
import { v4 as uuidv4 } from 'uuid';
import 'react-slideshow-image/dist/styles.css';

import DiscoverUser from '../comps/discover_user.jsx';

import AmoreLoading from '../../../copmonents/amore_loading.jsx';

import CurrentUserInfoBox from '../../../copmonents/current_user_info_box.jsx';

import Slider from '@mui/material/Slider';
import { colors } from '../../../utils/theme.js';
import FlexBox from '../../../copmonents/flex_box.jsx';
import DiscoverFilterSlider from '../comps/discover_filter_slider.jsx';
import DiscoverFilterRadio from '../comps/discover_filter_radio.jsx';
import BasicButton from '../../../copmonents/basic_button.jsx';
import { SearchIcon } from '../../../assets/svg/svg_package.jsx';
import zIndex from '@mui/material/styles/zIndex.js';

const Discover = () => {

    const { auth } = useAuth();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [age, setAge] = useState([25, 80]);
    const [name, setName] = useState('');
    const [selectedUserStatus, setSelectedUserStatus] = useState('online');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isInputHovered, setIsInputHovered] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const genders = [{ name: 'Kadın', value: 'female' }, { name: 'Erkek', value: 'male' }, { name: 'Tümü', value: 'all' }];
    const userStatus = [{ name: 'Çevrim içi', value: 'online' }, { name: 'Çevrim Dışı', value: 'offline' },];

    return (
        <section className='discover'>

            {
                !isLoading ? <div className='discover-users'>
                    {users.map(user => <DiscoverUser key={uuidv4()} user={user} />)}
                </div> : <AmoreLoading className='discover-loading' containerWidth={'100%'} containerHeight={'100%'} amoreWidth={'70%'} amoreMaxWidth={'200px'} />
            }
            <div className='discover-users-filter'>

                <div className='discover-users-filter-header'>
                    <CurrentUserInfoBox credit={240} name={'Alihan Can'} />
                    <BasicButton className='discover-users-filter-header-btn' height={'30px'} width={'100%'} backgroundColor={colors.brand1} borderRadius={'7px'}>Filtrele</BasicButton>
                </div>



                <div className='discover-users-filter-selection' >

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
                                    onFocus={() => setIsInputFocused(true)}
                                    onBlur={() => setIsInputFocused(false)}
                                    style={{ background: isInputHovered || isInputFocused ? colors.whiteText : colors.inputColor }}
                                    className='discover-user-filter-input'
                                    type='text'
                                    placeholder='Kullanıcı aramaya başla !'>
                                </input>
                            </div>

                        </FlexBox>

                        <DiscoverFilterSlider min={18} max={99} value={age} setValue={setAge} title={"Yaş"} valueTitle={`${age[0]}-${age[1]}`} />



                        <div className='discover-user-filter-radio-group'>
                            <span style={{ color: colors.darkText, fontSize: '.8rem' }}>Kullanıcı Durumu</span>
                            <div className='discover-user-filter-radio-wrapper'>
                                {userStatus.map(status => <DiscoverFilterRadio key={uuidv4()}
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

    async function getUsers() {
        setIsLoading(true);
        try {
            const headers = { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJiMjFjM2UzNTZiN2U1MTgyODI1MzMiLCJpZCI6IjY2YmIyMWMzZTM1NmI3ZTUxODI4MjUzMyIsIm5hbWUiOiJDYWJiYXIiLCJsYW5ndWFnZSI6ImVuIiwiaWF0IjoxNzM3NjIyOTgwLCJleHAiOjQ4NDgwMjI5ODB9.mwwNpHwqeCOUVRrp6R6CVWkxZeMvWKnpp8I2HFMbp20` }
            const response = await axiosAuth.get(`user/all_v3?minAge=18&maxAge=80&isOnline=true&distance=100`, {
                headers
            })
            if (response.status === 200)
                setUsers(response.data.data);
            setIsLoading(false);
        }
        catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }
}



export default Discover


