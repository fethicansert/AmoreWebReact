import React from 'react'

const PaddingContainer = ({ children, top = 0, right = 0, bottom = 0, left = 0 }) => {
    return (
        <div style={{ padding: `${top} ${right} ${bottom} ${left}` }}>
            {children}
        </div>
    )
}

export default PaddingContainer
