import React from 'react'
import '../../../css/dashboard/user.css'
import { Outlet } from 'react-router-dom'
import UserProfileNavigation from '../components/user_profile_navigation'
import PremiumBox from '../../../copmonents/premium_box'

const User = () => {
    return (
        <section className='user-profile'>

            <div className='user-profile-top-banner'>
            </div>

            <div className='user-profile-grid'>
                <div className='user-profile-left-col'>
                    <UserProfileNavigation />
                    <PremiumBox />
                </div>

                <div className='user-profile-right-col'>
                    <Outlet />
                </div>

            </div>



        </section>
    )
}

export default User
