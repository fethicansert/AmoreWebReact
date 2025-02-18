import React, { useRef, useState } from 'react';
import FlexBox from '../../../copmonents/flex_box';
import { MasterCardIcon } from '../../../assets/svg/svg_package';
import BasicButton from '../../../copmonents/basic_button';
import { colors } from '../../../utils/theme';
import CreditCard from '../comps/credit_card';
import ahmetOffaBass from '../../../sounds/ahmet-off-a-bass.mp3';
import '../../../css/dashboard/payment.css';


const Payment = () => {

    //STATES
    const [cardOwner, setCardOwner] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvvNumber, setCvvNumber] = useState('');
    const [lastDateMonth, setLastDateMonth] = useState('');
    const [lastDateYear, setLastDateYear] = useState('');

    //REFS
    // const ahmetOffaBassRef = useRef(new Audio(ahmetOffaBass));

    return (
        <section className='payment'>
            <form>
                <FlexBox flexDirection='column' alignItems='flex-start' gap='10px 0' style={{ marginBottom: '2.1rem', marginTop: '2rem' }}>
                    <PaymentInputHeader title="Kart Üzerindeki İsim" subTitle="Kart üzerindeki ismi yazın" />
                    <PaymentInput placeHolder="Kart Sahibi" value={cardOwner} setValue={setCardOwner} maxLength={50} />
                </FlexBox>

                <FlexBox flexDirection='column' alignItems='flex-start' gap='10px 0' style={{ marginBottom: '2.4rem' }}>
                    <PaymentInputHeader title="Kart Numarası" subTitle="Kart üzerindeki 16 haneli kart numarasını girin" />
                    <PaymentInput type='number' putDash={true} placeHolder="Kart Numarası" trailing={<MasterCardIcon />} value={cardNumber} setValue={setCardNumber} maxLength={16} />
                </FlexBox>

                <FlexBox className='payment-cvv-number-wrapper' flexDirection='' alignItems='' justifyContent='space-between' style={{ marginBottom: '2.4rem' }}>
                    <PaymentInputHeader title="CVV Number" subTitle="3 haneli numarayı girin" />
                    <PaymentInput type="number" placeHolder="CVV" className="payment-cvv-input" value={cvvNumber} setValue={setCvvNumber} maxLength={3} />
                </FlexBox>

                <FlexBox className='payment-last-date-wrapper' flexDirection='' alignItems='' justifyContent='space-between' style={{ marginBottom: '2.6rem' }}>
                    <PaymentInputHeader title="Son kullanma tarihi" subTitle="Son kullanma tarihini girin" />
                    <FlexBox width="65%" justifyContent="space-between">
                        <PaymentInput type="number" placeHolder="MM" className="payment-last-date-input" textAlign="center" value={lastDateMonth} setValue={setLastDateMonth} maxLength={2} />
                        <PaymentInput type="number" placeHolder="YY" className="payment-last-date-input" textAlign="center" value={lastDateYear} setValue={setLastDateYear} maxLength={2} />
                    </FlexBox>
                </FlexBox>

                <BasicButton color={colors.whiteText} backgroundColor={colors.brand1} height="60px" width="100%" borderRadius="12px">
                    Ödeme Yap
                </BasicButton>
            </form>

            <div className='credit-payment-infos'>

                <CreditCard name={cardOwner} cardNumber={cardNumber} month={lastDateMonth} year={lastDateYear} />

                <div className='credit-payment-infos-dot-lines'></div>

                <div className='credit-payment-infos-content'>

                    <FlexBox width={'100%'} flexDirection='column' justifyContent='center' gap='30px 0' >

                        <span className='credit-payment-infos-content-title'>Alisveriş Bilgileri</span>

                        <FlexBox flexDirection='column' width={'100%'} >

                            <FlexBox width={'100%'} justifyContent='space-between' style={{ borderBottom: `1px solid ${colors.lowWhiteText}`, padding: '1rem 0' }}>
                                <span>3 Aylık Abonelik</span>
                                <span>59$ Hafta</span>
                            </FlexBox>

                            <FlexBox width={'100%'} justifyContent='space-between' style={{ borderBottom: `1px solid ${colors.lowWhiteText}`, padding: '1rem 0' }}>
                                <span>3 Ay için toplam</span>
                                <span>708$ </span>
                            </FlexBox>

                            <FlexBox width={'100%'} justifyContent='space-between' style={{ borderBottom: `1px solid ${colors.lowWhiteText}`, padding: '1rem 0' }}>
                                <span>20 İndirim</span>
                                <span>141$</span>
                            </FlexBox>

                        </FlexBox>

                    </FlexBox>

                    <FlexBox width={'100%'} justifyContent='space-between' style={{ fontSize: '1rem' }}>
                        <span>Sonuç Tutar</span>
                        <span>567$</span>
                    </FlexBox>

                </div>
            </div>

        </section>
    );
};

//FUNCTIONS
function PaymentInput({ value, setValue, placeHolder, textAlign, trailing, className, type = "text", maxLength, putDash }) {

    return (
        <div className={`payment-input-wrapper ${className || ''}`}>
            <input
                type={type}
                value={value}
                onChange={(e) => handleChange(e)}
                className="payment-input"
                placeholder={placeHolder}
                style={{ textAlign }}
            />
            {trailing}
        </div>
    );

    function handleChange(e) {
        const valueLength = e.target.value.length;
        if (valueLength <= maxLength) setValue(e.target.value);
    }
}

function PaymentInputHeader({ title, subTitle }) {
    return (
        <FlexBox flexDirection="column" alignItems="flex-start" gap="3px 0" margin="0 .4rem">
            <span className="payment-input-header-title">{title}</span>
            <span className="payment-input-header-sub-title">{subTitle}</span>
        </FlexBox>
    );
}

export default Payment;
