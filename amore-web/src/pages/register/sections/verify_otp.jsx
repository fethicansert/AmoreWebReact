import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import OtpIpnut from '../comps/phone_input'
import { createOtp } from '../../../utils/functions';
import FlexBox from '../../../copmonents/flex_box';
import { colors } from '../../../utils/theme';
import { BsArrowRepeat } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const VerifyOtp = ({ smsCode, setSmsCode, phone }) => {

    //STATE && HOOKS
    const [cooldown, setCooldown] = useState(null);
    const [success, setSuccess] = useState(false);
    const { t, i18n } = useTranslation();
    let interval;

    useEffect(() => {
        const clear = () => clearInterval(interval);
        return clear;
    }, []);

    //UI
    return (
        <div className='register-verify'>
            <div className='verify-container'>
                <OtpIpnut value={smsCode.digit1} setValue={setSmsCode} digit={'digit1'} />
                <OtpIpnut value={smsCode.digit2} setValue={setSmsCode} digit={'digit2'} />
                <OtpIpnut value={smsCode.digit3} setValue={setSmsCode} digit={'digit3'} />
                <OtpIpnut value={smsCode.digit4} setValue={setSmsCode} digit={'digit4'} />
            </div>
            <FlexBox gap='0 7px' margin={'1rem 0 0 0'} alignItems='center'>
                <span
                    className='register-verify-send-again-button'
                    onClick={handleSendAgain}>
                    {t('register.verify.sendAgainButton')}
                    <BsArrowRepeat color={colors.brand1} style={{ marginBottom: '.0rem' }} />
                </span>

                {(!cooldown && success) &&
                    <span style={{
                        textDecoration: 'underline',
                        color: colors.darkText,
                        fontSize: '.8rem'
                    }}>Yeni doğrulama kodu gönderildi.<span style={{ color: colors.brand1 }}></span></span>}

                {cooldown && <span style={{ color: colors.darkText, fontSize: '.8rem' }}>
                    {cooldown}'saniye beklemelisin
                </span>}
            </FlexBox>

        </div>
    );

    //FUNCTIONS
    async function handleSendAgain() {
        if (cooldown) return;
        const request = await createOtp({ phone: `+${phone}` });
        if (request.status === 400) {
            setCooldown(request.cooldown);
            setSuccess(false);
            interval = setInterval(() => {
                console.log("Heloo");
                setCooldown(prev => {
                    if (parseInt(prev) <= 1) {
                        clearInterval(interval);
                        return null;
                    }
                    return prev - 1
                });

            }, 1000);
        }
        if (request.status === 200) {
            setSuccess(true);
            setCooldown(null);
        }
    }
}

export default VerifyOtp
