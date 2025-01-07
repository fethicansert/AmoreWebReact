import React from 'react'

const AvatarContainer = ({ image, name }) => {
    return (
        <div className='avatar'>
            <div className='avatar-image'>
                <img src={image}></img>
            </div>

            <span>{name}</span>
        </div>
    )
}

export default AvatarContainer
