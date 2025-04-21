import React, { useRef, useState } from 'react'
import CustomRadioKey from '../../../copmonents/custom_radio_key'
import { colors } from '../../../utils/theme';
import UserSettingsButton from '../components/user_settings_button';
import { AppVersionIcon, ArrowHeadRight, PrivacyPolicyIcon, TermsOfServiceIcon, VibrationIcon } from '../../../assets/svg/svg_package'
import UserDeleteButton from '../components/user_delete_button';
import { useOutletContext } from 'react-router-dom';

const UserSettings = () => {

    const { fetchText } = useOutletContext();

    return (
        <div className='user-settings'>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', marginBlock: '2rem 15px' }}>
                <CustomRadioKey height={'53px'} isActive={true} leading={<VibrationIcon />} text={'Bildirim'} activeColor={colors.brand1} notActiveColor={colors.fadedText} />
                <CustomRadioKey height={'53px'} isActive={false} leading={<VibrationIcon />} activeColor={colors.brand1} text={'Bildirim Sesi'} notActiveColor={colors.fadedText} />
                <UserSettingsButton onClick={() => fetchText('privacy_policy')} height={'53px'} leading={<PrivacyPolicyIcon />} text={'Gizlilik Politikası'} trealing={<ArrowHeadRight width='19px' height='19px' color={colors.darkText} />} />
                <UserSettingsButton onClick={() => fetchText('terms')} height={'53px'} leading={<TermsOfServiceIcon />} text={'Hizmet Şartları'} trealing={<ArrowHeadRight width='19px' height='19px' color={colors.darkText} />} />
            </div>

            <UserSettingsButton onClick={null} height={'53px'} leading={<AppVersionIcon />} text={'Versiyon'} trealing={<span style={{ fontSize: ".85rem", fontWeight: '300', }}>2.0.9+209</span>} />

            <UserDeleteButton />

        </div>
    )




}

export default UserSettings
