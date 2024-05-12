import React from 'react';
import { useState } from 'react';
import './NaviBar.css';
import { useNavigate, Outlet } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";


export function NaviBar(){
    const navigate = useNavigate();

    const [barVisable, setBarVisable] = useState(true);
    
    function handleBar(){
        setBarVisable(!barVisable);
    }

    function handleDash(){
        navigate("dash-board");
    }

    function handlePatientInfo(){
        navigate("healthInfo");
    }

    function handleCalendar(){
        navigate("calendar");
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