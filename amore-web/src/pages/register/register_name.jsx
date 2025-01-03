import React from 'react'
import { UserIcon } from '../../assets/svg/svg_package'

const TEXT_REGEX = /^[A-Za-z_ ]+$/;
const RegisterName = ({ username, setUsername }) => {

    const handleUsernameValidation = (e) => {
        if (TEXT_REGEX.test(e.target.value) || e.target.value === '')
            setUsername(e.target.value)
    }
    return (
        <div className='register-name'>
            <div className='register-input-wrapper'>
                <UserIcon className={'input-user-icon'} />
                <input
                    value={username}
                    onChange={(e) => handleUsernameValidation(e)}
                    className='register-name-input'
                    type='text'
                    placeholder='İsim Yazın' />
            </div>
        </div>
    )
}

export default RegisterName
