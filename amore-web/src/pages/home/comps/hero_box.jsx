import React from 'react';
import gropUsers from '../../../assets/images/group_users.png';

const HeroBox = ({ children, width, height, backgroundColor, showPhotos, rotate, xPosition, justifyContent = 'center', alignItems = 'center' }) => {
    return (
        <div className='hero-box' style={{ width, height, backgroundColor, rotate, left: xPosition, justifyContent, alignItems }}>
            {children}
            {
                showPhotos && <img src={gropUsers} />
            }
        </div>
    );
}

export default HeroBox
