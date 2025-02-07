import React, { useState } from 'react';
import FlexBox from '../../../copmonents/flex_box';
import '../../../css/dashboard/payment.css'
import { MasterCardIcon } from '../../../assets/svg/svg_package';
import BasicButton from '../../../copmonents/basic_button';
import { colors } from '../../../utils/theme';

const Payment = () => {
    const [cardOwner, setCardOwner] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvvNumber, setCvvNumber] = useState('');
    const [lastDateMonth, setLastDateMonth] = useState('');
    const [lastDateYear, setLastDateYear] = useState('');

    return (
        <section className='payment'>
            <form>
                <FlexBox flexDirection='column' alignItems='flex-start' gap='10px 0' style={{ marginBottom: '2.1rem', marginTop: '2rem' }}>
                    <PaymentInputHeader title="Kart Üzerindeki İsim" subTitle="Kart üzerindeki ismi yazın" />
                    <PaymentInput placeHolder="Kart Sahibi" value={cardOwner} setValue={setCardOwner} maxLength={50} />
                </FlexBox>

                <FlexBox flexDirection='column' alignItems='flex-start' gap='10px 0' style={{ marginBottom: '2.4rem' }}>
                    <PaymentInputHeader title="Kart Numarası" subTitle="Kart üzerindeki 16 haneli kart numarasını girin" />
                    <PaymentInput putDash={true} placeHolder="Kart Numarası" trailing={<MasterCardIcon />} value={cardNumber} setValue={setCardNumber} maxLength={16} />
                </FlexBox>

                <FlexBox alignItems='center' justifyContent='space-between' style={{ marginBottom: '2.4rem' }}>
                    <PaymentInputHeader title="CVV Number" subTitle="3 haneli numarayı girin" />
                    <PaymentInput type="number" placeHolder="CVV" className="payment-cvv-input" value={cvvNumber} setValue={setCvvNumber} maxLength={3} />
                </FlexBox>

                <FlexBox alignItems='center' justifyContent='space-between' style={{ marginBottom: '2.6rem' }}>
                    <PaymentInputHeader title="Son kullanma tarihi" subTitle="Son kullanma tarihini girin" />
                    <FlexBox width="65%" justifyContent="space-between">
                        <PaymentInput type="number" placeHolder="00" className="payment-last-date-input" textAlign="center" value={lastDateMonth} setValue={setLastDateMonth} maxLength={2} />
                        <PaymentInput type="number" placeHolder="00" className="payment-last-date-input" textAlign="center" value={lastDateYear} setValue={setLastDateYear} maxLength={2} />
                    </FlexBox>
                </FlexBox>

                <BasicButton color={colors.whiteText} backgroundColor={colors.brand1} height="60px" width="100%" borderRadius="12px">
                    Ödeme Yap
                </BasicButton>
            </form>

            <div className='credit-card'>

            </div>


        </section>
    );
};

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
