import React from 'react'

const FlexBox = ({
    style,
    children,
    className = '',
    alignItems = 'center',
    flexDirection = 'row',
    justifyContent = '',
    gap = '',
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
                flex: flex,
                display: 'flex',
                flexDirection,
                alignItems: alignItems,
                justifyContent: justifyContent,
                gap: gap,
                width: width,
                height,
                margin,
                ...style,
            }}>
            {children}
        </div>


    )
}

export default FlexBox
