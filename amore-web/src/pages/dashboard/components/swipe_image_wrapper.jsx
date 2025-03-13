import React from 'react'

const SwipeImageWrapper = ({ children, image, onClick = null, style }) => {
    return (
        <div className='swipe-container-image-wrapper' onClick={onClick} style={style}>
            {!children ? <img loading='lazy' src={image} /> : children}
        </div>
    )
}

export default SwipeImageWrapper
