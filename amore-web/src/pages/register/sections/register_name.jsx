import React, { useState } from 'react'
import { UserIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme';
import { useTranslation } from 'react-i18next';
import { scrollPage } from '../../../utils/functions';


const TEXT_REGEX = /^[A-Za-z_ ]+$/;
const RegisterName = ({ username, setUsername }) => {

    const { t, i18n } = useTranslation();

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
                        scrollPage({ top: 0 })
                        setUsernameFocus(false);
                    }}
                    onChange={(e) => handleUsernameValidation(e)}
                    className='register-name-input'
                    type='text'
                    placeholder={t('REGISTER.USERNAME.INPUT_PLACEHOLDER')} />
            </div>
        </div>
    )
}

export default RegisterName
