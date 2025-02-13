import React, { useEffect, useState } from 'react'
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box';
import '../../../css/dashboard/matches.css';
import { useAuth } from '../../../hooks/use_auth';
import FlexBox from '../../../copmonents/flex_box';
import DiscoverFilterRadio from '../comps/discover_filter_radio';
import { axiosAuth } from '../../../api/axios';
import DiscoverUser from '../comps/discover_user';
import AmoreLoading from '../../../copmonents/amore_loading';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../../utils/theme';

const Matches = () => {

    //STATES
    const [currentIndex, setCurrentIndex] = useState(0);
    const [users, setUsers] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(false);

    //CONTEXT
    const { auth } = useAuth();

    //CONSTANTS
    const titles = ["Eşleşmeler", "Beğeniler", "Ziyaretler"];

    //SIDE_EFFECTS
    useEffect(() => { fetchData(currentIndex); }, [currentIndex])

    return (
        <section className='matches'>
            <div className='matches-header'>

                <FlexBox height={'100%'} width={'100%'} gap='0 15px' alignItems='center' >

                    {titles.map((title, index) => <DiscoverFilterRadio
                        key={uuidv4()}
                        unSelectedTextColor={colors.darkText}
                        padding='1rem 1.2rem'
                        fontSize='.82rem'
                        setValue={setCurrentIndex}
                        isSelected={index === currentIndex}
                        text={title}
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
                    {users.map(user => <DiscoverUser key={uuidv4()} user={user} />)}
                </div> : <AmoreLoading className='discover-loading' containerWidth={'100%'} containerHeight={'90%'} amoreWidth={'70%'} amoreMaxWidth={'200px'} />
            }

        </section>
    );

    //FUNCTIONS
    async function fetchData(index) {
        setIsUsersLoading(true);
        const link = getLink(index);
        try {
            const response = await axiosAuth.get(link, {
                headers: { Authorization: auth.token }
            });
            console.log(response.data.data);

            setUsers(filterUserData(response.data.data));
        }
        catch (e) { console.log(e); }
        finally { setIsUsersLoading(false); }
    };

    function getLink(index) {
        switch (index) {
            case 0: return 'user/likes';
            case 1: return 'user/matches'
            case 2: return 'user/visits'
        };
    };

    function filterUserData(users) {
        return users.map(user => {
            if (user.participants[0].id !== auth.id) return user.participants[0];
            return user.participants[1];
        });
    }

}

export default Matches
