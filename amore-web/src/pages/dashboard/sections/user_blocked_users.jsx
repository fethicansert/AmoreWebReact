import React, { useEffect, useRef, useState } from 'react'
import UserSettingsButton from '../components/user_settings_button'
import { CrossCloseIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme'
import { axiosAmore } from '../../../api/axios'
import { ClipLoader } from 'react-spinners'
import UserBlockPopup from '../components/user_block_popup'

const UserBlockedUsers = () => {
    const [blockedUsers, setBlockedUsers] = useState([]);
    const [blockedUsersLoading, setBlockedUsersLoading] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isUnBlocking, setIsUnBlocking] = useState(false);
    const blockedUserRef = useRef();

    useEffect(() => {
        getBlockedUser();
    }, [])

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', marginTop: '2rem' }}>
            {
                blockedUsersLoading ? <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ClipLoader color={colors.brand1} />
                </div> :
                    blockedUsers.length > 0 ?
                        blockedUsers.map(blockedUser => <UserSettingsButton
                            onClick={() => handlePopup(blockedUser)}
                            key={blockedUser.id}
                            width={"100%"}
                            height={'53px'}
                            trealing={<CrossCloseIcon color={colors.brand1} width='22px' height='22px' />}
                            leading={<img src={blockedUser.photos[0].url} width={35} height={35} style={{ borderRadius: '50%', objectFit: 'cover', marginRight: '.2rem' }} />}
                            text={blockedUser.name}
                        />) : <p style={{fontSize:'.95rem'}}>Engellenmiş kullanıcı bulunmuyor.</p>
            }

            {showPopup && <UserBlockPopup user={blockedUserRef.current} onClose={() => setShowPopup(false)} loading={isUnBlocking} onYes={() => unBlockUser(blockedUserRef.current.id)} />}
        </div>
    )

    function handlePopup(blockedUser) {
        blockedUserRef.current = blockedUser;
        setShowPopup(true);
    }

    async function unBlockUser(userId) {
        setIsUnBlocking(true);
        try {
            const response = await axiosAmore.post('user/unblock', { userId }, { useAuth: true });
            if (response.status === 200) {
                setBlockedUsers(prev => prev.filter(user => user.id !== userId));
            }

        } catch (e) {
            console.log(e)
        } finally {
            setIsUnBlocking(false);
            setShowPopup(false);
            blockedUserRef.current = {};
        }
    }

    async function getBlockedUser() {
        setBlockedUsersLoading(true);
        try {
            const response = await axiosAmore.get('user/blocks', { useAuth: true });
            setBlockedUsers(response.data.data)
        } catch (e) {
            console.log(e)
        } finally {
            setBlockedUsersLoading(false);
        }
    }
}

export default UserBlockedUsers
