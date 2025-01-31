import React from 'react'
import { ShimmerDiv } from 'shimmer-effects-react'
import FlexBox from '../../../copmonents/flex_box'

const NotificationShimmer = ({ }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '0 14px', alignItems: 'center', justifyContent: 'center', margin: '2rem 0' }}>

            <ShimmerDiv mode="custom" height={62} width={62} rounded={50} from="#DBE2EB" via="rgba(221, 136, 207,.7)" to="#DBE2EB" />

            <FlexBox flexDirection='column' width={'100%'} gap='10px 0' alignItems='flex-start'>
                <ShimmerDiv mode="custom" height={14} width={'60%'} from="#DBE2EB" via="rgba(221, 136, 207,.7)" to="#DBE2EB" rounded={.1} />
                <ShimmerDiv mode="custom" height={13} width={'70%'} from="#DBE2EB" via="rgba(221, 136, 207,.7)" to="#DBE2EB" rounded={.1} />
            </FlexBox>

            <ShimmerDiv mode="custom" height={14} width={30} rounded={.1} from="#DBE2EB" via="rgba(221, 136, 207,.7)" to="#DBE2EB" />

        </div>
    )
}

export default NotificationShimmer
