import React from 'react'
import FixedOverflow from '../../../copmonents/fixed_overflow'
import FlexBox from '../../../copmonents/flex_box'
import BasicButton from '../../../copmonents/basic_button'
import { colors } from '../../../utils/theme'
import { ClipLoader } from 'react-spinners'


const UserBlockPopup = ({ user, onYes, onClose, loading, overflowColor, isBlock = false }) => {

    return (
        <FixedOverflow color={overflowColor || 'rgba(0, 0, 0, 0.13)'}>
            <div className='unblock-popup' >
                {!loading
                    ? <>
                        <img width={'60px'} height={'60px'} src={user?.photos?.[0]?.url} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                        <p>
                            {user?.name} {isBlock ? ' kullanıcısını engellemek istediğine emin misin ?' : 'kullanıcısın engelini kaldırmak istediğine emin misin ?'}
                        </p>

                        <FlexBox width={'100%'} gap='0 12px'>
                            <BasicButton onClick={onYes} style={{ flex: "1" }} height={'45px'} borderRadius={'10px'} backgroundColor={colors.darkText} >
                                Evet
                            </BasicButton>

                            <BasicButton onClick={onClose} style={{ flex: "1" }} height={'45px'} borderRadius={'10px'} backgroundColor={colors.brand1} >
                                Kapat
                            </BasicButton>
                        </FlexBox></>

                    : <>
                        <ClipLoader color={colors.brand1} />
                        <p>{user?.name} {isBlock ? ' kullanıcısı engelleniyor...' : 'kullanıcısının engeli kaldırılıyor...'} </p>
                    </>}
            </div>
        </FixedOverflow>

    )
}

export default UserBlockPopup
