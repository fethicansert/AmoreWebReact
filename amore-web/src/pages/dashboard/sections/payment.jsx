import React, { useRef, useState } from 'react';
import FlexBox from '../../../copmonents/flex_box';
import { MasterCardIcon } from '../../../assets/svg/svg_package';
import BasicButton from '../../../copmonents/basic_button';
import { colors } from '../../../utils/theme';
import CreditCard from '../comps/credit_card';
import ahmetOffaBass from '../../../sounds/ahmet-off-a-bass.mp3';
import '../../../css/dashboard/payment.css';
import { useTranslation } from 'react-i18next';


const Payment = () => {

    //STATES
    const [cardOwner, setCardOwner] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvvNumber, setCvvNumber] = useState('');
    const [lastDateMonth, setLastDateMonth] = useState('');
    const [lastDateYear, setLastDateYear] = useState('');

    //CONTEXT
    const { t, _ } = useTranslation();

    //REFS
    // const ahmetOffaBassRef = useRef(new Audio(ahmetOffaBass));

    return (
        <section className='payment'>
            <form>
                <FlexBox flexDirection='column' alignItems='flex-start' gap='10px 0' style={{ marginBottom: '2.1rem', marginTop: '2rem' }}>
                    <PaymentInputHeader title={t('DASHBOARD.PAYMENT.CARD_USER_NAME_TITLE')} subTitle={t('DASHBOARD.PAYMENT.CARD_USER_NAME_SUB_TITLE')} />
                    <PaymentInput type='text' placeHolder={t('DASHBOARD.PAYMENT.CARD_USER_NAME_PLACEHOLDER')} value={cardOwner} setValue={setCardOwner} maxLength={50} />
                </FlexBox>

                <FlexBox flexDirection='column' alignItems='flex-start' gap='10px 0' style={{ marginBottom: '2.4rem' }}>
                    <PaymentInputHeader title={t('DASHBOARD.PAYMENT.CARD_NUMBER_TITLE')} subTitle={t('DASHBOARD.PAYMENT.CARD_NUMBER_SUB_TITLE')} />
                    <PaymentInput type='text' isCreditNumber={true} placeHolder={t('DASHBOARD.PAYMENT.CARD_NUMBER_PLACEHOLDER')} trailing={<MasterCardIcon />} value={cardNumber} setValue={setCardNumber} maxLength={20} />
                </FlexBox>

                <FlexBox className='payment-cvv-number-wrapper' flexDirection='' alignItems='' justifyContent='space-between' style={{ marginBottom: '2.4rem' }}>
                    <PaymentInputHeader title={t('DASHBOARD.PAYMENT.CARD_CVV_TITLE')} subTitle={t('DASHBOARD.PAYMENT.CARD_CVV_SUB_TITLE')} />
                    <PaymentInput type="number" placeHolder={t('DASHBOARD.PAYMENT.CARD_CVV_PLACEHOLDER')} className="payment-cvv-input" value={cvvNumber} setValue={setCvvNumber} maxLength={3} />
                </FlexBox>

                <FlexBox className='payment-last-date-wrapper' flexDirection='' alignItems='' justifyContent='space-between' style={{ marginBottom: '2.6rem' }}>
                    <PaymentInputHeader title={t('DASHBOARD.PAYMENT.CARD_EXPIRATION_DATE_TITLE')} subTitle={t('DASHBOARD.PAYMENT.CARD_EXPIRATION_DATE_SUB_TITLE')} />
                    <FlexBox width="65%" justifyContent="space-between">
                        <PaymentInput type="number" placeHolder={t('DASHBOARD.PAYMENT.CARD_EXPIRATION_DATE_MONTH_PLACEHOLDER')} className="payment-last-date-input" textAlign="center" value={lastDateMonth} setValue={setLastDateMonth} maxLength={2} />
                        <PaymentInput type="number" placeHolder={t('DASHBOARD.PAYMENT.CARD_EXPIRATION_DATE_YEAR_PLACEHOLDER')} className="payment-last-date-input" textAlign="center" value={lastDateYear} setValue={setLastDateYear} maxLength={2} />
                    </FlexBox>
                </FlexBox>

                <BasicButton color={colors.whiteText} backgroundColor={colors.brand1} height="60px" width="100%" borderRadius="12px">
                    {t('BUTTONS.PAY_BUTTON')}
                </BasicButton>
            </form>

            <div className='credit-payment-infos'>

                <CreditCard name={cardOwner} cardNumber={cardNumber.replaceAll('-', '')} month={lastDateMonth} year={lastDateYear} />

                <div className='credit-payment-infos-dot-lines'></div>

                <div className='credit-payment-infos-content'>

                    <FlexBox width={'100%'} flexDirection='column' justifyContent='center' gap='30px 0' >

                        <span className='credit-payment-infos-content-title'>{t('DASHBOARD.PAYMENT.CHECKOUT.TITLE')}</span>

                        <FlexBox flexDirection='column' width={'100%'} >

                            <FlexBox width={'100%'} justifyContent='space-between' style={{ borderBottom: `1px solid ${colors.lowWhiteText}`, padding: '1rem 0' }}>
                                <span>3 {t('PREMIUM_SUBSCRIPTION.MONTHLY_SUBSCRIPTION')}</span>
                                <span>59$ {t('DATE.WEEK')}</span>
                            </FlexBox>

                            <FlexBox width={'100%'} justifyContent='space-between' style={{ borderBottom: `1px solid ${colors.lowWhiteText}`, padding: '1rem 0' }}>
                                <span>3 {t('PREMIUM_SUBSCRIPTION.MONTHLY_TOTAL')}</span>
                                <span>708$ </span>
                            </FlexBox>

                            <FlexBox width={'100%'} justifyContent='space-between' style={{ borderBottom: `1px solid ${colors.lowWhiteText}`, padding: '1rem 0' }}>
                                <span>20 {t('PURCHASE.DISCOUNT')}</span>
                                <span>141$</span>
                            </FlexBox>

                        </FlexBox>

                    </FlexBox>

                    <FlexBox width={'100%'} justifyContent='space-between' style={{ fontSize: '1rem' }}>
                        <span>{t('DASHBOARD.PAYMENT.CHECKOUT.TOTAL')}</span>
                        <span>567$</span>
                    </FlexBox>

                </div>
            </div>

        </section>
    );
};

//FUNCTIONS
function PaymentInput({ value, setValue, placeHolder, textAlign, trailing, className, type = "text", maxLength, isCreditNumber }) {

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
        let value = e.target.value;

        if (isCreditNumber) {
            // Sadece rakamları tut ve - işaretlerini kaldır
            value = value.replace(/[^0-9]/g, '');
            // isCreditNumber true ise, her 4 rakamdan sonra - ekle
            value = value.match(/.{1,4}/g)?.join('-') || '';
        }

        //Check value length
        if (value.length <= maxLength) setValue(value);
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
