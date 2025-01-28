import React, { useState } from 'react'
import { ArrorHeadLeft, ArrowHeadRight } from '../assets/svg/svg_package'
import BasicButton from './basic_button'
import { colors } from '../utils/theme'
import FlexBox from './flex_box'
import { v4 as uuidv4 } from 'uuid';
import premiumHeart from '../assets/icons/premium_heart.png';

const PremiumBox = ({ style }) => {
    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const contentTexts = [
        'Premium’a geçerek kimlerle eşleştiğini gör. Sana ilgi duyanları hemen keşfet!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, deleniti?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iure odit.'];

    const contentTitles = [
        'Seni Beğenenleri Gör', 'Title 2', 'Title3', 'Title4'
    ]

    return (
        <div className='premium-box' style={style}>
            <h2>Hemen Premium Ol</h2>
            <div className='premium-content'>
                <img src={premiumHeart} width={113} />
                <h3>{contentTitles[currentContentIndex]}</h3>
                <p>
                    {contentTexts[currentContentIndex]}
                </p>
            </div>

            <div className='premium-content-control'>
                <FlexBox gap='0 15px'>

                    <div className='premium-content-control-button' onClick={() => setCurrentContentIndex(prev => prev !== 0 ? prev - 1 : prev)}>
                        <ArrorHeadLeft />
                    </div>

                    <div className='premium-content-control-button' onClick={() => setCurrentContentIndex(prev => prev !== (contentTexts.length - 1) ? prev + 1 : prev)}>
                        <ArrowHeadRight />
                    </div>

                </FlexBox>


                <FlexBox gap='0 8px'>
                    {
                        contentTexts.map((item, index) =>
                            <PremiumContentControlPosition key={uuidv4()} isActive={index === currentContentIndex} />)
                    }
                </FlexBox>


            </div>

            <BasicButton width={'100%'} height={'42px'} backgroundColor={colors.brand1} borderRadius={'12px'} color={colors.whiteText} >
                Premium Ol
            </BasicButton>
        </div>
    )
}

export default PremiumBox


const PremiumContentControlPosition = ({ isActive }) => {
    return <div className={`premium-content-control-position ${isActive ? 'active' : null} `}></div>
}
