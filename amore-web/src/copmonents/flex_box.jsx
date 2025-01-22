import React from 'react'

const FlexBox = ({
    style,
    children,
    className = '',
    alignItems = 'center',
    flexDirection = 'row',
    justifyContent = 'unset',
    gap = 'unset',
    width,
    height,
    margin,
    flex,
    onClick = null }) => {
    return (
        <div
            onClick={onClick}
            className={className}
            style={{
                ...style,
                flex,
                display: 'flex',
                flexDirection,
                alignItems: alignItems,
                justifyContent: justifyContent,
                gap: gap,
                width: width,
                height,
                margin,
            }}>
            {children}
        </div>
    )
}

export default FlexBox
