import React from 'react'
import FlexBox from '../../../copmonents/flex_box';
import PinkShimmer from '../../../copmonents/pink_shimmer';

const NotificationShimmer = ({ marginBlock = '33.5px', width = '100%', showIcon = true }) => {
    return (
        <div style={{ width: width, display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '0 14px', alignItems: 'center', justifyContent: 'center', marginBlock: marginBlock }}>

            <PinkShimmer height={62} width={62} rounded={'50%'} />

            <FlexBox flexDirection='column' width={'100%'} gap='10px 0' alignItems='flex-start'>
                <PinkShimmer height={14} width={'60%'} rounded={'2px'} />
                <PinkShimmer height={13} width={'70%'} rounded={'2px'} />
            </FlexBox>

            {showIcon && <PinkShimmer height={14} width={30} rounded={'1px'} />}
        </div>
    )
};



export default NotificationShimmer
