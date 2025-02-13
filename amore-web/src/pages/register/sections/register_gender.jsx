import React from 'react'
import { colors } from '../../../utils/theme'
import { MaleGenderIcon } from '../../../assets/svg/svg_package';
import { FemaleGenderIcon } from '../../../assets/svg/svg_package';
import GenderRadio from '../comps/gender_radio';
import { useTranslation } from 'react-i18next';
const RegisterGender = ({ gender, setGender }) => {

    const { t, i18n } = useTranslation();


    return (
        <>
            <GenderRadio
                border={gender !== 'male'}
                backgroundColor={gender === 'male' ? colors.brand1 : colors.backGround3}
                color={gender === 'male' ? colors.whiteText : colors.darkText}
                onClick={setGender}
                value={'male'}
                icon={<FemaleGenderIcon color={gender === 'male' ? colors.whiteText : colors.darkText} />}
                gender={t('REGISTER.GENDER.MALE')} />
            <GenderRadio
                border={gender !== 'female'}
                color={gender === 'female' ? colors.whiteText : colors.darkText}
                backgroundColor={gender === 'female' ? colors.brand1 : colors.backGround3}
                onClick={setGender}
                value={'female'}
                icon={<MaleGenderIcon color={gender === 'female' ? colors.whiteText : colors.darkText} />}
                gender={t('REGISTER.GENDER.FEMALE')} />
        </>

    );
}


export default RegisterGender
