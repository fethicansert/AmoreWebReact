import React from 'react'

const SwipeImageWrapper = ({ image }) => {
    return (
        <div className='swipe-container-image-wrapper' style={{ marginBlock: '1rem' }}>
            <img loading='lazy' src={image} />
        </div>
    );
}

export default SwipeImageWrapper
