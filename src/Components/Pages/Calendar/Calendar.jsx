import React, { useState, useEffect } from 'react';
import './Calendar.css';
import Modal from 'react-modal'

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Config/firebase';

import { RenderDay } from '../RenderDay/RenderDay.jsx';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Calendar = () => {


  const [dateTwo, setDateTwo] = useState(new Date());
  const [timeTwo, setTimeTwo] = useState('');

  const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.uid);
                //fetchDoctor(user.uid); // Call function to fetch doctor
            } else {
                setUser(null);
                //setDoctor(''); // Reset doctor when user is not logged in
            }
        });

        return () => unsubscribe();
    }, []);


  //ABOVE IS THE IMPORTED CALENDER(Datepicker)
  //BELOW IS "MY WORK"


  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);


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


  const [showDay, setShowDay] = useState(false);




  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);


    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);


    const handleDayClick = (day) => {
      setShowDay(true);
      setSelectedDay(day);
      setSelectedMonth(month);
      setSelectedYear(year);
    };

    function ResetDate(){
      setDate(new Date());
    }

    function openModal(){
      setShowDay(true);
  }

  function closeModal(){
      setShowDay(false);
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
            onClick={() => handleDayClick(day)}
            key={day}
            className={`calendar-day ${isToday(year, month, day) ? 'today' : ''}`}
          >
            {day}
          </div>
        ))}
          </div>
        </div>
      </div>
      {/* Render RenderDay component if showDay is true */}
      {showDay ? (
        <>
          <Modal
            isOpen={showDay}
            onRequestClose={closeModal}
            contentLabel="Example"
          >
            <RenderDay user={user} selectedDay={selectedDay} selectedMonth={selectedMonth+1} selectedYear={selectedYear}/>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </>

      ) : 
        null
      }
      <div>Selected Date: {selectedDay}</div>
      </>
    );
  };


  return renderCalendar();


};
