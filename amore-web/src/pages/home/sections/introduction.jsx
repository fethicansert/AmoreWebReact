import React from 'react'
import PaddingContainer from '../../../copmonents/padding_container'
import '../../../css/home/introduction_section.css';
import { Slide } from 'react-slideshow-image';
import image1 from '../../../assets/images/image_1.webp';
import image2 from '../../../assets/images/image_2.webp';
import image3 from '../../../assets/images/image_3.webp';
import { useMediaPredicate } from "react-media-hook";
import { useTranslation } from 'react-i18next';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [
    { breakpoint: 900, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 750, settings: { slidesToShow: 2, slidesToScroll: 1 } },];

const Introduction = () => {

    //MEDIA
    const canSwipe = useMediaPredicate("(max-width: 920px)");
    const midPadding = useMediaPredicate("(max-width: 500px)");

    //LOCALIZATION
    const { t, i18n } = useTranslation();

    return (
        <section className='introduction-section'>
            <PaddingContainer top={midPadding ? '70px' : '100px'} bottom={midPadding ? '70px' : '100px'} left='10px' right='10px'>
                <h2>{t('HOME.INTRODUCTION.TITLE')}<br></br><span>{t('HOME.INTRODUCTION.SUB_TITLE')}</span></h2>

                <p>
                    {t('HOME.INTRODUCTION.TEXT')}
                </p>

                <Slide
                    canSwipe={canSwipe}
                    indicators={canSwipe ? indicators : null}
                    responsive={responsiveSettings}
                    autoplay={false}
                    arrows={null}
                    cssClass='carousel'
                    transitionDuration={350}
                    easing='ease-out'>

                    <div className='box'>
                        <img draggable='false' src={image1}></img>
                    </div>

                    <div className='box'>
                        <img draggable='false' src={image2}></img>
                    </div>

                    <div className='box'>
                        <img draggable='false' src={image3}></img>
                    </div>

                </Slide>

            </PaddingContainer>

        </section>
    )

    //CUSTOM INDICATOUR{
    function indicators() { return (<div className="indicator"></div>) };
}



export default Introduction
