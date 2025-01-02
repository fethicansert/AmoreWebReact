import React from 'react'
import { UserIcon } from '../../assets/svg/svg_package'

const RegisterName = () => {
    return (
        <div className='register-name'>
            <h3>İsmin ne ?</h3>
            <div className='register-name-input-wrapper'>
                <UserIcon width={21} height={22} />
                <input className='register-name-input' type='text' placeholder='İsim Yazın' />

            </div>
            <p className='register-name-text'>
                Takma adın gerçekten harika olabilir, ancak seni doğru şekilde tanımlayabilmemiz için gerçek adına ihtiyacımız var.
            </p>
        </div>
    )
}

export default RegisterName
