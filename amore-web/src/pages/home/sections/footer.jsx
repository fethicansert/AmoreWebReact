import React from 'react'
import { useMediaPredicate } from "react-media-hook";

import '../../../css/home/footer.css';

import FlexBox from '../../../copmonents/flex_box';

import groupPhonesCutted from '../../../assets/images/group_phones_cutted.png';
import groupPhones from '../../../assets/images/group_phones.png';
import phones from '../../../assets/images/phones.png';
import BlurButton from '../blur_button';
import appleLogo from '../../../assets/icons/app_store_logo.png';
import googleLogo from '../../../assets/icons/google_logo_white.png';
import amoreLogo from '../../../assets/icons/amore_icon.png';

const Footer = () => {
    const hideImage = useMediaPredicate("(max-width: 1045px)");
    const columnButtons = useMediaPredicate("(max-width: 755px)");

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
                        gap: columnButtons ? '13px' : '0',
                        gridTemplateColumns: !columnButtons ? 'repeat(3,auto)' : 'repeat(2,1fr)',
                        width: !hideImage ? '50%' : !columnButtons ? '65%' : '100%',
                        justifyContent: hideImage ? 'space-evenly' : 'space-between',
                        alignItems: 'center'
                    }}>

                    {<p style={{ gridColumn: columnButtons ? '1/3' : 'unset', justifySelf: columnButtons ? 'center' : 'unset' }} className='footer-text'>
                        Uygulamamızı
                        {!columnButtons ? <br /> : ' '}
                        <span>indirmediniz mi ?</span></p>}

                    <BlurButton style={{ justifySelf: 'end' }} icon={appleLogo} iconWidth={'clamp(30px, 3vw, 39.5px)'} textSmall={"Download On The"} textBig={'AppStore'} />
                    <BlurButton icon={googleLogo} iconWidth={'clamp(39px, 3.5vw, 49px)'} textSmall={"Get It On"} textBig={'Play Store'} />
                </div>

            </div>
        </footer>
    )
}

export default Footer
