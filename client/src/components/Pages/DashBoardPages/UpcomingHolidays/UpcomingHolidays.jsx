import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './UpcomingHolidays.css'

function UpcomingHolidays() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className="cal"
      />
    </div>
  );
}
export default UpcomingHolidays