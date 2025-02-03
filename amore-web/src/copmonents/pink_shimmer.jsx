import React from 'react'
import { ShimmerDiv } from 'shimmer-effects-react'

const PinkShimmer = ({ width = '100%', height = '20px', rounded = 1 }) => {
    return <ShimmerDiv
        mode="custom"
        height={height}
        width={width}
        rounded={rounded}
        from="#F0F3F7"
        via="rgba(221, 136, 207,.7)" to="#F0F3F7"
    />
}

export default PinkShimmer
