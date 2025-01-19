import React, { useState } from 'react'
import { ImageAddIcon } from '../../../assets/svg/svg_package'
import { v4 as uuidv4 } from 'uuid';
import RegisterUserPhoto from '../comps/register_user_photo';
import { useTranslation } from 'react-i18next';

const RegisterUserPhotos = ({ handleImageChange, userImages, setPreviewImageIndex }) => {

    const { t, i18n } = useTranslation();

    return (
        <div className='register-user-photos'>
            <div className='register-user-photo-avatar' onClick={() => userImages[0] ? setPreviewImageIndex(0) : null}>
                {
                    userImages[0] ? <img
                        draggable={false}
                        alt="not found"
                        width={"250px"}
                        src={userImages[0]}
                    /> : <ImageAddIcon />
                }

                {!userImages[0] && <input
                    className='input-file'
                    style={{ borderRadius: '50%' }}
                    type='file'
                    onChange={(e) => handleImageChange(e, 0)}
                    accept="image/*" />}

            </div>

            <h3>{t('register.photo.subTitle')}</h3>

            <div className='register-photo-group'>
                {[...Array(6)].map((img, index) =>
                    <RegisterUserPhoto
                        key={uuidv4()}
                        img={userImages[index + 1]}
                        index={index + 1}
                        handleImageChange={handleImageChange}
                        setPreviewImageIndex={setPreviewImageIndex}
                    />)}
            </div>

        </div>
    )
}

export default RegisterUserPhotos


