import React, { useState } from 'react'
import { colors } from '../../../utils/theme';

function UserSettingsButton({ width, height, leading, trealing, text, onClick, className, style, textStyle }) {
    const [hover, setHover] = useState(false);

    return <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
        className={className}
        style={{
            width,
            height,
            display: 'grid',
            gap: '0 8px',
            gridTemplateColumns: !leading ? 'auto 1fr' : 'auto 1fr auto',
            alignItems: "center",
            border: `1px solid ${hover ? colors.brand1 : colors.borderColor1}`,
            borderRadius: '16px',
            padding: '0 .75rem',
            cursor: 'pointer',
            ...style,
        }}>
        {leading && leading}
        <span style={{ fontSize: '.9rem', ...textStyle }}>{text && text}</span>
        {trealing && trealing}
    </div>
}

export default UserSettingsButton


