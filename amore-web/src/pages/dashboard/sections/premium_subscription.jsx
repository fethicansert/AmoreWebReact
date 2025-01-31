import React from 'react';
import '../../../css/dashboard/premium_subscription.css';
import { colors } from '../../../utils/theme';
import FlexBox from '../../../copmonents/flex_box';
import BasicButton from '../../../copmonents/basic_button';
import { TickIcon } from '../../../assets/svg/svg_package';

const cardFeatures1 = ['Other territories cob', 'Office pee needle down', 'Reference stands', 'Die up another', 'Back data engagement'];
const cardFeatures2 = ['Support version only', 'Meaningful 2', 'This us move up', 'Space fruit', 'Big would adoption'];
const cardFeatures3 = ['Best space', 'Points adoption', 'Fured downloaded', 'Lift prioritize', 'Ideal spaces'];
const PremiumSubscription = () => {
    return (
        <section className='premium-subscription'>

            <h2>Premium Dünyasına <br /> <span>Hoş Geldin</span></h2>

            <div className='premium-subscription-cards-wrapper'>
                <PremiumCard features={cardFeatures1} price={'30$'} time={'1 Hafta'} subscriptionPlan={'Basit Plan'} subscriptionNumber={1} sprayOptions={[
                    { backgroundColor: colors.sprayTransparent, left: '-28px', top: '89px' },
                    { backgroundColor: colors.sprayTransparent, left: '66px', top: '75.93px' },
                    { backgroundColor: colors.sprayGray, left: '161px', top: '32px' }
                ]} />
                <PremiumCard features={cardFeatures2} price={'49$'} time={'1 Ay'} subscriptionPlan={'Basit Plan'} subscriptionNumber={2} sprayOptions={[
                    { backgroundColor: colors.sprayTransparent, left: '-28px', top: '89px' },
                    { backgroundColor: colors.sprayBlue, left: '96px', top: '55.93px', zIndex: 1 },
                    { backgroundColor: colors.sprayPink, left: '171px', top: '42px' }
                ]} />
                <PremiumCard features={cardFeatures3} price={'59$'} time={'3 Ay'} subscriptionPlan={'Basit Plan'} subscriptionNumber={3} sprayOptions={[
                    { backgroundColor: colors.sprayYelow, left: '-28px', top: '89px', zIndex: 2 },
                    { backgroundColor: colors.sparyBlue2, left: '66px', top: '65.93px', zIndex: 1 },
                    { backgroundColor: colors.sprayPurple, left: '171px', top: '42px' }
                ]} />
            </div>

        </section>
    )

    function PremiumCardFeature({ feature }) {
        return <FlexBox className='premium-subscription-card-plan-feature'>
            <TickIcon color='#18181CDD' />
            {feature}
        </FlexBox>
    }


    function PremiumCard({ sprayOptions, subscriptionNumber, time, subscriptionPlan, price, planInfo, features }) {

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
                    <p className='premium-subscription-plan-info'>1 Aylık premium abonelik</p>
                </div>

                <div className='premium-subscription-card-plan-features'>
                    {features.map(feature => <PremiumCardFeature feature={feature} />)}
                </div>

                <BasicButton
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
}

export default PremiumSubscription
