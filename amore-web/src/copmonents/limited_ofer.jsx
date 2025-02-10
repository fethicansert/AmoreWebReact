import React from 'react'
import { CloseIcon } from '../assets/svg/svg_package'
import { colors } from '../utils/theme'

const LimitedOfer = () => {
    return (
        <div className='limited-ofer'>
            <CloseIcon color={colors.negativeBlack} strokeColor={colors.backGround3} onClick={() => setShowLoginPopup(false)} className='limited-ofer-close-icon' />

            <h3>Sınırlı Teklif</h3>

            <p>Jeton paketini seçerek bonus kazanın ve yeni bölümlerin kilidini açın</p>

        </div>
    )
}

export default LimitedOfer
