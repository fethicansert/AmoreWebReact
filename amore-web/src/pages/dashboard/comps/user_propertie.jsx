import React from 'react'

const UserPropertie = ({ icon, propertie, text }) => {
    return (
        <div className='user-propertie'>
            {icon}
            <span>{propertie}</span>
            <span>{text}</span>

        </div>
    )
}

export default UserPropertie
