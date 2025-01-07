
import useScroll from '../../../hooks/use_scroll';
const NUMBER_REGEX = /^$|^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;

const RegisterBirthDate = ({ day, setDay, month, setMonth, year, setYear }) => {

  const scroll = useScroll();

  const handleDayValidation = (e) => {
    const value = e.target.value;

    if (value === '' || (NUMBER_REGEX.test(value) && value.length <= 2)) {
      let parsedValue = parseInt(value);

      if (parsedValue > 31) parsedValue = 31;
      else if (parsedValue <= 0) parsedValue = 1;

      setDay(parsedValue || '');
    }
  }

  const handleMonthValidation = (e) => {
    const value = e.target.value;

    if (value === '' || (NUMBER_REGEX.test(value) && value.length <= 2)) {
      let parsedValue = parseInt(value);

      if (parsedValue > 12) parsedValue = 12;
      else if (parsedValue <= 0) parsedValue = 1;

      setMonth(parsedValue || '');
    }
  }

  const handleYearValidation = (e) => {
    const value = e.target.value;

    if (value === '' || (NUMBER_REGEX.test(value) && value.length <= 4)) {
      const currentYear = new Date().getFullYear();
      let parsedValue = parseInt(value);

      if (parsedValue > currentYear || parsedValue > currentYear - 18 || parsedValue <= 0) {
        parsedValue = currentYear - 18;
      }

      setYear(parsedValue || '');
    }
  }

  return (
    <div className='register-birth-date'>

      <input
        type='number'
        placeholder='GG'
        value={day}
        onBlur={() => {
          if (parseInt(day) < 10) {
            setDay(`0${day}`);
          }
          scroll({ top: 0 });
        }}
        onFocus={() => setDay('')}
        onChange={(e) => handleDayValidation(e)}
      />

      <input
        type='number'
        placeholder='AA'
        value={month}
        onBlur={() => { if (parseInt(month) < 10) setMonth(`0${month}`); scroll({ top: 0 }); }}
        onFocus={() => setMonth('')}
        onChange={(e) => handleMonthValidation(e)} />

      <input
        type='number'
        placeholder='YYYY'
        value={year}
        onBlur={() => {
          if (year.toString().length < 4) setYear(``); scroll({ top: 0 })
        }}
        onFocus={() => setYear('')}
        onChange={(e) => handleYearValidation(e)}
      />

    </div>
  )
}

export default RegisterBirthDate
