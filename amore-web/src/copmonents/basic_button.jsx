import React from 'react'

const BasicButton = ({ children, backgroundColor, color, borderRadius, width, height }) => {

    return (
        <button className='basic-button' style={{ width, height, backgroundColor, color, borderRadius }}>
            {children}
        </button>
    )
}

export default BasicButton
