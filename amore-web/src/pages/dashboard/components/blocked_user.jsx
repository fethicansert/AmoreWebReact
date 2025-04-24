import React from 'react'
import { colors } from '../../../utils/theme'
import { BlockedUserIcon } from '../../../assets/svg/svg_package'
import BasicButton from '../../../copmonents/basic_button'
import { ClipLoader } from 'react-spinners'

const BlockedUser = ({ user, onClick, loading }) => {
    return (
        <div
            style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                position: 'absolute',
                display: 'grid',
                justifyItems: 'center',
                padding: '1rem',
                backgroundColor: colors.backGround3,
                border: `1px solid ${colors.borderColor1}`,
                borderRadius: '12px',
                width: "100",
                maxWidth: '330px',
                textAlign: 'center'
            }}>

            {loading 
                ? <>
                    <ClipLoader color={colors.brand1} />
                    <p style={{fontSize:'.95rem',color:colors.lowFadedText, fontWeight:300,marginTop:'.75rem'}}>{user?.name} kullanıcısının engeli kaldırılıyor... </p>
                </>
                :<>
                    <BlockedUserIcon color={colors.iconColor} width='55px' height='55px' />

                    <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginTop: '.6rem' }}>Engellenen Kullanıcı</h3>

                    <p style={{ fontWeight: 300, color: colors.lowFadedText, fontSize: '.95rem', marginTop: '.2rem' }}>
                        {user?.name} kullanıcısını engellediniz, engeli kaldırarak erişim sağlayabilirsiniz.
                    </p>

                    <BasicButton onClick={onClick} height={'50px'} width={'145px'} backgroundColor={colors.brand1} borderRadius={'12px'} style={{ marginTop: '.7rem' }}>
                        Engeli Kaldır
                    </BasicButton>
                </>     
            }
        
        </div>
    )
}

export default BlockedUser
