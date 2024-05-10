import React, { useState } from 'react';
import './Calendar.css';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Calendar = () => {

  const [dateTwo, setDateTwo] = useState(new Date());
  const [timeTwo, setTimeTwo] = useState('');

  //ABOVE IS THE IMPORTED CALENDER(Datepicker)
  //BELOW IS "MY WORK"

  const [date, setDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const isToday = (year, month, day) => {
    const today = new Date();
    return (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    );
  };

  const handlePrevMonth = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    function ResetDate(){
      setDate(new Date());
    }



    return (

      <><div className="header"> 
      <h1 className="header">Calendar & Appointments</h1>
      </div>


      <div className="Something">


        <div className="calendar">
          <button onClick={ResetDate}>Reset</button>
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&#8249;</button>
            <h2>{monthsOfYear[month]} {year}</h2>
            <button onClick={handleNextMonth}>&#8250;</button>
          </div>
          <div className="calendar-days">
            {daysOfWeek.map(day => (
              <div key={day} className="calendar-day">{day}</div>
            ))}
            {blanks.map((_, index) => (
              <div key={index} className="calendar-day blank"></div>
            ))}
            {days.map(day => (
              <div
                key={day}
                className={`calendar-day ${isToday(year, month, day) ? 'today' : ''}`}
              >
                {day}
              </div>
            ))}
          </div>
            <div>
              <div className="legend">
                <div className="legend-item"><span className="legend-color" style={{ backgroundColor: '#ffc107' }}></span> </div>
                <div className="legend-item"><span className="legend-color" style={{ backgroundColor: '#bababa' }}></span> </div>
              </div>
            </div>
        </div>

        <div className="DateText">Select Appointment Date Below:</div>

        <div>
          <DatePicker
            showIcon
            selected={dateTwo}
            onChange={setDateTwo}
            showTimeSelect={setTimeTwo}
            dateFormat="Pp"
          />
        </div>
      </div></>
    );
  };

  return renderCalendar();

};
