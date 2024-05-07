import React from 'react';
import { useState } from 'react';
import './NaviBar.css';
import { useNavigate, Outlet } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";

export function NaviBar(user){

    const [barVisable, setBarVisable] = useState(true);
    
    function handleBar(){
        setBarVisable(!barVisable);
    }

    const navigate = useNavigate();
    function handleDash(){
        user ? navigate("dash-board") : alert('No User');
    }

    function handlePatientInfo(){
        user ? navigate("healthInfo") : alert('No User');
    }

    function handleCalendar(){
        user ? navigate("calendar") : alert('No User');
    }


    

    return(
        /* Bottom Navigation Bar */
        <>
            <Outlet/>
            {barVisable ? 
            (
            <div className="bottom-nav">
                <button onClick={handleDash}>Dashboard</button>
                <button onClick={handlePatientInfo}>Patient Info</button>
                <button onClick={handleCalendar}>Calendar & Appointments</button>
                <button>Settings</button>
                <button className="NaviMenu" onClick={handleBar}><TiThMenu/></button>
            </div>
            )
            :
            (
            <div className="close-nav">
                <button className="NaviMenu" onClick={handleBar}><TiThMenu/></button>
            </div>
            )
            }
        </>
    );
};