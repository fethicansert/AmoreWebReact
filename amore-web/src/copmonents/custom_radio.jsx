import { colors } from '../utils/theme';
import React from 'react'

const CustomRadio = ({ isSelected, text, value, setValue, fontSize = '.75rem', padding = '.8rem .9rem', unSelectedTextColor = '#747477' }) => {
    const style = {
        color: isSelected ? colors.whiteText : unSelectedTextColor,
        backgroundColor: isSelected ? colors.brand1 : colors.inputColor,
        border: isSelected ? '1px solid transparent' : `1px solid ${colors.borderColor1}`,
        padding,
        fontSize,
        borderRadius: '12px',
        cursor: 'pointer'
    };

    return (
        <div style={style} onClick={() => setValue(value)}>
            {text}
        </div>
    )
}

export default CustomRadio;
