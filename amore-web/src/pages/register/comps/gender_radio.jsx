import { colors } from "../../../theme/theme";

const GenderRadio = ({ isActive, icon, gender, value, onClick, backgroundColor, color, border }) => {
    return <div onClick={() => onClick(value)} className='register-input-wrapper register-gender-radio' style={{ backgroundColor, color, cursor: 'pointer', border: border ? `1px solid ${colors.borderColor1}` : null }}>
        {icon}
        <span>{gender}</span>
    </div>
}


export default GenderRadio;