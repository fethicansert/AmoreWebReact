import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { scrollPage } from '../../../utils/functions';

const OtpIpnut = ({ value, setValue, digit, isFocused, autoFocus = false }) => {

    const inputRef = useRef();

    if (isFocused)
        inputRef?.current?.focus();

    return (
        <div className='verify-input-container' >
            <input
                autoFocus={autoFocus}
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
