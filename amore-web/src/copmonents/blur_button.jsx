import React from 'react'
import { colors } from '../utils/theme'
import FlexBox from './flex_box';


const BlurButton = ({ icon, text, width = '100%', height = 'fit-content', borderRadius = '0', color = '#FFFFFF', backgroundColor = '#000000', fontSize = '.8rem' }) => {

    const localStyle = {
        border: `1px solid ${colors.lowWhiteText}`,
        backdropFilter: 'blur(12px)',
    };

    return (
        <div className='blur-button' style={{ width, height, borderRadius, color, backgroundColor, fontSize, ...localStyle }}>
            <FlexBox width={'100%'} gap='0 4px' justifyContent='center'>
                {icon ? icon : null}
                {text ? text : null}
            </FlexBox>
        </div>
    )
}

export default BlurButton
