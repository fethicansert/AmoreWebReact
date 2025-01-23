import React, { useState } from 'react'
import { CloseIcon, ImageAddIcon } from '../../../assets/svg/svg_package'
import { v4 as uuidv4 } from 'uuid';
import RegisterUserPhoto from '../comps/register_user_photo';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../utils/theme';

const RegisterUserPhotos = ({ handleImageChange, userImages, handleDeleteImage }) => {

    const { t, i18n } = useTranslation();

    return (
        <div className='register-user-photos'>
            <div className='register-user-photo-avatar'>
                {userImages[0] && <CloseIcon width='23' height='23' strokeWidth='2' className='photo-close-icon' strokeColor={colors.whiteText} color={colors.negative} onClick={() => handleDeleteImage(0)} />}

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
                        handleDeleteImage={handleDeleteImage}
                    />)}
            </div>

        </div>
    )
}

export default RegisterUserPhotos


