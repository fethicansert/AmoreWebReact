import React, { useState } from 'react'
import { colors } from '../utils/theme';

const CustomRadioBox = ({ width, height, isSelected, leading, text, value, style, textStyle, className, selectRadius, selectColor, onClick, hoverColor }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
            className={className}
            style={{
                ...style,
                width,
                height,
                display: 'grid',
                gap: '0 8px',
                gridTemplateColumns: leading ? 'auto 1fr auto' : '1fr auto',
                alignItems: "center",
                border: `1px solid ${hover ? colors.brand1 : colors.borderColor1}`,
                borderRadius: '16px',
                padding: '0 .75rem',
                cursor: 'pointer'
            }}>
            {leading && leading}
            <span style={{ ...textStyle, fontSize: '.9rem' }}>{text && text}</span>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `1px solid ${colors.borderColor1}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isSelected && <div style={{ width: selectRadius, height: selectRadius, borderRadius: '50%', background: selectColor, animation: 'fade 100ms ease' }}>
                </div>}
            </div>
        </div>
    )
}

export default CustomRadioBox
