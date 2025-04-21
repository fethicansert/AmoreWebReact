import React, { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { IoIosClose } from 'react-icons/io'
import { colors } from '../../../utils/theme'

const UserProfileDate = ({ showDatePicker, setShowDatePicker, handleShowDatePicker, selectedDate, setSelectedDate }) => {

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (!showDatePicker) setFocus(false)
  }, [showDatePicker])
  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px 0",
        flex: "1",
        justifyContent: "flex-end",
        minWidth: "250px",
      }}
    >
      <h3 style={{ fontSize: ".9rem", fontWeight: "600" }}>Doğum Günü</h3>

      <div
        id="user-profile-date"
        onClick={handleShowDatePicker}
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        style={{
          position: 'relative',
          display: "flex",
          gap: "15px",
          cursor: 'pointer'
        }}
      >
        {
          showDatePicker && <div className={`user-profile-date-wrapper ${showDatePicker ? 'active' : null}`} onClick={(e) => e.stopPropagation()} >

            <IoIosClose className='date-close-button' size={24} style={{ cursor: 'pointer' }} onClick={(e) => {
              e.stopPropagation()
              setShowDatePicker(false)
            }} />

            <DayPicker
              defaultMonth={new Date(1999, 0)}
              // onDayClick={(day, m) => setShowDatePicker(false)}
              required
              role='application'
              selected={selectedDate}
              hideNavigation={true}
              onSelect={(date) => setSelectedDate(date)}
              captionLayout='dropdown'
              id='register-date'
              mode='single'
            />

          </div>
        }
        <DateContainer text={selectedDate.getDate()} active={showDatePicker} />
        <DateContainer text={selectedDate.getUTCMonth() + 1} active={showDatePicker} />
        <DateContainer text={selectedDate.getUTCFullYear()} active={showDatePicker} />

      </div>
    </div>
  )

  function DateContainer({ text, active }) {
    return <div
      style={{
        height: '53px',
        border: `1px solid ${(active || focus) ? colors.brand1 : colors.borderColor1}`,
        flex: '1',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '.85rem'
      }}
    >
      <span>{text}</span>
    </div>
  }
}

export default UserProfileDate
