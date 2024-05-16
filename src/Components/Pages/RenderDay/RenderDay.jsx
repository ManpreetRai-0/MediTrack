import React from 'react';
import Modal from 'react-modal'
import { useState, useEffect } from 'react';
import './RenderDay.css';
import {
    getDocs,
    getDoc,
    addDoc,
    setDoc,
    deleteDoc,
    updateDoc,
    doc,
    collection
  } from "firebase/firestore";
import { db } from "../Config/firebase";

import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';


//my edit

export function RenderDay({user, selectedDay, selectedMonth, selectedYear}){
    
    const userUid = [
        '', '', '', '', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', '','', '', ''
      ];
    const [doctor, setDoctor] = useState([]);
    const [querySnapshot, setQuerySnapshot] = useState('');
    const [doctorFound, setDoctorFound] = useState(true);
    //const [currentDate, setCurrentDate] = useState('');

    {/* Adding new appointment */}
    const [updatedContactInfo, setUpdatedContactInfo] = useState("");
    const [updatedRecentContact, setUpdatedRecentContact] = useState(0);
    const [updatedVisitHistory, setUpdatedVisitHistory] = useState([]);

    const usersCollectionRef = collection(db, user);
    const currentDate = (selectedDay+'.'+selectedMonth+'.'+selectedYear);

    const addUser = async () => { 
        const document = await setDoc(doc(usersCollectionRef, currentDate ),{
             userUID: userUid
        });
    }

    async function fetchDoctor() {
        try {
            const documentSnapshot = await getDoc(doc(usersCollectionRef, currentDate));
            if (documentSnapshot.exists()) {
                const doctorData = documentSnapshot.data();
                setDoctor(doctorData);
            } else {
                addUser();
            }
        } catch (error) {
            setDoctorFound(false);
            console.error("Error fetching doctor:", error);
            // Handle error gracefully
        }
    };

    const [newName, setNewName] = useState("");
    const [newGrade, setNewGrade] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newHours, setNewHours] = useState("");


    return (
        <>
            <div>Hello: {user}</div>
            <div>Day: {selectedMonth}/{selectedDay}/{selectedYear}</div>
            <div>{currentDate}</div>
            <div><button onClick={() => fetchDoctor()}>Get Doctor</button></div>
            <div><button onClick={() => addUser()}>Add User</button></div>

            
            {/*{doctorFound? <div>found</div> : <div>not found</div>}
            {doctor && (
                <div>
                    Doctor Name: {doctor.name}
                </div>
            )}*/}
        </>
    );
}
