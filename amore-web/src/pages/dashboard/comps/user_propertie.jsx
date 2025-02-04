import React from 'react'

const UserPropertie = ({ icon, value, text }) => {
    return (
        <div className='user-propertie'>
            {icon}
            <span>{value}</span>
            <span>{text}</span>

        </div>
    )
}

export default UserPropertie
