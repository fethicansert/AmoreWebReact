import React from 'react'
import ShimmerDiv from './shimmer_div';

const PinkShimmer = ({ width = '100%', height = '20px', rounded = 1 }) => {
    return <ShimmerDiv height={height} width={width} rounded={rounded} />
}

export default PinkShimmer
