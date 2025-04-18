import React from 'react'
import FlexBox from './flex_box'
import BasicButton from './basic_button'
import { colors } from '../utils/theme'
import { useAuth } from '../hooks/use_auth'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { userFcmToken } from '../api/services/user_servives'
import { useAppData } from '../hooks/use_add_data'
import { useBanner } from '../hooks/use_banner'

const Logout = () => {

    const { setAuth } = useAuth();
    const { t, _ } = useTranslation();
    const { language } = useAppData();
    const navigate = useNavigate();
    const { setShowLogout } = useBanner()

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
                        onClick={() => setShowLogout(false)}
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

    async function handleLogout() {
        const token = localStorage.getItem('fcmToken');
        const deleteResponse = await userFcmToken({ type: 'delete', token: token, language: language });
        localStorage.clear('fcmToken');
        setShowLogout(false);
        navigate('/');
        setTimeout(() => { setAuth({}); }, 0)
    }
}

export default Logout
