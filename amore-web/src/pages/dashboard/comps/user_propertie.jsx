import React from 'react'

const UserPropertie = ({ icon, value }) => {
    return (
        <div className='user-propertie'>
            {icon}
            <span>{value}</span>
        </div>
    )
}

export default UserPropertie
