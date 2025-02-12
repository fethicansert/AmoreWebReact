import React from 'react'
import '../css/login/login_popup.css';
import loginBackGroundImage from '../assets/images//login_background.png';
import logingrain from '../assets/images//login_grain.png';
import { colors } from '../utils/theme';
import BasicButton from './basic_button';
import FlexBox from './flex_box';
import BlurButton from './blur_button';
import { AppleLogo, CloseIcon, GoogleLogo } from '../assets/svg/svg_package';
import { useNavigate } from 'react-router-dom';
const LoginPopup = ({ setShowLogin }) => {

    const navigate = useNavigate();

    return (
        <div className='login-popup'>

            <div className='login-popup-container'>

                <CloseIcon color={colors.negativeBlack} strokeColor={colors.backGround3} onClick={() => setShowLogin(false)} />

                <img src={loginBackGroundImage}></img>
                <div className='login-grain-texture'></div>

                <div className='login'>
                    <div>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '.5rem' }}>Hemen Başla !</h2>
                        <p style={{ fontSize: '0.938rem' }}>Mesajını göndermek için kayıt ol</p>
                    </div>

                    <div style={{ width: '100%' }}>
                        <p style={{ fontSize: '0.938rem', marginBottom: '.5rem' }}>Aşk peşindeysen, kayıt ol</p>
                        <FlexBox gap='0 8px' margin={'0 0 .5rem 0'}>
                            <BlurButton
                                icon={<AppleLogo width='24' height='24' />}
                                height='48px'
                                borderRadius='12px'
                                backgroundColor={colors.lowWhiteText}
                                text={'Apple'}>
                            </BlurButton>
                            <BlurButton
                                icon={<GoogleLogo width='22' height='22' />}
                                height='48px'
                                borderRadius='12px'
                                backgroundColor={colors.lowWhiteText}
                                text={"Google"}>
                            </BlurButton>
                        </FlexBox>
                        <BasicButton
                            fontSize={'.9rem'}
                            onClick={() => {
                                navigate('/register');
                                setShowLogin(false);
                            }}
                            backgroundColor={colors.brand1}
                            color={colors.whiteText}
                            width={'100%'}
                            height={'48px'}
                            borderRadius={'12px'}>
                            Telefonla Devam Et
                        </BasicButton>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default LoginPopup

