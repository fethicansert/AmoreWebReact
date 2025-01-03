import React from 'react'
import '../../../css/home/info_images.css';
import PaddingContainer from '../../../copmonents/padding_container';
import image1 from '../../../assets/images/1.png';
import image2 from '../../../assets/images/2.png';
import image3 from '../../../assets/images/3.png';
import FlexBox from '../../../copmonents/flex_box';

import { useMediaPredicate } from "react-media-hook";
import InfoImageBox from '../info_image_box';
import { v4 as uuidv4 } from 'uuid';


const InfoImages = () => {

    const flexRow = useMediaPredicate("(min-width: 820px)");

    return (
        <section className='info-images-section'>
            <PaddingContainer className={'info-images-container'} top='50px' bottom='50px' left='25px' right='25px'>
                <h2 style={{ textAlign: flexRow ? 'start' : 'center' }}>
                    Tamamen gerçek insanlarla{flexRow ? <br /> : null} sohbet et
                </h2>
                <FlexBox gap={'17.5px'} margin={'2rem 0 0 0'} flexDirection={`${flexRow ? 'row' : 'column'}`}>
                    {[image1, image2, image3].map(image => <InfoImageBox key={uuidv4()} imgSrc={image} />)}
                </FlexBox>
            </PaddingContainer>
        </section>
    )
}

export default InfoImages
