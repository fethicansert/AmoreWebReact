import { colors } from "../../../theme/theme";


const HobbieCheckBox = ({ icon, text, value, isActive = false, addHobbie }) => {

    const handleClick = () =>
        !isActive ? addHobbie(prev => [...prev, value])
            : addHobbie(prev => prev.filter((hobbie) => hobbie !== value));

    return <div
        onClick={handleClick}
        className='hobbie-check-box'
        style={{
            backgroundColor: isActive ? colors.brand1 : colors.backGround3,
            border: !isActive ? `1px solid ${colors.borderColor1}` : '1px solid transparent',
            color: isActive ? colors.whiteText : colors.darkText
        }}>
        <span>{icon}</span><span>{text}</span>
    </div>
}


export default HobbieCheckBox
