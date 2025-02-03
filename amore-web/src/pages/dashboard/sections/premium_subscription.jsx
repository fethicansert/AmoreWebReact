import React from 'react';
import '../../../css/dashboard/premium_subscription.css';
import { colors } from '../../../utils/theme';
import PremiumCard from '../comps/premium_card';

const cardFeatures1 = ['Other territories cob', 'Office pee needle down', 'Reference stands', 'Die up another', 'Back data engagement'];
const cardFeatures2 = ['Support version only', 'Meaningful 2', 'This us move up', 'Space fruit', 'Big would adoption'];
const cardFeatures3 = ['Best space', 'Points adoption', 'Fured downloaded', 'Lift prioritize', 'Ideal spaces'];

const PremiumSubscription = () => {
    return (
        <section className='premium-subscription'>

            <h2>Premium Dünyasına <br /> <span>Hoş Geldin</span></h2>

            <div className='premium-subscription-cards-wrapper'>
                <PremiumCard features={cardFeatures1} price={'30$'} time={'1 Hafta'} planInfo={"1 Haftalık premium üyelik"} subscriptionPlan={'Basit Plan'} subscriptionNumber={1} sprayOptions={[
                    { backgroundColor: colors.sprayTransparent, left: '-28px', top: '89px' },
                    { backgroundColor: colors.sprayTransparent, left: '66px', top: '75.93px' },
                    { backgroundColor: colors.sprayGray, left: '161px', top: '32px' }
                ]} />
                <PremiumCard features={cardFeatures2} price={'49$'} time={'1 Ay'} planInfo={"1 Aylık premium üyelik"} subscriptionPlan={'Basit Plan'} subscriptionNumber={2} sprayOptions={[
                    { backgroundColor: colors.sprayTransparent, left: '-28px', top: '89px' },
                    { backgroundColor: colors.sprayBlue, left: '96px', top: '55.93px', zIndex: 1 },
                    { backgroundColor: colors.sprayPink, left: '171px', top: '42px' }
                ]} />
                <PremiumCard features={cardFeatures3} price={'59$'} time={'3 Ay'} planInfo={"3 Aylık premium üyelik"} subscriptionPlan={'Basit Plan'} subscriptionNumber={3} sprayOptions={[
                    { backgroundColor: colors.sprayYelow, left: '-28px', top: '89px', zIndex: 2 },
                    { backgroundColor: colors.sparyBlue2, left: '66px', top: '65.93px', zIndex: 1 },
                    { backgroundColor: colors.sprayPurple, left: '171px', top: '42px' }
                ]} />
            </div>

            <p className='premium-subscriptin-footer-text'>Hangi premium seçenek sana daha uygun?</p>

        </section>
    )




}

export default PremiumSubscription
