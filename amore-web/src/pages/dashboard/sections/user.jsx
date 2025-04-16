import React, { useRef, useState } from 'react'
import '../../../css/dashboard/user.css'
import { Outlet } from 'react-router-dom';
import UserProfileNavigation from '../components/user_profile_navigation'
import PremiumBox from '../../../copmonents/premium_box'
import UserProfileHeader from '../components/user_profile_header'

const headers = ['Profil Bilgileri', 'Dil Değiştir', 'Ayarlar', 'Engellenmiş Kullanıcılar', 'Destek Sistemi', 'Influencer']

const User = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const userRightColumnRef = useRef();
    return (
        <section className='user-profile' >

            <div className='user-profile-top-banner'>
            </div>

            <div className='user-profile-grid'>
                <div className='user-profile-left-col'>
                    <UserProfileNavigation setCurrentIndex={setCurrentIndex} />
                    <PremiumBox />
                </div>

                <div className='user-profile-right-col' ref={userRightColumnRef}>
                    <UserProfileHeader title={headers[currentIndex]} />
                    <Outlet context={{ userRightColumnRef }} />
                </div>

            </div>


        </section>
    )

    function showCountryList() {
        setShowCountry(prev => !prev);

    }
}

export default User
