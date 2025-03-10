import React from 'react'

const NotificationLayout = ({ image, title, content, icon, time, className, onClick, blurImage, hideTime = false }) => {



    return (
        <div onClick={onClick} className={`notification-layout ${className || ''}`}>
            <div className='notification-layout-image-avatar'>
                <img style={{ filter: `blur(${blurImage ? '6.5px' : '0'})` }} loading='lazy' src={image}></img>
            </div>
            <div className='notification-layout-content'>
                {<span className='notification-layout-title'>{title}</span>}
                {<span className='notification-layout-text'>{content}</span>}
            </div>

            <div className='notification-icon-time-flex' style={{ gap: !hideTime ? '10px 0' : '0' }}>
                {icon && icon}
                {(time && !hideTime) && <span className='notification-time'> {time}</span>}
            </div>

        </div>
    )
}

export default NotificationLayout
