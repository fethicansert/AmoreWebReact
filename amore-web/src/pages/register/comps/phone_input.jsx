import React from 'react'

const OtpIpnut = ({ value, setValue, digit }) => {

    return (
        <div className='verify-input-container' >
            <input
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
