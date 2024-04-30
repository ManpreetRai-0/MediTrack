import React from 'react';
import { useState } from 'react';
import './NaviBar.css';
import { useNavigate, Outlet } from 'react-router-dom';


export function NaviBar(user){

    

    const navigate = useNavigate();
    function handleDash(){
        user ? navigate("dash-board") : alert('No User');
    }

    function handlePatientInfo(){
        user ? navigate("healthInfo") : alert('No User');
    }

    

    return(
        /* Bottom Navigation Bar */
        <>
        <Outlet/>
        <div className="bottom-nav">
          <button onClick={handleDash}>Dashboard</button>
          <button onClick={handlePatientInfo}>Patient Info</button>
          <button>Calendar & Appointments</button>
          <button>Settings</button>
        </div>
        </>
    );
};