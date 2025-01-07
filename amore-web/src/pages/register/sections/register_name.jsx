import React, { useEffect, useState } from 'react'
import { UserIcon } from '../../../assets/svg/svg_package'
import useScroll from '../../../hooks/use_scroll';
import { colors } from '../../../theme/theme';
const TEXT_REGEX = /^[A-Za-z_ ]+$/;
const RegisterName = ({ username, setUsername }) => {

    const scroll = useScroll();

    const [usernameFocus, setUsernameFocus] = useState(false);

    const handleUsernameValidation = (e) => {
        if (TEXT_REGEX.test(e.target.value) || e.target.value === '')
            setUsername(e.target.value)
    }

    return (
        <div className='register-name'>
            <div className='register-input-wrapper' style={{ border: `1px solid ${usernameFocus ? colors.brand1 : colors.borderColor1}` }}>
                <UserIcon className={'input-user-icon'} />
                <input
                    value={username}
                    onFocus={() => setUsernameFocus(true)}
                    onBlur={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setUsernameFocus(false);
                    }}
                    onChange={(e) => handleUsernameValidation(e)}
                    className='register-name-input'
                    type='text'
                    placeholder='İsim Yazın' />
            </div>
        </div>
    )
}

export default RegisterName
