import React from 'react'
import FlexBox from './flex_box'

const RadioWrapper = ({ children, title, style }) => {
    return (
        <FlexBox style={style} alignItems='flex-start' gap='8px 0' flexDirection='column' width={'100%'} >
            <h3 className='radio-group-title'>{title}</h3>
            <div className='user-home-radio-group'>
                {children}
            </div>
        </FlexBox>
    )
}

export default RadioWrapper
