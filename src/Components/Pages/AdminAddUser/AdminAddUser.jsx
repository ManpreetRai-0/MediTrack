import React from 'react';
import './AdminAddUser.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState, useEffect } from "react";
import {MdEmail} from "react-icons/md";

import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../Config/firebase";
import {
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  collection
} from "firebase/firestore";

export function AdminAddUser(){
  const auth=getAuth();

  const [email, setEmail] = useState('');
  const [fname, setFName] = useState('');
  const [mname, setMName] = useState('');
  const [lname, setLName] = useState('');
  const [role, setRole] = useState('');
  const [ID, setID] = useState('');

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  
  function handleDateChange(){
  }

  const firebaseConfig = {
    apiKey: "AIzaSyCSUwPJHtRlKSOMtVwtFWjLQnra3u5GJ7Y",
    authDomain: "meditrack-d0532.firebaseapp.com"
  }
  const secondaryApp = initializeApp(firebaseConfig, "Secondary");


  function handleSubmit(){
    auth().createUserWithEmailAndPassword(auth, email, crypto.randomUUID())
    .then(function(firebaseUser) {
      console.log("User " + firebaseUser.uid + " created successfully!");
      //I don't know if the next statement is necessary 
      secondaryApp.auth().signOut();
      secondaryApp.delete();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);

    });
  }

  return(
    <div className="AddContainer">
      <h1>Add User</h1>
      <div className="AddIn">
          <MdEmail />
          <input type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
      </div>
      <div className="AddIn">
          <>First Name: </>
          <input
          placeholder="First Name: "
          value={fname}
          onChange={e => setFName(e.target.value)}
          />
      </div>
      <div className="AddIn">
          <>Middle Name: </>
          <input
          placeholder="Middle Name: "
          value={mname}
          onChange={e => setMName(e.target.value)}
          />
      </div>
      <div className="AddIn">
          <>First Name: </>
          <input
          placeholder="Last Name: "
          value={lname}
          onChange={e => setLName(e.target.value)}
          />
      </div>
      <div className="RoleSelect">
        <div>Role</div>
        <div className="radio">
          <input type="radio"
          value="Admin"
          name="roles"
          onChange={e => setRole(e.target.value)}
          />
          <>Admin</>
        </div>
        <div className="radio">
          <input type="radio"
          value="Doctor"
          name="roles"
          onChange={e => setRole(e.target.value)}
          />
          <>Doctor</>
        </div>
        <div className="Submit">
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <>
          <DatePicker
            showTimeSelect={setTime}
            inline
            showIcon
            selected={date}
            onChange={setDate}
            dateFormat="Pp"
          />
        </>
      </div>
    </div>
  );
};