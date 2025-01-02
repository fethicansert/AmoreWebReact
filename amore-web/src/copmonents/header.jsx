import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FlexBox from './flex_box'
import BasicButton from './basic_button'
import colors from '../theme/colors'
import { useMediaPredicate } from "react-media-hook";
import { TbMenu2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom'


const Header = ({ backgroundColor, title, titleColor, icon, iconWidth, textColor, menuIconColor, borderColor }) => {

    const hideButtons = useMediaPredicate("(min-width: 700px)");
    const hideNavigation = useMediaPredicate("(min-width: 900px)");
    const [showNav, setShowNav] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        if (hideButtons) {
            setShowNav(false);
        }
    }, [hideButtons])

    const navigateRegister = (path) => {
        navigate(path);
    }


    return (
        <header style={{ backgroundColor: backgroundColor, padding: !hideButtons ? '12px 17px' : '9px 17px' }}>

            <FlexBox gap={'10px'}>
                <img src={icon} width={iconWidth}></img>
                <h1 onClick={() => navigate('/')} style={{ color: titleColor, cursor: 'pointer' }}>{title}</h1>
            </FlexBox>

            {
                hideNavigation && <FlexBox gap={'25px'}>
                    <Link style={{ color: textColor }} to={'/about'}>Amore Hakkında</Link>
                    <Link style={{ color: textColor }} to={'/about'}>Amore Nedir ?</Link>
                </FlexBox>
            }

            {
                hideButtons && <FlexBox gap={'10px'}>

                    <BasicButton
                        width={'125px'}
                        height={'48px'}
                        borderRadius={'81px'}
                        backgroundColor={colors.brand1}
                        color={colors.whiteText}>
                        Oturum Aç
                    </BasicButton>

                    <BasicButton
                        onClick={() => navigate('/register')}
                        width={'125px'}
                        height={'48px'}
                        borderRadius={'81px'}
                        backgroundColor={colors.brand2}
                        color={colors.whiteText}>
                        Kayıt Ol
                    </BasicButton>

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

                    <Link style={{ color: colors.whiteText, backgroundColor: colors.brand2, width: '100%', padding: '.6rem', borderRadius: '4px' }} to={'/about'}>Oturum Aç</Link>

                    <Link style={{ color: colors.whiteText, marginTop: '4px', backgroundColor: colors.brand1, width: '100%', padding: '.6rem', borderRadius: '4px' }} to={'/register'}>Kayıt Ol</Link>

                    <Link style={{ color: textColor, marginTop: '5px' }} to={'/about'}>Amore Hakkında</Link>

                    <Link style={{ color: textColor, marginTop: '5px' }} to={'/about'}>Amore Nedir ?</Link>

                </div>
            }

        </header>
    )
}

export default Header
