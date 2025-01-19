import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FlexBox from './flex_box'
import BasicButton from './basic_button'
import { colors } from '../utils/theme'
import { useMediaPredicate } from "react-media-hook";
import { TbMenu2 } from "react-icons/tb";
import { useTranslation } from 'react-i18next'
import { GrLanguage } from "react-icons/gr";
import { useIPLocation } from '../hooks/use_ip_location'
import { useLoginPopup } from '../hooks/use_login_popup'

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

    const hideButtons = useMediaPredicate("(min-width: 700px)");
    const hideNavigation = useMediaPredicate("(min-width: 900px)");
    const [showNav, setShowNav] = useState(false);
    const { t, i18n } = useTranslation();
    const { language, setLanguage } = useIPLocation();

    const navigate = useNavigate();

    const { setShowLoginPopup } = useLoginPopup()

    useEffect(() => {
        if (hideButtons) {
            setShowNav(false);
        }
    }, [hideButtons])

    return (
        <header style={{
            backgroundColor: backgroundColor,
            padding: !hideButtons ? '12px 17px' : '9px 17px',
            boxShadow: hasShadow ? '.5px .5px 3px rgba(0, 0, 0, 0.15)' : null,
            border: hasBorder ? 'solid 1.5px var(--borderColor1)' : null
        }}>

            <FlexBox gap={'10px'}>
                <img src={icon} width={iconWidth}></img>
                <h1 onClick={() => navigate('/')} style={{ color: titleColor, cursor: 'pointer' }}>{title}</h1>
            </FlexBox>

            {
                hideNavigation && <FlexBox gap={'25px'}>
                    <Link style={{ color: textColor }} to={'/about'}>{t('header.amoreLink1')}</Link>
                    <Link style={{ color: textColor }} to={'/about'}>{t('header.amoreLink2')}</Link>
                </FlexBox>
            }

            {
                hideButtons && <FlexBox gap={'10px'}>

                    <BasicButton
                        fontSize={'.85rem'}
                        onClick={() => setShowLoginPopup(true)}
                        width={'145px'}
                        height={'48px'}
                        borderRadius={'81px'}
                        backgroundColor={colors.brand1}
                        color={colors.whiteText}>
                        {t('header.loginButton')}
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
                        onClick={() => {
                            setShowLoginPopup(true);
                            setShowNav(false);
                        }}
                        fontSize={'.8rem'}
                        style={{ color: colors.whiteText, backgroundColor: colors.brand1, width: '100%', padding: '.6rem', borderRadius: '4px' }} >
                        {t('header.loginButton')}</BasicButton>

                    <Link style={{ color: textColor, marginTop: '5px', textAlign: 'center', width: '100%' }} to={'/about'}>Amore Hakkında</Link>

                    <Link style={{ color: textColor, marginTop: '5px', textAlign: 'center', width: '100%' }} to={'/about'}>Amore Nedir ?</Link>

                </div>
            }

        </header>
    )
}

export default Header
