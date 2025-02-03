import React from 'react'
import FlexBox from '../../../copmonents/flex_box'
import PinkShimmer from '../../../copmonents/pink_shimmer';

const NotificationShimmer = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '0 14px', alignItems: 'center', justifyContent: 'center', margin: '2rem 0' }}>
            <PinkShimmer height={62} width={62} rounded={50} />
            <FlexBox flexDirection='column' width={'100%'} gap='10px 0' alignItems='flex-start'>
                <PinkShimmer height={14} width={'60%'} rounded={.1} />
                <PinkShimmer height={13} width={'70%'} rounded={.1} />
            </FlexBox>
            <PinkShimmer height={14} width={30} rounded={.1} />
        </div>
    )
};



export default NotificationShimmer
