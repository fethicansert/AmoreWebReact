import React, { useState } from 'react'
import { ImageAddIcon } from '../../../assets/svg/svg_package'
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../../theme/theme';
import { IoRemoveCircle } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";

import { HiEye } from "react-icons/hi2";
import { RiExchangeBoxLine } from "react-icons/ri";


const RegisterUserPhotos = ({ handleImageChange, userImages, setShowPreviewImage }) => {

    const [showOptions, setShowOptions] = useState(false);


    const handleshowOptions = (e) => {
        e.preventDefault();
        setShowOptions(!showOptions)
    }

    return (
        <div className='register-user-photos'>
            <div className='register-user-photo-avatar'>

                {
                    (userImages[0] && showOptions) &&
                    <div className='register-user-photos-options'>
                        <RiExchangeBoxLine size={18} className='user-image-change-icon' color={colors.backGround4} />
                        <HiEye size={18} className='user-image-show-icon' color={colors.backGround4} onClick={() => setShowPreviewImage(prev => !prev)} />
                        <TiDelete size={21} className='user-image-remove-icon' color={colors.backGround4} />
                    </div>
                }

                {
                    userImages[0] ? <img
                        alt="not found"
                        width={"250px"}
                        src={userImages[0]}
                    /> : <ImageAddIcon />
                }

                <input
                    className='input-file'
                    type='file'
                    onChange={(e) => handleImageChange(e, 0)}
                    onClick={(e) => userImages[0] !== undefined ? handleshowOptions(e) : null} />

            </div>

            <h3>Profil Fotoğrafı</h3>

            <div className='register-photo-group'>
                {[...Array(6)].map((img, index) =>
                    <RegisterUserPhoto
                        key={uuidv4()}
                        img={userImages[index + 1]}
                        index={index + 1}
                        handleImageChange={handleImageChange}
                    />)}
            </div>




        </div>
    )
}

export default RegisterUserPhotos



const RegisterUserPhoto = ({ img, index, handleImageChange }) => {
    return <div className='register-user-photo' style={{ backgroundColor: img ? colors.backGround3 : colors.backGround2 }}>
        {img ? <img src={img} /> : <ImageAddIcon />}
        <input className='input-file' type='file' onClick={(e) => e.preventDefault()
        } onChange={(e) => handleImageChange(e, index)} />
    </div>
}
