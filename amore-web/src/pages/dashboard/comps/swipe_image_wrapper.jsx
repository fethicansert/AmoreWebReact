import React from 'react'
import AmoreLoading from '../../../copmonents/amore_loading'
import { colors } from '../../../utils/theme'

const SwipeImageWrapper = ({ image }) => {
    return (
        <div className='swipe-container-image-wrapper' style={{ marginBlock: '1rem' }}>
            <img src={image} />
        </div>
    );
}

export default SwipeImageWrapper
