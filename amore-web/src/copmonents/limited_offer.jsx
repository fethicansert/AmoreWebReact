import React from 'react';
import { CloseIcon } from '../assets/svg/svg_package';
import { colors } from '../utils/theme';
import premiumIcon from '../assets/icons/premium_icon.png';
import moreMatchIcon from '../assets/icons/more_match_icon.png';
import highlightIcon from '../assets/icons/highlight_icon.png';
import moreLikeIcon from '../assets/icons/more_like_icon.png'
import FlexBox from './flex_box';
import BasicButton from './basic_button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use_auth';


const LimitedOffer = ({ setLimitedOfferOptions, limititedOfferOptions }) => {

    const navigate = useNavigate();
    const { setAuth } = useAuth();



    return (
        <div className='limited-offer-wrapper'>

            <div className='limited-offer'>

                <CloseIcon color={colors.negativeBlack} strokeColor={colors.backGround3} onClick={() => setLimitedOfferOptions(prev => ({ ...prev, show: false }))} className='limited-offer-close-icon' />

                <h3 className='limited-offer-title'>Sınırlı Teklif</h3>

                <p>Jeton paketini seçerek bonus kazanın ve yeni bölümlerin kilidini açın!</p>

                <div className='bonuses-wrapper'>
                    <p style={{ margin: '.1rem auto 1.1rem auto' }}>Alacağınız Bonuslar</p>

                    <div className='bonus-items-grid'>

                        <BonusItem text={"Premim Hesap"} icon={premiumIcon} />

                        <BonusItem text={"Daha fazla Eşleşme"} icon={moreMatchIcon} />

                        <BonusItem text={"Öne Çıkarma"} icon={highlightIcon} />

                        <BonusItem text={"Daha fazla Beğeni"} icon={moreLikeIcon} />

                    </div>

                </div>

                <p style={{ margin: '1.1rem auto' }}>Kilidi açmak için bir jeton paketi seçin</p>

                <FlexBox width={'100%'} justifyContent='space-between' margin={'2rem 0 1.2rem 0'} gap='0 15px'>

                    <JetonPacket price={'₺99,99'} oldJeton={'200'} newJeton={'330'} dicount={10} gradientColors={["#7D49E6", "#E64997"]} dicountColor={colors.brand1} />

                    <JetonPacket price={'₺799,99'} oldJeton={'2.000'} newJeton={'3.375'} dicount={'70'} gradientColors={["#498DE6", "#E64997"]} dicountColor={colors.blue} />

                    <JetonPacket price={'₺399,99'} oldJeton={'1000'} newJeton={'1.350'} dicount={35} gradientColors={["#7D49E6", "#E64997"]} dicountColor={colors.brand1} />

                </FlexBox>

                <BasicButton onClick={handleClick} width={'100%'} height={'55px'} borderRadius={'12px'} backgroundColor={colors.brand1} color={colors.whiteText}>
                    {limititedOfferOptions.type === 'coin' ? 'Tüm Jetonları Gör' : 'Tün Aboneklikleri Gör'}
                </BasicButton>

            </div>

        </div>
    );

    function handleClick() {
        navigate(`dashboard/${limititedOfferOptions.type === 'coin' ? 'market' : 'premium-subscription'}`);
        setLimitedOfferOptions(prev => ({ ...prev, show: false }));
        setAuth(prev => ({ ...prev, premiumSubscription: !prev.premiumSubscription }));
    }

    function BonusItem({ text, icon }) {
        return <div className='bonus-item'>
            <div className='bonus-item-image-elipse'>
                <img src={icon} />
            </div>
            <span>{text}</span>
        </div>
    }

    function JetonPacket({ dicount, oldJeton, newJeton, price, text, gradientColors, dicountColor }) {
        return <div className='jeton-packet' style={{ background: `radial-gradient(144.56% 76.1% at 26.44% 15.22%,${gradientColors[0]} 0%,${gradientColors[1]}) 100%` }}>
            <div className='jeton-packet-discount' style={{ backgroundColor: dicountColor }}>
                <span>+{dicount}%</span>
            </div>

            <FlexBox flexDirection='column' width={'100%'} height={'100%'} justifyContent='center'>
                <span className='jeton-packet-old-jeton'>{oldJeton}</span>
                <span className='jeton-packet-new-jeton'>{newJeton}</span>
                <span className='jeton-packet-jeton-text'>Jeton</span>
            </FlexBox>

            <FlexBox flexDirection='column' style={{ borderTop: `1px solid ${colors.lowWhiteText}`, paddingTop: '.8rem' }} gap='1px 0'>
                <span className='jeton-packet-price'>{price}</span>
                <span className='jeton-packet-time-text'>Başına haftalık</span>
            </FlexBox>
        </div>
    }
}

export default LimitedOffer
