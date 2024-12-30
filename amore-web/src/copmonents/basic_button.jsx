import React from 'react'

const BasicButton = ({ children, fontSize, backgroundColor, color, borderRadius, width, height, gap, onClick }) => {

    return (
        <button
            onClick={onClick}
            className='basic-button'
            style={{ width, height, backgroundColor, color, borderRadius, gap: gap, fontSize }}>
            {children}
        </button>
    )
}

export default BasicButton
