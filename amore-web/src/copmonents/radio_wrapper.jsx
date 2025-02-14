import React from 'react'
import FlexBox from './flex_box'

const RadioWrapper = ({ children, title }) => {
    return (
        <FlexBox alignItems='flex-start' gap='8px 0' flexDirection='column' width={'100%'} margin={'1rem 0 0 0'}>
            <h3 className='radio-group-title'>{title}</h3>
            <div className='user-home-radio-group'>
                {children}
            </div>
        </FlexBox>
    )
}

export default RadioWrapper
