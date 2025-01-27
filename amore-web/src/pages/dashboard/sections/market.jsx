import React from 'react'
import '../../../css/dashboard/market.css';
import FlexBox from '../../../copmonents/flex_box';
import BasicButton from '../../../copmonents/basic_button';
import AmoreDiamond from '../../../assets/icons/amore_diamond.png';
import { colors } from '../../../utils/theme';
const Market = () => {




    return (
        <section className='market'>
            <div className='market-header'>
                <div className='market-header-container'>

                    <FlexBox flexDirection='column' gap='10px 0' alignItems='start'>
                        <h2>Premium Üyelik</h2>
                        <p>Premium üye olarak avantajların tadını çıkar.</p>
                    </FlexBox>

                    <BasicButton className='market-header-button'>
                        Hemen Başla
                    </BasicButton>
                </div>
            </div>

            <div className='market-items-wrapper'>
                <MarkeItem coin={100} discount={43} oldPrice={'189,99'} newPrice={'799,99'} colors={[colors.lowGray, colors.backGround3, colors.backGround3]} />
                <MarkeItem coin={100} discount={43} oldPrice={'189,99'} newPrice={'799,99'} colors={[colors.lowYellow, colors.backGround3, colors.backGround3]} />
                <MarkeItem coin={100} oldPrice={'189,99'} newPrice={'799,99'} colors={[colors.lowBlue, colors.backGround3, colors.backGround3]} />
                <MarkeItem coin={100} discount={43} oldPrice={'189,99'} newPrice={'799,99'} colors={[colors.lowYellow, colors.lowGreen, colors.backGround3]} />
                <MarkeItem coin={100} discount={43} oldPrice={'189,99'} newPrice={'799,99'} colors={[colors.lowYellow, colors.lowPurple, colors.backGround3]} />
                <MarkeItem coin={100} oldPrice={'189,99'} newPrice={'799,99'} colors={[colors.lowYellow, colors.lowBlue, colors.lowGreen]} />
            </div>



        </section>
    )




}

export default Market



const MarkeItem = ({ coin, discount, oldPrice, newPrice, isUserSpecial, isLimitedTime, time, colors, maxWidth = '440px' }) => {
    return <div className='market-item' style={{ maxWidth: maxWidth }}>

        <div className='market-item-coin-row'>

            <img width={60} src={AmoreDiamond}></img>

            <FlexBox flexDirection='column' gap='2px 0' alignItems='flex-start'>
                <p><span className='marktet-item-coin'>{coin}</span> Jeton</p>
                {discount ? <div className='marktet-item-discount-container'>+%{discount} İndirim</div> : <span style={{ fontWeight: '300', fontSize: '.9rem' }}>İndirim yok</span>}
            </FlexBox>
        </div>



        <div className='market-item-spray-container'>
            <div style={{ background: colors[0] }} className='market-item-spray spray-one'></div>
            <div style={{ background: colors[1] }} className='market-item-spray spray-two'></div>
            <div style={{ background: colors[2] }} className='market-item-spray spray-three'></div>
        </div>
    </div>
}

