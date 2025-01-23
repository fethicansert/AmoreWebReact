import React from 'react'
import FlexBox from './flex_box'
import BasicButton from './basic_button'
import { colors } from '../utils/theme'

const Logout = ({ closeLogout }) => {
    return (
        <div className='logout'>
            <div className='logout-container'>
                <h3>Çıkış Yap</h3>

                <p>
                    Çıkış yapmak istersen hesabın tarayıcıda kapatılacak, çıkış yapmak istediğinden emin misin?
                </p>

                <FlexBox gap='0 10px' margin={'1rem 0 0 0'}>
                    <BasicButton borderRadius={10} width={'50%'} height={'45px'} backgroundColor={colors.darkButton} >
                        Çıkış Yap
                    </BasicButton>

                    <BasicButton onClick={closeLogout} borderRadius={10} width={'50%'} height={'45px'} backgroundColor={colors.brand1}>
                        Kapat
                    </BasicButton>

                </FlexBox>

            </div>

        </div>
    )
}

export default Logout
