import React, { useState } from 'react'
import CustomRadioBox from '../../../copmonents/custom_radibox'
import Flag from 'react-flagkit'
import { colors } from '../../../utils/theme';
import { useAuth } from '../../../hooks/use_auth';
import { useAppData } from '../../../hooks/use_add_data';

const languages = [
    { country: 'GB', text: 'English', value: 'en' },
    { country: 'TR', text: 'Türkçe', value: 'tr' },
    { country: 'FR', text: 'Français', value: 'fr' },
    { country: 'DE', text: 'Deutsch', value: 'de' },
    { country: 'IT', text: 'Italiano', value: 'it' },
    { country: 'AE', text: 'Arapça', value: 'ar' },
    { country: 'ES', text: 'Chinese', value: 'zh' }
];

const UserLanguage = () => {
    const { auth } = useAuth();
    const [selectedLanguage, setSelectedLanguage] = useState(auth.language);
    const { setLanguage } = useAppData();

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', marginTop: '2rem' }}>

            {languages.map((language, index) => <CustomRadioBox
                key={index}
                onClick={() => handleChangeLanguage(language.value)}
                isSelected={language.value === selectedLanguage}
                leading={<Flag country={language.country} />}
                text={language.text}
                width={'100%'}
                height={'53px'}
                selectColor={colors.brand1}
                selectRadius={'12px'} />)}
        </div>
    )

    function handleChangeLanguage(language) {
        setSelectedLanguage(language);
        setLanguage(language)
    }
}

export default UserLanguage
