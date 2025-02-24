import Lottie from 'lottie-react'
import React from 'react'

const SwipeErrorContainer = ({ errorText, subErrorText, animation, width }) => {
    return (
        <>
            <div className='user-home-swipe-error-container'>
                <p>{errorText}</p>
                <p>{subErrorText}</p>
            </div>
            <Lottie animationData={animation} style={{ width: width, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', marginTop: '45px' }} />
        </>
    )
}

export default SwipeErrorContainer