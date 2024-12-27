import React from 'react'

const FlexBox = ({ children, alignItems = 'center', justifyContent, gap }) => {
    return (
        <div style={{ display: 'flex', alignItems: alignItems, justifyContent: justifyContent, gap: gap }}>
            {children}
        </div>
    )
}

export default FlexBox
