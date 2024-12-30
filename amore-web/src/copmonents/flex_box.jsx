import React from 'react'

const FlexBox = ({ children, alignItems = 'center', flexDirection = 'row', justifyContent, gap, width, margin }) => {
    return (
        <div style={{ display: 'flex', flexDirection, alignItems: alignItems, justifyContent: justifyContent, gap: gap, width: width, margin, }}>
            {children}
        </div>
    )
}

export default FlexBox
