import React from 'react'

const FlexBox = ({ children, className = '', alignItems = 'center', flexDirection = 'row', justifyContent = 'unset', gap = 'unset', width, margin, flex }) => {
    return (
        <div
            className={className}
            style={{
                flex,
                display: 'flex',
                flexDirection,
                alignItems: alignItems,
                justifyContent: justifyContent,
                gap: gap,
                width: width,
                margin,
            }}>
            {children}
        </div>
    )
}

export default FlexBox
