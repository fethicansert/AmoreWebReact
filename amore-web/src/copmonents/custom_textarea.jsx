import React, { useRef, useState } from 'react'
import { colors } from '../utils/theme';

const CustomTextArea = ({ icon, value, onChange, placeholder = 'Placeholder Text', title, containerStyle }) => {

    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);
    const textareaRef = useRef();
    const hideIcon = textareaRef.current ? textareaRef.current.scrollHeight > textareaRef.current.clientHeight : false;
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: title ? '10px 0' : '0', ...containerStyle }}>
            <h3 style={{ fontSize: ".9rem", fontWeight: "600", marginLeft: '.5rem' }}>{title}</h3>
            <div onClick={handleFocus}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ height: '140px', border: `1px solid ${(focus || hover) ? colors.brand1 : colors.borderColor1}`, display: 'flex', flexDirection: 'column', padding: '.6rem', borderRadius: '12px', position: 'relative' }}>
                {<div style={{ position: 'absolute', display: 'flex', gap: '0 5px', alignItems: 'center', color: colors.fadedText, fontSize: '.85rem' }}>
                    {!hideIcon && icon}
                    {!value && (value || placeholder)}
                </div>}
                <textarea onBlur={() => setFocus(false)} rows={4} value={value} ref={textareaRef} onChange={(e) => onChange(e.target.value)} className="custom-textarea" style={{ width: '100%', resize: 'none', flex: '1', textIndent: '25px', lineHeight: '18px', fontSize: '.85rem' }} />
            </div>
        </div>
    )
h
    function handleFocus() {
        textareaRef.current.focus()
        setFocus(true);
    }
}

export default CustomTextArea
