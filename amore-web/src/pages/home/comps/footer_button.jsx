import React from 'react'

const FooterButton = ({ onClick, children, icon, iconWidth, textSmall, textBig, style }) => {
    return (
        <button onClick={onClick} style={{ ...style }} className='blur-button'>
            <img style={{ width: iconWidth }} src={icon} />
            <p><span>{textSmall}</span><br />{textBig}</p>
            {children}
        </button>
    );
}

export default FooterButton;
