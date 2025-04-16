import { useTranslation } from "react-i18next";
import { colors } from "../../../utils/theme";


const HobbieCheckBox = ({ interest, isActive = false, onClick, checkboxStyle, isSelectable = true }) => {

    const { t, i18n } = useTranslation();

    return <div
        onClick={onClick}
        className='hobbie-check-box'
        style={{
            ...checkboxStyle,
            cursor: isSelectable ? 'pointer' : 'default',
            backgroundColor: isActive ? colors.brand1 : colors.backGround3,
            border: !isActive ? `1px solid ${colors.borderColor1}` : '1px solid transparent',
            color: isActive ? colors.whiteText : colors.darkText
        }}>
        <span>{interest.emoji}</span><span>{t(`REGISTER.INTERESTS.INTEREST_ITEMS.${interest.name}`)}</span>
    </div>
}


export default HobbieCheckBox
