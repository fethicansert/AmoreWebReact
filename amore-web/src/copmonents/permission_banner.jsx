import React from 'react'
import { CrossCloseIcon } from '../assets/svg/svg_package'
import { colors } from '../utils/theme'

const PermissionBanner = ({ icon, text, onClik, onCrossCloseClick, showPermissionBanner, style }) => {
    return (
        <div style={style} className={`permission-banner ${showPermissionBanner ? 'active' : ''}`} onClick={(e) => onClik(e)}>
            {icon}
            <p>{text}</p>
            <CrossCloseIcon color={colors.whiteText} onClick={onCrossCloseClick} />
        </div>
    )
}

export default PermissionBanner
