import React, { useState } from 'react'
import { ArrorHeadLeft, ArrowHeadRight } from '../assets/svg/svg_package'
import BasicButton from './basic_button'
import { colors } from '../utils/theme'
import FlexBox from './flex_box'
import { v4 as uuidv4 } from 'uuid';
import premiumHeart from '../assets/icons/premium_heart.png';
import { useTranslation } from 'react-i18next'

const PremiumBox = ({ style, className }) => {
    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    //CONTEXT
    const { t, _ } = useTranslation();

    const contentTexts = [
        t('PREMIUM_SUBSCRIPTION.PREMIUM_FEATURE_TEXT_1'),
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, deleniti?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iure odit.'];

    const contentTitles = [
        t('PREMIUM_SUBSCRIPTION.PREMIUM_FEATURE_TITLE_1'), 'Title 2', 'Title3', 'Title4'
    ];

    return (
        <div className={`premium-box ${className || ''}`} style={style}>
            <h2>{t('PREMIUM_SUBSCRIPTION.PREMIUM_SUBSCRIPTION_BOX_TITLE')}</h2>
            <div className='premium-content'>
                <img src={premiumHeart} width={105} />
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
                {t('PREMIUM_SUBSCRIPTION.BE_PREMIUM')}
            </BasicButton>
        </div>
    )
}

export default PremiumBox


const PremiumContentControlPosition = ({ isActive }) => {
    return <div className={`premium-content-control-position ${isActive ? 'active' : null} `}></div>
}
