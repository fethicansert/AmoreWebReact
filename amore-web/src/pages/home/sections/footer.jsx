import React from 'react'
import { useMediaPredicate } from "react-media-hook";
import FlexBox from '../../../copmonents/flex_box';
import phones from '../../../assets/images/phones.png';
import appleLogo from '../../../assets/icons/app_store_logo.png';
import googleLogo from '../../../assets/icons/google_logo_white.png';
import amoreLogo from '../../../assets/icons/amore_icon.png';
import { useTranslation } from 'react-i18next';
import FooterButton from '../comps/footer_button';
import { LINKS } from '../../../utils/constants.js';
import '../../../css/home/footer.css';

const Footer = () => {

    //MEDIA
    const hideImage = useMediaPredicate("(max-width: 1045px)");
    const columnButtons = useMediaPredicate("(max-width: 755px)");

    //LOCALIZATION
    const { t, i18n } = useTranslation();

    const navigeToLink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <footer className='footer-section'
            style={{
                height: !columnButtons ? '19vw' : 'unset',
                minHeight: !columnButtons ? '185px' : 'unset',
                maxHeight: !columnButtons ? '255px' : 'unset',
                marginTop: hideImage ? '0' : '10rem'
            }}>
            <div
                className='footer-container'
                style={{ flexDirection: !columnButtons ? 'row' : 'column', padding: !columnButtons ? '0 2rem' : '1.5rem 0' }}>

                {
                    !hideImage
                        ? <div className='footer-image-container'>
                            <img src={phones} />
                        </div>
                        : <FlexBox width={!columnButtons ? '40%' : '100%'} alignItems='center' justifyContent={'center'} gap={'0 10px'}>
                            <img src={amoreLogo} width={!columnButtons ? 45 : 36} />
                            <h2 style={{ fontSize: !columnButtons ? '2.4rem' : '2rem' }} className='footer-amore-title'>Amore</h2>
                        </FlexBox>
                }

                <div className='footer-buttons-grid'
                    style={{
                        marginTop: columnButtons ? '1rem' : '0',
                        gap: columnButtons ? '13px' : '10px',
                        gridTemplateColumns: !columnButtons ? 'auto repeat(2,1fr)' : 'repeat(2,1fr)',
                        width: !hideImage ? '50%' : !columnButtons ? '65%' : '100%',
                        justifyContent: hideImage ? 'space-evenly' : 'space-between',
                        alignItems: 'center'
                    }}>

                    {<p style={{ gridColumn: columnButtons ? '1/3' : 'unset', justifySelf: columnButtons ? 'center' : 'unset' }} className='footer-text'>
                        {t('HOME.FOOTER.TEXT')}
                        {!columnButtons ? <br /> : ' '}
                        <span> {t('HOME.FOOTER.SUB_TEXT')}</span></p>}


                    <FooterButton onClick={() => navigeToLink(LINKS.APPLE_STORE)} style={{ justifySelf: 'end' }} icon={appleLogo} iconWidth={'clamp(30px, 3vw, 39.5px)'} textSmall={t('HOME.FOOTER.APPLE_BUTTON')} textBig={'AppStore'} />
                    <FooterButton onClick={() => navigeToLink(LINKS.GOOGLE_PLAY)} icon={googleLogo} iconWidth={'clamp(39px, 3.5vw, 49px)'} textSmall={t('HOME.FOOTER.GOOGLE_BUTTON')} textBig={'Play Store'} />
                </div>

            </div>
        </footer>
    )
}

export default Footer
