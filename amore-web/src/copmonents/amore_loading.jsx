import React from 'react'
import Lottie from "lottie-react";
import amoreAnimation from '../assets/lottie/amore-loading.json'

const AmoreLoading = ({ containerWidth, containerHeight, amoreWidth, amoreMaxWidth, style, className = '' }) => {

    return (
        <div
            className={className}
            style={{
                ...style,
                width: containerWidth,
                height: containerHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Lottie animationData={amoreAnimation} style={{ width: amoreWidth, maxWidth: amoreMaxWidth }} />
        </div>
    )
}

export default AmoreLoading
