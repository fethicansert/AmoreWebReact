import { colors } from "../../../utils/theme";
import { ImageAddIcon } from '../../../assets/svg/svg_package'


const RegisterUserPhoto = ({ img, index, handleImageChange, setPreviewImageIndex }) => {

    return (

        <div className='register-user-photo'
            onClick={() => img ? setPreviewImageIndex(index) : null}
            style={{ backgroundColor: img ? colors.backGround3 : colors.backGround2 }}>
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