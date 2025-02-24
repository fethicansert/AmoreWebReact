import { colors } from '../utils/theme';
import React from 'react'

const CustomRadio = ({ className, isSelected, text, onClick, fontSize = '.75rem', padding = '.8rem .9rem', unSelectedTextColor = '#747477' }) => {
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
        <div
            className={className ? className : ''}
            style={style}
            onClick={onClick}>
            {text}
        </div>
    )
}

export default CustomRadio;
