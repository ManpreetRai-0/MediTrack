import React from 'react';
import Modal from 'react-modal'
import { useState, useEffect } from 'react';
import './RenderDay.css';
import {
    getDocs,
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




export function RenderDay({user, selectedDay, selectedMonth, selectedYear}){
    

    const [doctor, setDoctor] = useState('');
    const [querySnapshot, setQuerySnapshot] = useState('');
    const [doctorFound, setDoctorFound] = useState(true);
    //const [currentDate, setCurrentDate] = useState('');

    {/* Adding new appointment */}
    const [updatedContactInfo, setUpdatedContactInfo] = useState("");
    const [updatedRecentContact, setUpdatedRecentContact] = useState(0);
    const [updatedVisitHistory, setUpdatedVisitHistory] = useState([]);

    async function fetchDoctor(userId) {
        try {
            const documentSnapshot = await db.collection('doctors').doc(userId).get();
            if (documentSnapshot.exists) {
                const doctorData = documentSnapshot.data();
                setDoctor(doctorData);
            } else {
                setDoctorFound(false);
                setDoctor(null);
            }
        } catch (error) {
            setDoctorFound(false);
            console.error("Error fetching doctor:", error);
            // Handle error gracefully
        }
    }

    const [newName, setNewName] = useState("");
    const [newGrade, setNewGrade] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newHours, setNewHours] = useState("");

    
    const usersCollectionRef = collection(db, user);
    const currentDate = (selectedDay+'.'+selectedMonth+'.'+selectedYear);
    const addUser = async (userId) => { 
        const document = await setDoc(doc(usersCollectionRef, currentDate ),{
            name: newName,
            grade: Number(newGrade),
            role: newRole,
            hours: Number(newHours),
        });
    }

    return (
        <>
            <div>Hello: {user}</div>
            <div>Day: {selectedMonth}/{selectedDay}/{selectedYear}</div>
            <div>{currentDate}</div>
            <div><button onClick={() => fetchDoctor(user)}>Get Doctor</button></div>
            <div><button onClick={() => addUser(user)}>Add User</button></div>

            {doctorFound? <div>found</div> : <div>not found</div>}
            {doctor && (
                <div>
                    Doctor Name: {doctor.name}
                </div>
            )}
        </>
    );
}
