import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FlexBox from './flex_box'
import BasicButton from './basic_button'
import { colors } from '../utils/theme'
import { useMediaPredicate } from "react-media-hook";
import { TbMenu2 } from "react-icons/tb";
import { useTranslation } from 'react-i18next'
import { GrLanguage } from "react-icons/gr";
import { useBanner } from '../hooks/use_banner'
import { useAuth } from '../hooks/use_auth'
import { ROUTES } from '../utils/constants'
import { useAppData } from '../hooks/use_add_data'

const Header = ({
    backgroundColor,
    title,
    titleColor,
    icon,
    iconWidth,
    textColor,
    menuIconColor,
    hasShadow,
    hasBorder,
    languageIconColor }) => {

    //STATES
    const hideButtons = useMediaPredicate("(min-width: 700px)");
    const hideNavigation = useMediaPredicate("(min-width: 900px)");
    const [showNav, setShowNav] = useState(false);

    //HOOKS
    const { auth } = useAuth();
    const { t, i18n } = useTranslation();
    const { language, setLanguage } = useAppData();
    const { setShowLogin } = useBanner()
    const navigate = useNavigate();

    //EFFECTS
    useEffect(() => {
        if (hideButtons) { setShowNav(false); }
    }, [hideButtons]);

    //UI
    return (
        <header style={{
            backgroundColor: backgroundColor,
            padding: !hideButtons ? '12px 17px' : '9px 17px',
            boxShadow: hasShadow ? '.5px .5px 3px rgba(0, 0, 0, 0.15)' : null,
            border: hasBorder ? 'solid 1.5px var(--borderColor1)' : null
        }}>

            <FlexBox gap={'10px'} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <img src={icon} width={iconWidth} ></img>
                <h1 style={{ color: titleColor, cursor: 'pointer' }}>{title}</h1>
            </FlexBox>

            {
                hideNavigation && <FlexBox gap={'25px'}>
                    <Link style={{ color: textColor }} to={'/about'}>{t('HEADER.AMORE_LINK_1')}</Link>
                    <Link style={{ color: textColor }} to={'/about'}>{t('HEADER.AMORE_LINK_2')}</Link>
                </FlexBox>
            }

            {
                hideButtons && <FlexBox gap={'10px'}>

                    <BasicButton
                        fontSize={'.85rem'}
                        onClick={handleClick}
                        width={'145px'}
                        height={'48px'}
                        borderRadius={'81px'}
                        backgroundColor={colors.brand1}
                        color={colors.whiteText}>
                        {t(`HEADER.${Object.keys(auth).length > 0 ? 'CONTINUE_BUTTON' : 'LOGIN_BUTTON'}`)}
                    </BasicButton>

                    <FlexBox
                        style={{ cursor: 'pointer' }}
                        gap='0 3.5px'
                        alignItems='center'
                        justifyContent='center'
                        onClick={() => setLanguage(prev => prev === 'tr' ? 'en' : 'tr')}>
                        <GrLanguage color={languageIconColor} size={22} />
                        <span style={{ color: languageIconColor, fontSize: 14 }}>{language}</span>
                    </FlexBox>

                </FlexBox>
            }


            {/* if burger menu clicked  and buttons are not showed thans render fixed nav*/}

            {
                !hideButtons && <TbMenu2 onClick={() => setShowNav(prev => !prev)} color={menuIconColor} size={30} style={{ cursor: 'pointer' }} />
            }


            {/* if burger menu clicked  and buttons are not showed thans render fixed nav*/}

            {
                !hideButtons && <div
                    className='fixed-navbar'
                    style={{ backgroundColor: backgroundColor, transform: `translateX(${showNav && !hideButtons ? '0' : '200'}%)` }}>

                    <BasicButton
                        onClick={() => handleClick({ isMobile: true })}
                        fontSize={'.8rem'}
                        style={{ color: colors.whiteText, backgroundColor: colors.brand1, width: '100%', padding: '.6rem', borderRadius: '4px' }} >
                        {t(`HEADER.${Object.keys(auth).length > 0 ? 'CONTINUE_BUTTON' : 'LOGIN_BUTTON'}`)}
                    </BasicButton>

                    <Link style={{ color: textColor, marginTop: '5px', textAlign: 'center', width: '100%' }} to={'/about'}>Amore Hakkında</Link>

                    <Link style={{ color: textColor, marginTop: '5px', textAlign: 'center', width: '100%' }} to={'/about'}>Amore Nedir ?</Link>

                </div>
            }

        </header>
    )

    //FUNCTIONS
    function handleClick({ isMobile = false }) {
        if (Object.keys(auth).length === 0) {
            isMobile && setShowNav(false);
            setShowLogin(true);
        }
        else navigate(`${ROUTES.DASHBOARD}/${ROUTES.USER_HOME}`);
    };


}

export default Header
