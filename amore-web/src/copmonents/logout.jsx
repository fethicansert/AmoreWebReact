import React from 'react'
import FlexBox from './flex_box'
import BasicButton from './basic_button'
import { colors } from '../utils/theme'
import { useAuth } from '../hooks/use_auth'
import { useTranslation } from 'react-i18next'
import { replace, useLocation, useNavigate } from 'react-router-dom'

const Logout = ({ closeLogout }) => {

    const { setAuth } = useAuth();
    const { t, _ } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className='logout'>
            <div className='logout-container'>
                <h3>{t('LOGOUT.TITLE')}</h3>

                <p>
                    {t('LOGOUT.TEXT')}
                </p>

                <FlexBox gap='0 10px' margin={'1rem 0 0 0'}>

                    <BasicButton
                        onClick={handleLogout}
                        borderRadius={10}
                        width={'50%'}
                        height={'45px'}
                        backgroundColor={colors.darkButton} >
                        {t('LOGOUT.LOGOUT_BUTTON')}
                    </BasicButton>

                    <BasicButton
                        onClick={closeLogout}
                        borderRadius={10}
                        width={'50%'}
                        height={'45px'}
                        backgroundColor={colors.brand1}>
                        {t('LOGOUT.CLOSE_BUTTON')}
                    </BasicButton>

                </FlexBox>

            </div>

        </div>
    );

    function handleLogout() {
        navigate('/');
        setTimeout(() => setAuth({}), 0)
    }
}

export default Logout
