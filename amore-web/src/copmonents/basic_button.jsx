import React from 'react'

const BasicButton = ({
    className = '',
    style,
    children,
    fontSize,
    backgroundColor,
    color = '#FFFFFF',
    borderRadius,
    width,
    height,
    gap,
    onClick,
    type = 'button',
    margin = '' }) => {

    return (
        <button
            type={type}
            onClick={onClick}
            className={`basic-button ${className} `}
            style={{ width, height, backgroundColor, color, borderRadius, gap: gap, fontSize, margin, ...style }}>
            {children}
        </button>
    )
}

export default BasicButton
