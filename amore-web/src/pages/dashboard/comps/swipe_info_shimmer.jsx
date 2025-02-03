import React from 'react'
import FlexBox from '../../../copmonents/flex_box'
import PinkShimmer from '../../../copmonents/pink_shimmer'
import { v4 as uuidv4 } from 'uuid';

const SwipeInfoShimmer = () => {
    return (
        <FlexBox width={'100%'} flexDirection='column' alignItems='flex-start' gap='10px 0'>

            <PinkShimmer width={'20%'} height={'13px'} rounded={.2} />
            {Array(3).fill(0).map((_, i) => <PinkShimmer key={uuidv4()} width={'85%'} height={'13px'} rounded={.2} />)}

            <FlexBox width={'100%'} alignItems='flex-start' gap='3px 15px'>
                {Array(3).fill(0).map((_, i) => <PinkShimmer key={uuidv4()} width={'28%'} height={'30px'} rounded={.3} />)}
            </FlexBox>

            <FlexBox width={'100%'} alignItems='flex-start' gap='3px 15px'>
                {Array(3).fill(0).map((_, i) => <PinkShimmer key={uuidv4()} width={'28%'} height={'30px'} rounded={.3} />)}
            </FlexBox>

            <FlexBox width={'100%'} alignItems='flex-start' gap='3px 15px'>
                {Array(3).fill(0).map((_, i) => <PinkShimmer key={uuidv4()} width={'28%'} height={'30px'} rounded={.3} />)}
            </FlexBox>

        </FlexBox>
    )
}

export default SwipeInfoShimmer
