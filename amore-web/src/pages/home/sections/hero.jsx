import React from 'react'
import PaddingContainer from '../../../copmonents/padding_container';
import Header from '../../../copmonents/header';
import { colors } from '../../../utils/theme';
import amoreIcon from '../../../assets/icons/amore_icon.png';
import FlexBox from '../../../copmonents/flex_box';
import { useMediaPredicate } from "react-media-hook";
import appleLogoWhite from '../../../assets/icons/apple_logo_white.png';
import googleLogo from '../../../assets/icons/google_logo.png';
import phoneImage from '../../../assets/images/phone1.png'
import HeroBox from '../comps/hero_box';
import BasicButton from '../../../copmonents/basic_button';
import { useTranslation } from 'react-i18next';
import { LINKS } from '../../../utils/constants';
import '../../../css/home/hero_section.css';

const Hero = () => {

    //MEDIA
    const alignHeaders = useMediaPredicate("(min-width: 380px)");
    const smallButtonText = useMediaPredicate("(min-width: 1000px)");
    const hideBoxes = useMediaPredicate("(min-width: 1045px)");
    const startPosition = alignHeaders ? 'center' : 'start';

    const navigeToLink = (link) => {
        window.open(link, "_blank");
    };

    const { t, i18n } = useTranslation();

    return (
        <section className='hero-section'>
            <PaddingContainer right={'10px'} left={'10px'} top={'clamp(15px,5vw,25px)'} bottom={'clamp(15px,5vw,25px)'} height='100%'>

                <Header
                    hasShadow={true}
                    title={'Amore'}
                    titleColor={colors.brand1}
                    icon={amoreIcon}
                    iconWidth={35}
                    backgroundColor={colors.backGround4}
                    textColor={colors.whiteText}
                    menuIconColor={colors.backGround2}
                    languageIconColor={colors.whiteText}
                />

                <div className='hero-container'>

                    <h2 style={{ alignSelf: startPosition }}>{t('HOME.HERO.TITLE')}</h2>

                    <h3 style={{ alignSelf: startPosition }}>{t('HOME.HERO.SUB_TITLE')}</h3>

                    <FlexBox gap={'10px'} width={'100%'} justifyContent={startPosition} margin={'2rem 0 2.5rem 0'}>

                        <BasicButton
                            onClick={() => navigeToLink(LINKS.APPLE_STORE)}
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
                            onClick={() => navigeToLink(LINKS.GOOGLE_PLAY)}
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
                                    <p className='hero-box-bold-big'>{t('HOME.HERO.BOX_LEFT.TEXT')}</p>
                                    <p className='hero-box-semi-small'>{t('HOME.HERO.BOX_LEFT.SUB_TEXT')}</p>
                                </HeroBox>

                                <HeroBox
                                    showPhotos={true}
                                    width={'250px'}
                                    height={'125px'}
                                    backgroundColor={colors.brand1}
                                    xPosition={'108%'}
                                    rotate={'6.38deg'}>
                                    <p className='hero-box-medium'>{t('HOME.HERO.BOX_RIGHT.TEXT')}</p>
                                    <p className='hero-box-bold-small'>{t('HOME.HERO.BOX_RIGHT.SUB_TEXT')}</p>
                                </HeroBox></>
                        }

                    </div>

                </div>

            </PaddingContainer>
        </section>
    );
}

export default Hero
