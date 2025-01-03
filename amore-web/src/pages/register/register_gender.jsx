import React from 'react'
import colors from '../../theme/colors'
import { MaleGenderIcon } from '../../assets/svg/svg_package'

const RegisterGender = () => {
    return (
        <GenderRadio icon={<MaleGenderIcon />} />
    )
}

const GenderRadio = ({ isActive, icon, gender, value }) => {
    return <div className='gender-container' style={{ backgroundColor: isActive ? 'transparent' : colors.brand1 }}>
        {icon}
        <span>{gender}</span>
    </div>
}

export default RegisterGender
