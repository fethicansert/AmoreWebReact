import React from 'react'
import CurrentUserInfoBox from '../../../copmonents/current_user_info_box'
import { useAuth } from '../../../hooks/use_auth'

const UserProfileHeader = ({ title }) => {

    const { auth } = useAuth();

    return (
        <div className='user-profile-header'>
            <h3>{title}</h3>
            <CurrentUserInfoBox
                style={{ width: "fit-content", border: "none", padding: 0 }}
                credits={auth.credits}
                image={auth.photos?.[0].url}
                name={auth.name}
            />
        </div>
    )
}

export default UserProfileHeader
