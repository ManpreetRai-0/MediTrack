import React from 'react';
import './HealthInfo.css';

import { useState, useEffect } from "react";
import { db } from "../Config/firebase";
import {
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  collection
} from "firebase/firestore";


// Main App Component
export function HealthInfo() {
  const [patientList, setPatientList] = useState([]);

  //new patient states
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newGender, setNewGender] = useState("");
  const [newRecentContact, setNewRecentContact] = useState(0);

  const [newVisitHistory, setNewVisitHistory] = useState([]);
  const [newVaxHistory, setNewVaxHistory] = useState([]);
  const [newDiag, setNewDiag] = useState([]);
  const [newPrescript, setNewPrescript] = useState([]);
  const [newLabVisits, setNewLabVisits] = useState([]);

  const patientsCollectionRef = collection(db, "patients");

  useEffect(() => {
    const getPatientList = async () => {
      try {
        const data = await getDocs(patientsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setPatientList(filteredData);
      } catch (err) {

      }
    };
    getPatientList();
  }, [])

  // adding a new patient to the database
  const onAddPatient = async () => {
    try {
      await addDoc(patientsCollectionRef, {
        name: newName,
        age: newAge,
        gender: newGender,
        recentContact: newRecentContact,
        visitHistory: newVisitHistory,
        vaxHistory: newVaxHistory,
        diag: newDiag,
        prescript: newPrescript,
        labVisits: newLabVisits,
        //userId: auth?.currentUser?.uid,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (

    <div className="records-container">
      <div className="search-bar">
        <input type="text" placeholder="Search patients..." />
        <button>Search</button>
      </div>
      <h1>Patient Health Information</h1>
      <button className="schedule-btn">Schedule Appointment</button>
      <div>
        {patientList.map((patient) => (
          <div>
            {/* display patient info from database */}
            <h2>Patient Information</h2>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>

            {/* display patient health records from database */}
            <h2>Health Records</h2>
            <div>
              <h3>Visit History</h3>
              <ul>
                {patient.visitHistory.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Vaccination History</h3>
              <ul>
                {(patient.vaxHistory).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Current Diagnoses</h3>
              <ul>
                {(patient.diag).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Prescriptions</h3>
              <ul>
                {(patient.prescript).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Lab Visits</h3>
              <ul>
                {(patient.labVisits).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        ))}
      </div>

      {/* add a new patient */}
      <div>

        <h2>Add a New Patient</h2>
        <p><strong>Patient Name: </strong> </p>
        <input
          placeholder="Name..."
          onChange={(e) => setNewName(e.target.value)}
        />

        <p><strong>Patient Age (Years): </strong></p>
        <input
          placeholder="Age.."
          type="number"
          onChange={(e) => setNewAge(Number(e.target.value))}
        />

        <p><strong>Gender: </strong></p>
        <input
          placeholder="Gender..."
          onChange={(e) => setNewGender(e.target.value)}
        />

        <p><strong>Most Recent Contact with New Patient (YYMMDD): </strong></p>
        <input
          placeholder="YYMMDD.."
          type="number"
          onChange={(e) => setNewRecentContact(Number(e.target.value))}
        />

        <p><strong>Patient Visit History: </strong> </p>

        <input
          placeholder="YYYY-MM-DD: Visit..."
          onChange={(e) => setNewVisitHistory(e.target.value)}
        />

        <p><strong>Patient Vaccination History: </strong> </p>
        <input
          placeholder="Vaccination (Year)..."
          onChange={(e) => setNewVaxHistory(e.target.value)}
        />

        <p><strong>Patient Current Diagnoses: </strong> </p>
        <input
          placeholder="Diagnoses..."
          onChange={(e) => setNewDiag(e.target.value)}
        />

        <p><strong>Patient Prescriptions: </strong> </p>
        <input
          placeholder="Prescription - dosage, frequency..."
          onChange={(e) => setNewPrescript(e.target.value)}
        />

        <p><strong>Patient Lab Visits: </strong> </p>
        <input
          placeholder="YYYY-MM-DD: Visit..."
          onChange={(e) => setNewLabVisits(e.target.value)}
        />

        <p><button onClick={onAddPatient}> Submit New Patient </button></p>
      </div>

      {/* text for spacing */}
      <h1>Patient Health Information</h1>
      <h1>Patient Health Information</h1>


    </div>

  );
}

//export default HealthInfo;