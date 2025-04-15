import React from 'react'
import RegisterUserPhoto from '../../register/comps/register_user_photo'
import { useAuth } from '../../../hooks/use_auth'
import InputContainer from '../../../copmonents/input_container';
import { StarIcon } from '../../../assets/svg/svg_package';

const UserProfile = () => {
    const { auth } = useAuth();
    return (
        <div className='profile'>

            <div className='profile-user-photos'>

                <div className='profile-user-profile-photo'>
                    <RegisterUserPhoto img={auth?.photos[0].url} />
                    <p>{auth.name}</p>
                </div>

                <div className='profile-user-photos-wrapper'>
                    <RegisterUserPhoto img={auth?.photos?.[1]?.url} />
                    <RegisterUserPhoto img={auth?.photos?.[2]?.url} />
                    <RegisterUserPhoto img={auth?.photos?.[3]?.url} />
                    <RegisterUserPhoto img={auth?.photos?.[4]?.url} />
                    <RegisterUserPhoto img={auth?.photos?.[5]?.url} />
                </div>

                <InputContainer title={"title"} leading={<StarIcon color='red' />} placeholder='Place Holder' />
            </div>
        </div>
    )
}

export default UserProfile
