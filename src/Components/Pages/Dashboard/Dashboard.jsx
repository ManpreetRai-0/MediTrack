import React from 'react';
import Modal from 'react-modal'
import { useState, useEffect } from 'react';
import './Dashboard.css';
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { NaviBar } from "../NaviBar/NaviBar"

export function Dashboard(){
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const [currTime, setCurrTime] = useState(new Date());

    useEffect(() => {
        const intervalid = setInterval (() => {setCurrTime(new Date());
        },10000);
        return () => clearInterval(intervalid);
    }, []);


    function openModal(){
        setModalIsOpen(true);
    }

    function closeModal(){
        setModalIsOpen(false);
    }

    function profileNav(){
        alert("nav");
    }

    function Check(){
        alert("navigating to Profile");
    }

    function LogOut(){
        alert("Logging out");
    }

    return(
        <div>
            <div className="Board">
                <h1 className="Header">Dashboard</h1>
                <NaviBar user/>
                <button className="Setting" onClick={openModal}><IoMdSettings/></button>
                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example"
                >
                    <h2>Settings</h2>
                    <div>Contents</div>
                    <div><button className="Profile" onClick={Check}><CgProfile className="Icon"/> Profile</button></div>
                    <div><button>Calander</button></div>
                    <button onClick={closeModal}>Close</button>
                </Modal>
                <button className="Logout" onClick={LogOut}><RiLogoutBoxRLine/></button>
                <h2 className="Schedule">Schedule: {currTime.toLocaleString()}</h2>

            </div>
        </div>
    );
};