import { useTranslation } from 'react-i18next';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { colors } from '../../../utils/theme';
import { IoIosClose } from "react-icons/io";

const RegisterBirthDate = ({ selectedDate, setSelectedDate, showDatePicker, setShowDatePicker }) => {

  const date = selectedDate ? new Date(selectedDate) : null;

  const dateObj = date ? {
    day: String(date.getDate()).padStart(2, '0'),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    year: date.getFullYear()
  } : null;

  const { t, i18n } = useTranslation();

  const handleShowDate = () => {
    setShowDatePicker(true);
  }

  return (
    <div className='register-birth-date' onClick={handleShowDate}>


      <div className='date-box'>
        <span className='date-box-placeholder' style={{ color: `${selectedDate !== undefined ? colors.darkText : colors.fadedText}`, fontWeight: '600' }}>
          {selectedDate !== undefined ? dateObj.day : t('register.birthDate.dayPlaceholder')}
        </span>
      </div>

      <div className='date-box'>
        <span className='date-box-placeholder' style={{ color: `${selectedDate !== undefined ? colors.darkText : colors.fadedText}`, fontWeight: '600' }}>
          {selectedDate !== undefined ? dateObj.month : t('register.birthDate.monthPlaceholder')}
        </span>
      </div>


      <div className='date-box'>
        <span className='date-box-placeholder' style={{ color: `${selectedDate !== undefined ? colors.darkText : colors.fadedText}`, fontWeight: '600' }}>
          {selectedDate !== undefined ? dateObj.year : t('register.birthDate.yearPlaceholder')}
        </span>
      </div>

      <div className={`register-date-wrapper ${showDatePicker ? 'active' : null}`}>

        <IoIosClose className='date-close-button' size={24} style={{ cursor: 'pointer' }} onClick={() => setShowDatePicker(false)} />

        <DayPicker
          defaultMonth={new Date(1999, 0)}
          onDayClick={(day, m) => setShowDatePicker(false)}
          required
          role='application'
          selected={selectedDate}
          hideNavigation={true}
          onSelect={setSelectedDate}
          captionLayout='dropdown'
          id='register-date'
          mode='single'
        />

      </div>

    </div>
  )
}

export default RegisterBirthDate
