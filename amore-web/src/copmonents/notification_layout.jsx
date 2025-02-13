import React from 'react'
import FlexBox from './flex_box'

const NotificationLayout = ({ image, title, content, icon, className, onClick, blurImage }) => {



    return (
        <div onClick={onClick} className={`notification-layout ${className || ''}`}>
            <div className='notification-layout-image-avatar'>
                <img src={image}></img>
            </div>
            <FlexBox gap='8px 0' flexDirection='column' alignItems='flex-start'>
                {<span className='notification-layout-title'>{title}</span>}
                {<span className='notification-layout-text'>{content}</span>}
            </FlexBox>
            {icon && icon}
        </div>
    )
}

export default NotificationLayout
