import AmoreDiamond from '../../../assets/icons/amore_diamond.png';
import FlexBox from '../../../copmonents/flex_box';
import { useTranslation } from 'react-i18next';
import { useAppData } from '../../../hooks/use_add_data';

const MarkeItem = ({ coin, discount, oldPrice, newPrice, isUserSpecial, isLimitedTime, time, colors, style, className }) => {

    const { t, _ } = useTranslation();
    const { language } = useAppData();
    return <div className={`market-item ${className || ''}`} style={{ ...style }}>

        <div className='market-item-coin-row'>

            <img width={60} src={AmoreDiamond}></img>

            <FlexBox flexDirection='column' gap='2px 0' alignItems='flex-start'>
                <p><span className='marktet-item-coin'>{coin} </span>{t('PURCHASE.JETON')}</p>
                {discount ? <div
                    className='marktet-item-discount-container'>
                    {isUserSpecial && <span> {t('PURCHASE.SPECIAL_OFFER')} +<br /></span>}
                    +%{discount} {t('PURCHASE.DISCOUNT')}
                </div>
                    : <span style={{ fontWeight: '300', fontSize: '.9rem' }}>{t('PURCHASE.NO_DISCOUNT')}</span>}
            </FlexBox>
        </div>

        {isLimitedTime &&
            <FlexBox flexDirection='column' style={{ zIndex: '2' }}>
                <span className='market-item-time-limit'>29.38</span>
                <span className='market-item-limited-text'>{t('PURCHASE.LIMITED_TIME')}</span>
            </FlexBox>
        }

        <FlexBox flexDirection='column' style={{ zIndex: '2' }}>
            <span className='market-item-old-price'>{oldPrice} {language === 'tr' ? 'TL' : 'USD'}</span>
            <span className='market-item-new-price'>{newPrice} {language === 'tr' ? 'TL' : 'USD'}</span>
        </FlexBox>

        <div className='market-item-spray-container'>
            <div style={{ background: colors[0] }} className='market-item-spray spray-one'></div>
            <div style={{ background: colors[1] }} className='market-item-spray spray-two'></div>
            <div style={{ background: colors[2] }} className='market-item-spray spray-three'></div>
        </div>
    </div>
}

export default MarkeItem;


