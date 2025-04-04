import React from 'react'
import '../../../css/dashboard/market.css';
import FlexBox from '../../../copmonents/flex_box';
import BasicButton from '../../../copmonents/basic_button';
import { colors } from '../../../utils/theme';
import MarkeItem from '../components/market_item';
import { useTranslation } from 'react-i18next';
import { useBanner } from '../../../hooks/use_banner';

const Market = () => {

    const { t, _ } = useTranslation();
    const { setLimitedOfferOptions } = useBanner();

    return (
        <section className='market'>

            <div className='market-header'>

                <div className='market-header-container'>
                    <FlexBox flexDirection='column' gap='unset' alignItems='unset' className='market-header-title-contaniner'>
                        <h2>{t('DASHBOARD.MARKET.PREMIUM_SUBSCRIPTION_HEADER.TITLE')}</h2>
                        <p>{t('DASHBOARD.MARKET.PREMIUM_SUBSCRIPTION_HEADER.SUB_TITLE')}</p>
                    </FlexBox>

                    <BasicButton onClick={() => setLimitedOfferOptions({ show: true, type: 'premium-subscription' })} className='market-header-button'>
                        {t('DASHBOARD.MARKET.PREMIUM_SUBSCRIPTION_HEADER.BUTTON_TEXT')}
                    </BasicButton>
                </div>

            </div>


            <div className='market-items-container'>

                <MarkeItem
                    className={'special-market-item'}
                    isUserSpecial={true}
                    discount={212}
                    isLimitedTime={true}
                    coin={2000}
                    oldPrice={'189,99'}
                    newPrice={'779,99'}
                    colors={[colors.lowPurple, colors.lowBlue, colors.lowYellow]}
                    maxWidth='550px' />

                <div className='market-items-wrapper'>
                    <MarkeItem coin={100} oldPrice={'189,99'} newPrice={'124,99'} colors={[colors.lowGray, colors.backGround3, colors.backGround3]} />
                    <MarkeItem coin={200} discount={43} oldPrice={'189,99'} newPrice={'174,99'} colors={[colors.lowYellow, colors.backGround3, colors.backGround3]} />
                    <MarkeItem coin={500} discount={43} oldPrice={'189,99'} newPrice={'359,99'} colors={[colors.lowBlue, colors.backGround3, colors.backGround3]} />
                    <MarkeItem coin={1000} discount={43} oldPrice={'599,99'} newPrice={'799,99'} colors={[colors.lowYellow, colors.lowGreen, colors.backGround3]} />
                    <MarkeItem coin={5000} discount={43} oldPrice={'799,99'} newPrice={'2399,99'} colors={[colors.lowYellow, colors.lowPurple, colors.backGround3]} />
                    <MarkeItem coin={11000} discount={43} oldPrice={'799,99'} newPrice={'3399,99'} colors={[colors.lowYellow, colors.lowBlue, colors.lowGreen]} />
                </div>
            </div>

            <p className='market-footer-text'>{t('DASHBOARD.MARKET.FOOTER_TEXT')}</p>

        </section>
    )

}

export default Market



