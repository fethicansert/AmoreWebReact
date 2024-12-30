import React from 'react'

const PaddingContainer = ({ children, className, top = '0px', right = '0px', bottom = '0px', left = '0px', height = 'fit-content' }) => {
    return (
        <div className={`padding-container ${className ? className : ''}`} style={{ padding: `${top} ${right} ${bottom} ${left}`, height }}>
            {children}
        </div>
    )
}

export default PaddingContainer
