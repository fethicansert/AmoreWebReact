import React from 'react'

const FlexBox = ({ children, className = '', alignItems = 'center', flexDirection = 'row', justifyContent, gap, width, margin }) => {
    return (
        <div className={className} style={{ display: 'flex', flexDirection, alignItems: alignItems, justifyContent: justifyContent, gap: gap, width: width, margin, }}>
            {children}
        </div>
    )
}

export default FlexBox
