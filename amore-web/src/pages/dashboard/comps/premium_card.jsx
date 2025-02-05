import React from 'react'
import { colors } from '../../../utils/theme';
import BasicButton from '../../../copmonents/basic_button';
import FlexBox from '../../../copmonents/flex_box';
import PremiumCardFeature from './premium_card_feature';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


function PremiumCard({ sprayOptions, subscriptionNumber, time, subscriptionPlan, price, planInfo, features }) {

    const navigate = useNavigate();

    return <div className='premium-subscription-card'>

        <div className='premium-subscription-card-header'>
            <FlexBox flexDirection='column' alignItems='flex-start' gap='6px 0'>
                <span className='premium-subscription-card-time'>{time}</span>
                <span className='premium-subscription-card-subscription-plan'>{subscriptionPlan}</span>
            </FlexBox>
            <div className='premium-subscription-card-spray-container'>
                <div style={sprayOptions[0]} className='premium-subscription-card-spray'></div>
                <div style={sprayOptions[1]} className='premium-subscription-card-spray'></div>
                <div style={sprayOptions[2]} className='premium-subscription-card-spray'></div>
            </div>
            <span className='subscription-number'>{subscriptionNumber}</span>
        </div>

        <div className='premium-subscription-card-content-wrapper'>

            <div className='premium-subscription-card-price-container'>
                <span className='premium-subscription-card-price'>{price}<span>/Hafta</span></span>
                <p className='premium-subscription-plan-info'>{planInfo}</p>
            </div>

            <div className='premium-subscription-card-plan-features'>
                {features.map(feature => <PremiumCardFeature key={uuidv4()} feature={feature} />)}
            </div>

            <BasicButton
                onClick={() => navigate('/dashboard/payment')}
                width={'100%'}
                height={'50px'}
                backgroundColor={colors.brand1}
                color={colors.whiteText}
                borderRadius={'12px'}
            >Planı Seç
            </BasicButton>

        </div>

    </div>
}
export default PremiumCard;
