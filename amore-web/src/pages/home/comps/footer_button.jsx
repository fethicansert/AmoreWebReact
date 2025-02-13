import React from 'react'

const FooterButton = ({ children, icon, iconWidth, textSmall, textBig, style }) => {
    return (
        <button style={{ ...style }} className='blur-button'>
            <img style={{ width: iconWidth }} src={icon} />
            <p><span>{textSmall}</span><br />{textBig}</p>
            {children}
        </button>
    );
}

export default FooterButton;
