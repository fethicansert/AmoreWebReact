import React, { useRef } from 'react'
import { scrollPage } from '../../../utils/functions';

const OtpIpnut = ({ value, setValue, digit, isFocused }) => {

    const inputRef = useRef();

    if (isFocused)
        inputRef.current.focus();

    return (
        <div className='verify-input-container' >
            <input
                onBlur={() => scrollPage({ top: 0 })}
                ref={inputRef}
                type='number'
                value={value}
                onChange={(e) => setValue(prev => {
                    if (e.target.value.length < 2) return { ...prev, [digit]: e.target.value };
                    return prev;
                })}
            />
        </div>
    );
}

export default OtpIpnut;
