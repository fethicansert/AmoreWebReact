import React, { useState } from 'react'
import { DeleteAccountIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme'

const UserDeleteButton = () => {
    const [hover, setHover] = useState(false);
    return (
        <div className='user-delete-button'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            width={'50%'}
            height={'53px'}
            style={{
                width: '50%',
                height: '53px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0 8px',
                border: `1px solid ${colors.negative}`,
                borderRadius: '16px',
                margin: '3rem auto 0 auto',
                cursor: 'pointer'
            }} >
            <DeleteAccountIcon color={colors.negative} />
            <span style={{ fontSize: '.95rem' }}>Hesap Sil</span>
        </div>
    )
}

export default UserDeleteButton
