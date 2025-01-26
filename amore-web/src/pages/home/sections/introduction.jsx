import React from 'react'
import PaddingContainer from '../../../copmonents/padding_container'
import '../../../css/home/introduction_section.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../../../assets/images/image_1.png';
import image2 from '../../../assets/images/image_2.png';
import image3 from '../../../assets/images/image_3.png';
import { useMediaPredicate } from "react-media-hook";
import { useTranslation } from 'react-i18next';


const Introduction = () => {

    const canSwipe = useMediaPredicate("(max-width: 920px)");
    const midPadding = useMediaPredicate("(max-width: 500px)");

    const indicators = () => (<div className="indicator"></div>);

    const { t, i18n } = useTranslation();


    const responsiveSettings = [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },

    ];
    return (
        <section className='introduction-section'>
            <PaddingContainer top={midPadding ? '70px' : '100px'} bottom={midPadding ? '70px' : '100px'} left='10px' right='10px'>
                <h2>{t('home.introduction.title')}<br></br><span>{t('home.introduction.subTitle')}</span></h2>

                <p>
                    {t('home.introduction.text')}
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
}

export default Introduction
