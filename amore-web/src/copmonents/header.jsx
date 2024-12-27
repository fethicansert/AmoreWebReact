import React, { useEffect, useState } from 'react'
import FlexBox from './flex_box'
import { Link } from 'react-router-dom'
import BasicButton from './basic_button'
import colors from '../theme/colors'
import { useMediaPredicate } from "react-media-hook";
import { FiMenu } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { TbMenu2 } from "react-icons/tb";



const Header = ({ backgroundColor, title, titleColor, icon, iconWidth, textColor, menuIconColor, borderColor }) => {


    const hideButtons = useMediaPredicate("(min-width: 700px)");
    const hideNavigation = useMediaPredicate("(min-width: 900px)");
    const [showNav, setShowNav] = useState(false);


    useEffect(() => {
        if (hideButtons) {
            setShowNav(false);
        }
    }, [hideButtons])



    return (
        <header style={{ backgroundColor: backgroundColor, padding: !hideButtons ? '12px 17px' : '9px 17px' }}>

            <FlexBox gap={'10px'}>
                <img src={icon} width={iconWidth}></img>
                <h1 style={{ color: titleColor }}>{title}</h1>
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
                !hideButtons && <TbMenu2 onClick={() => setShowNav(prev => !prev)} color={menuIconColor} size={30} />
            }


            {/* if burger menu clicked  and buttons are not showed thans render fixed nav*/}
            {
                (showNav && !hideButtons) && <div className='fixed-navbar' style={{ backgroundColor: backgroundColor }}>

                    <Link style={{ color: colors.whiteText, backgroundColor: colors.brand2, width: '100%', padding: '.6rem', borderRadius: '4px' }} to={'/about'}>Oturum Aç</Link>

                    <Link style={{ color: colors.whiteText, marginTop: '4px', backgroundColor: colors.brand1, width: '100%', padding: '.6rem', borderRadius: '4px' }} to={'/about'}>Kayıt Ol</Link>

                    <Link style={{ color: textColor, marginTop: '5px' }} to={'/about'}>Amore Hakkında</Link>

                    <Link style={{ color: textColor, marginTop: '5px' }} to={'/about'}>Amore Nedir ?</Link>

                </div>
            }


        </header>
    )
}

export default Header
