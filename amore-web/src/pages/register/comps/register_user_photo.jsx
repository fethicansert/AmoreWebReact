import { colors } from "../../../utils/theme";
import { CloseIcon, ImageAddIcon } from '../../../assets/svg/svg_package'


const RegisterUserPhoto = ({ img, index, handleImageChange, handleDeleteImage }) => {

    return (

        <div className='register-user-photo'
            style={{ backgroundColor: img ? colors.backGround3 : colors.backGround2 }}>
            {img && <CloseIcon width='20' height='20' strokeWidth='2' className='register-user-photo-close-icon' strokeColor={colors.whiteText} color={colors.negative} onClick={() => handleDeleteImage(index)} />}
            {img ? <img src={img} /> : <ImageAddIcon />}
            {!img && <input
                className='input-file'
                type='file'
                onChange={(e) => handleImageChange(e, index)}
                accept="image/*" />}

        </div>

    );
}

export default RegisterUserPhoto;