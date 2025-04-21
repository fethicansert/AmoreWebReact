import React from 'react'

const FixedOverflow = ({ children, color = 'rgba(0,0,0,0.2)', blur = 0 }) => {
    return (
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', background: color, backdropFilter: `blur(${blur})` }}>
            {children}
        </div>
    )
}

export default FixedOverflow
