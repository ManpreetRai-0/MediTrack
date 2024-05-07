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
  const [patientToDelete, setPatientToDelete] = useState(null);
  const [addMode, setAddMode] = useState(false); // track add mode

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

  //updated patient states
  const [updateMode, setUpdateMode] = useState(false); // track update mode
  const [updatedName, setUpdatedName] = useState("");
  const [updatedAge, setUpdatedAge] = useState(0);
  const [updatedGender, setUpdatedGender] = useState("");
  const [updatedRecentContact, setUpdatedRecentContact] = useState(0);

  const [updatedVisitHistory, setUpdatedVisitHistory] = useState([]);
  const [updatedVaxHistory, setUpdatedVaxHistory] = useState([]);
  const [updatedDiag, setUpdatedDiag] = useState([]);
  const [updatedPrescript, setUpdatedPrescript] = useState([]);
  const [updatedLabVisits, setUpdatedLabVisits] = useState([]);

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

  // deleting a patient from the database
  const deletePatient = async (id) => {
    try {
      await deleteDoc(doc(db, "patients", id));
      setPatientList(patientList.filter(patient => patient.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  const handleDeleteConfirmation = (patientId) => {
    setPatientToDelete(patientId);
    console.log("Patient to delete:", patientId);
  }

  const handleDeleteConfirmed = () => {
    if (patientToDelete) {
      deletePatient(patientToDelete);
      setPatientToDelete(null); // reset patient to delete
    }
  }

  //update patient info in database
  const updateName = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { name: updatedName });
  }
  const updateAge = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { age: updatedAge });
  }
  const updateGender = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { gender: updatedGender });
  }
  const updateRecentContact = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { recentContact: updatedRecentContact });
  }
  const updateVisitHistory = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { visitHistory: updatedVisitHistory });
  }
  const updateVaxHistory = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { vaxHistory: updatedVaxHistory });
  }
  const updateDiag = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { diag: updatedDiag });
  }
  const updatePrescript = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { prescript: updatedPrescript });
  }
  const updateLabVisits = async (id) => {
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { labVisits: updatedLabVisits });
  }

  const handleUpdateMode = () => {
    setUpdateMode(prevMode => !prevMode); // toggle update mode
  }

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

  const handleAddMode = () => {
    setAddMode(prevMode => !prevMode); // toggle add mode
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
              <div className="delete">
                <button onClick={() => handleDeleteConfirmation(patient.id)}>Delete Patient</button>
              </div>
            </div>

            {/* confirmation dialog */}
            {patientToDelete && (
              <div className="confirmation-dialog">
                <p><strong>Are you sure you want to permanently delete this patient from the database?</strong></p>
                <div>
                  <button onClick={handleDeleteConfirmed}>Yes, I do want to delete this patient.</button>
                  <button onClick={() => setPatientToDelete(null)}>No, I do not want to delete this patient.</button>
                </div>
              </div>
            )}

            {/* update patient info */}
            <div className="update">
              <button onClick={handleUpdateMode}>
                {updateMode ? "Cancel Update" : "Update Patient Info"}
              </button>
            </div>
            {updateMode && (
              <>
                {/* update name */}
                <p>
                  <p><strong>Patient Name: </strong> </p>
                  <input
                    placeholder="Name..."
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <button onClick={() => updateName(patient.id)}>Update Patient Name</button>
                </p>
                {/* update age */}
                <p><strong>Patient Age (Years): </strong></p>
                <p>
                  <input
                    type="number"
                    placeholder="Age..."
                    onChange={(e) => setUpdatedAge(e.target.value)}
                  />
                  <button onClick={() => updateAge(patient.id)}>Update Patient Age</button>
                </p>
                {/* update gender */}
                <p><strong>Gender: </strong></p>
                <p>
                  <input
                    placeholder="Gender..."
                    onChange={(e) => setUpdatedGender(e.target.value)}
                  />
                  <button onClick={() => updateGender(patient.id)}>Update Patient Gender</button>
                </p>
                {/* update recent contact */}
                <p><strong>Most Recent Contact with New Patient (YYMMDD): </strong></p>
                <p>
                  <input
                    type="number"
                    placeholder="YYMMDD..."
                    onChange={(e) => setUpdatedRecentContact(e.target.value)}
                  />
                  <button onClick={() => updateRecentContact(patient.id)}>Update Date of Most Recent Contact</button>
                </p>
                {/* update visit history */}
                <p><strong>Patient Visit History: </strong> </p>
                <p>Separate visits with commas </p>
                <input
                  type="text"
                  placeholder="YYYY-MM-DD: Visit.."
                  onChange={(e) => setUpdatedVisitHistory(e.target.value.split(','))}
                />
                <button onClick={() => updateVisitHistory(patient.id)}>Update Visit History</button>
                {/* update vax history */}
                <p><strong>Patient Vaccination History: </strong> </p>
                <p>Separate vaccinations with commas </p>
                <input
                  placeholder="Vaccination (Year)..."
                  onChange={(e) => setUpdatedVaxHistory(e.target.value.split(','))}
                />
                <button onClick={() => updateVaxHistory(patient.id)}>Update Vaccination History</button>
                {/* update diagnoses */}
                <p><strong>Patient Current Diagnoses: </strong> </p>
                <p>Separate diagnoses with commas </p>
                <input
                  placeholder="Diagnoses..."
                  onChange={(e) => setUpdatedDiag(e.target.value.split(','))}
                />
                <button onClick={() => updateDiag(patient.id)}>Update Diagnoses</button>
                {/* update prescriptions */}
                <p><strong>Patient Prescriptions: </strong> </p>
                <p>Separate presciptions with commas </p>
                <input
                  placeholder="Prescription - dosage, frequency..."
                  onChange={(e) => setUpdatedPrescript(e.target.value.split(','))}
                />
                <button onClick={() => updatePrescript(patient.id)}>Update Prescriptions</button>
                {/* update lab visits */}
                <p><strong>Patient Lab Visits: </strong> </p>
                <p>Separate visits with commas </p>
                <input
                  placeholder="YYYY-MM-DD: Visit..."
                  onChange={(e) => setUpdatedLabVisits(e.target.value.split(','))}
                />
                <button onClick={() => updateLabVisits(patient.id)}>Update Lab Visits</button>

              </>
            )}

          </div>
        ))}
      </div>

      {/* add a new patient */}
      <p>....................................................</p>
      <div className="add">
        <button onClick={handleAddMode}>
          {addMode ? "Cancel Add" : "Add a New Patient"}
        </button>
        </div>
      {addMode && (
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
          <p>Separate visits with commas </p>
          <input
            type="text"
            placeholder="YYYY-MM-DD: Visit.."
            onChange={(e) => setNewVisitHistory(e.target.value.split(','))}
          />

          <p><strong>Patient Vaccination History: </strong> </p>
          <p>Separate vaccinations with commas </p>
          <input
            placeholder="Vaccination (Year)..."
            onChange={(e) => setNewVaxHistory(e.target.value.split(','))}
          />

          <p><strong>Patient Current Diagnoses: </strong> </p>
          <p>Separate diagnoses with commas </p>
          <input
            placeholder="Diagnoses..."
            onChange={(e) => setNewDiag(e.target.value.split(','))}
          />

          <p><strong>Patient Prescriptions: </strong> </p>
          <p>Separate presciptions with commas </p>
          <input
            placeholder="Prescription - dosage, frequency..."
            onChange={(e) => setNewPrescript(e.target.value.split(','))}
          />

          <p><strong>Patient Lab Visits: </strong> </p>
          <p>Separate visits with commas </p>
          <input
            placeholder="YYYY-MM-DD: Visit..."
            onChange={(e) => setNewLabVisits(e.target.value.split(','))}
            
          />
 <div className="add">
          <p><button onClick={onAddPatient}> Submit New Patient </button></p>
        </div>
        </div>
        
      )}
      {/* text for spacing */}
      <h1>....................................................</h1>
      <h1>....................................................</h1>


    </div>

  );
}

//export default HealthInfo;