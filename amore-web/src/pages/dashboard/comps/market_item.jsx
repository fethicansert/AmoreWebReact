
import AmoreDiamond from '../../../assets/icons/amore_diamond.png';
import FlexBox from '../../../copmonents/flex_box';

const MarkeItem = ({ coin, discount, oldPrice, newPrice, isUserSpecial, isLimitedTime, time, colors, style, className }) => {
    return <div className={`market-item ${className || ''}`} style={{ ...style }}>

        <div className='market-item-coin-row'>

            <img width={60} src={AmoreDiamond}></img>

            <FlexBox flexDirection='column' gap='2px 0' alignItems='flex-start'>
                <p><span className='marktet-item-coin'>{coin}</span> Jeton</p>
                {discount ? <div
                    className='marktet-item-discount-container'>
                    {isUserSpecial && <span> Size Özel +<br /></span>}
                    +%{discount}İndirim
                </div>
                    : <span style={{ fontWeight: '300', fontSize: '.9rem' }}>İndirim yok</span>}
            </FlexBox>
        </div>

        {isLimitedTime &&
            <FlexBox flexDirection='column' style={{ zIndex: '2' }}>
                <span className='market-item-time-limit'>29.38</span>
                <span className='market-item-limited-text'>Sınırlı Süre</span>
            </FlexBox>
        }


        <FlexBox flexDirection='column' style={{ zIndex: '2' }}>
            <span className='market-item-old-price'>{oldPrice} TL</span>
            <span className='market-item-new-price'>{newPrice} TL</span>
        </FlexBox>



        <div className='market-item-spray-container'>
            <div style={{ background: colors[0] }} className='market-item-spray spray-one'></div>
            <div style={{ background: colors[1] }} className='market-item-spray spray-two'></div>
            <div style={{ background: colors[2] }} className='market-item-spray spray-three'></div>
        </div>
    </div>
}

export default MarkeItem;