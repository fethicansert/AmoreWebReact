import React from 'react'
import PaddingContainer from '../../../copmonents/padding_container';
import Header from '../../../copmonents/header';
import colors from '../../../theme/colors';
import amoreIcon from '../../../assets/icons/amore_icon.png';

import FlexBox from '../../../copmonents/flex_box';
import { useMediaPredicate } from "react-media-hook";
import appleLogoWhite from '../../../assets/icons/apple_logo_white.png';
import googleLogo from '../../../assets/icons/google_logo.png';
import phoneImage from '../../../assets/images/phone1.png'
import HeroBox from '../hero_box';
import BasicButton from '../../../copmonents/basic_button';

import '../../../css/home/hero_section.css';
const Hero = () => {

    const alignHeaders = useMediaPredicate("(min-width: 380px)");
    const smallButtonText = useMediaPredicate("(min-width: 1000px)");
    const hideBoxes = useMediaPredicate("(min-width: 1045px)");
    const startPosition = alignHeaders ? 'center' : 'start';

    const googlePlayLink = "https://play.google.com/store/apps/details?id=com.amordating.app&hl=tr&pli=1";
    const appStoreLink = "https://apps.apple.com/tr/app/amore-new-friends-flirting/id6569249182";


    const navigeToLink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <section className='hero-section'>
            <PaddingContainer right={'10px'} left={'10px'} top={'25px'} height={'100%'}>

                <Header
                    title={'Amore'}
                    titleColor={colors.brand1}
                    icon={amoreIcon}
                    iconWidth={35}
                    backgroundColor={colors.backGround4}
                    textColor={colors.whiteText}
                    menuIconColor={colors.backGround2}
                />

                <div className='hero-container'>

                    <h2 style={{ alignSelf: startPosition }}>Tadı Damağında Kalacak</h2>

                    <h3 style={{ alignSelf: startPosition }}>Sohbet Et ve Flörtleş</h3>

                    <FlexBox gap={'10px'} width={'100%'} justifyContent={startPosition} margin={'2rem 0 2.5rem 0'}>

                        <BasicButton
                            onClick={() => navigeToLink(googlePlayLink)}
                            fontSize={smallButtonText ? '0.77rem' : '0.7rem'}
                            width={'clamp(130px, 15vw, 182px)'}
                            height={'clamp(44px, 5vw, 55px)'}
                            backgroundColor={colors.darkButton}
                            color={colors.whiteText}
                            borderRadius={'14px'}
                            gap={10}>
                            <img style={{ marginBottom: '5px' }} width={'17%'} src={appleLogoWhite}></img>
                            App Store

                        </BasicButton>

                        <BasicButton
                            onClick={() => navigeToLink(appStoreLink)}
                            fontSize={smallButtonText ? '0.77rem' : '0.7rem'}
                            width={'clamp(130px, 15vw, 182px)'}
                            height={'clamp(44px, 5vw, 55px)'}
                            backgroundColor={colors.darkButton}
                            color={colors.whiteText} borderRadius={'14px'}
                            gap={10}>
                            <img width={'17%'} src={googleLogo}></img>
                            Google Play
                        </BasicButton>

                    </FlexBox>


                    <div className='circle-wrapper'>

                        <div className='circle-container'>
                            <img src={phoneImage} />
                        </div>

                        {
                            hideBoxes && <>
                                <HeroBox
                                    width={'225px'}
                                    height={'112.5px'}
                                    backgroundColor={colors.brand2}
                                    xPosition={'-67%'}
                                    rotate={'-6.64deg'}
                                    justifyContent='space-between'
                                    alignItems='flex-start'>
                                    <p className='hero-box-bold-big'>Sadece gerçek <br /> insanlar</p>
                                    <p className='hero-box-semi-small'>Amore’da sahte profillere yer yok.</p>
                                </HeroBox>

                                <HeroBox
                                    showPhotos={true}
                                    width={'250px'}
                                    height={'125px'}
                                    backgroundColor={colors.brand1}
                                    xPosition={'108%'}
                                    rotate={'6.38deg'}>
                                    <p className='hero-box-medium'>Tanış, Konuş, Görüş</p>
                                    <p className='hero-box-bold-small'>Aşka açılan kapı</p>
                                </HeroBox></>
                        }

                    </div>

                </div>

            </PaddingContainer>
        </section>
    );
}

export default Hero
