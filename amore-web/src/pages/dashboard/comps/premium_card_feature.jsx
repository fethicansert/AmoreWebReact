import { TickIcon } from "../../../assets/svg/svg_package"
import FlexBox from "../../../copmonents/flex_box";


function PremiumCardFeature({ feature }) {
    return <FlexBox className='premium-subscription-card-plan-feature'>
        <TickIcon color='#18181CDD' />
        {feature}
    </FlexBox>
}


export default PremiumCardFeature;