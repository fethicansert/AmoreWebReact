import { useTranslation } from "react-i18next";
import { colors } from "../../../utils/theme";


const HobbieCheckBox = ({ interest, isActive = false, addHobbie }) => {

    const { t, i18n } = useTranslation();

    const handleClick = () =>
        !isActive ? addHobbie(prev => [...prev, interest._id])
            : addHobbie(prev => prev.filter((hobbie) => hobbie !== interest._id));

    return <div
        onClick={handleClick}
        className='hobbie-check-box'
        style={{
            backgroundColor: isActive ? colors.brand1 : colors.backGround3,
            border: !isActive ? `1px solid ${colors.borderColor1}` : '1px solid transparent',
            color: isActive ? colors.whiteText : colors.darkText
        }}>
        <span>{interest.emoji}</span><span>{t(`REGISTER.INTERESTS.INTEREST_ITEMS.${interest.name}`)}</span>
    </div>
}


export default HobbieCheckBox
