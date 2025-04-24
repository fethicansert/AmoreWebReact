import React, { useEffect, useRef, useState } from 'react'
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
    const { language, setLanguage } = useAppData();
    const languageRef = useRef(language);

    useEffect(() => {
        const clean = () => {
            
        }
    })

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', marginTop: '2rem' }}>

            {languages.map((radioLanguage, index) => <CustomRadioBox
                key={index}
                onClick={() => handleChangeLanguage(radioLanguage.value)}
                isSelected={radioLanguage.value === language}
                leading={<Flag country={radioLanguage.country} />}
                text={radioLanguage.text}
                width={'100%'}
                height={'53px'}
                selectColor={colors.brand1}
                selectRadius={'12px'} />)}
        </div>
    )

    function handleChangeLanguage(language) {

        setLanguage(language)
    }


}

export default UserLanguage
