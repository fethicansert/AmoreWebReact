import React from 'react'
const NUMBER_REGEX = /^[0-9]*$/;
const RegisterBirthDate = ({ day, setDay, month, setMonth, year, setYear }) => {


  const handleDayValidation = (e) => {
    let value = e.target.value;
    if (!NUMBER_REGEX.test(value)) return;
    if (value.length > 2) return;
    if (parseInt(value) > 31) { value = 31; }
    if (parseInt(value) === 0 || parseInt(value) < 0) value = 1;
    setDay(value);
  }

  const handleMonthValidation = (e) => {
    let value = e.target.value;
    if (!NUMBER_REGEX.test(value)) return;
    if (value.length > 2) return;
    if (parseInt(value) > 12) { value = 12; }
    if (parseInt(value) === 0 || parseInt(value) < 0) value = 1;
    setMonth(value);
  }

  const handleYearValidation = (e) => {
    const year = new Date().getFullYear();
    let value = e.target.value;
    if (!NUMBER_REGEX.test(value)) return;
    if (value.length > 4) return;
    if (parseInt(value) > year || value > year - 18) value = year - 18;
    if (parseInt(value) === 0 || parseInt(value) < 0) value = year - 18;
    setYear(value);
  }

  return (
    <div className='register-birth-date'>
      <input
        type='text'
        placeholder='GG'
        value={day}
        onChange={(e) => handleDayValidation(e)}
        onBlur={() => { if (parseInt(day) < 10) { setDay(`0${day}`); } }}
        onFocus={() => setDay('')}
      />
      <input
        type='text'
        placeholder='AA'
        value={month}
        onBlur={() => { if (parseInt(month) < 10) setMonth(`0${month}`); }}
        onFocus={() => setMonth('')}
        onChange={(e) => handleMonthValidation(e)} />

      <input
        type='text'
        placeholder='YYYY'
        value={year}
        onBlur={() => { if (year.length < 4) setYear(``); }}
        onFocus={() => setYear('')}
        onChange={(e) => handleYearValidation(e)}
      />

    </div>
  )
}

export default RegisterBirthDate
