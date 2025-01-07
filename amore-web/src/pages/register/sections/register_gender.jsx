import React from 'react'
import { colors } from '../../../theme/theme'
import { MaleGenderIcon } from '../../../assets/svg/svg_package';
import { FemaleGenderIcon } from '../../../assets/svg/svg_package';
import GenderRadio from '../comps/gender_radio';
const RegisterGender = ({ gender, setGender }) => {
    return (
        <>
            <GenderRadio
                border={gender !== 'male'}
                backgroundColor={gender === 'male' ? colors.brand1 : colors.backGround3}
                color={gender === 'male' ? colors.whiteText : colors.darkText}
                onClick={setGender}
                value={'male'}
                icon={<FemaleGenderIcon color={gender === 'male' ? colors.whiteText : colors.darkText} />}
                gender={"Erkek"} />
            <GenderRadio
                border={gender !== 'female'}
                color={gender === 'female' ? colors.whiteText : colors.darkText}
                backgroundColor={gender === 'female' ? colors.brand1 : colors.backGround3}
                onClick={setGender}
                value={'female'}
                icon={<MaleGenderIcon color={gender === 'female' ? colors.whiteText : colors.darkText} />}
                gender={"Kadin"} />
        </>

    );
}


export default RegisterGender
