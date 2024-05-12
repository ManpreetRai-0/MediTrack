import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import './HealthInfo.css';
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
  // patient states
  const [patientList, setPatientList] = useState([]);
  const [filteredPatientList, setFilteredPatientList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [patientToDelete, setPatientToDelete] = useState(null);
  const [addMode, setAddMode] = useState(false);
  const [validationError, setValidationError] = useState("");

  // new patient states
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newGender, setNewGender] = useState("");
  const [newContactInfo, setNewContactInfo] = useState("");
  const [newRecentContact, setNewRecentContact] = useState(0);
  const [newVisitHistory, setNewVisitHistory] = useState([]);
  const [newVaxHistory, setNewVaxHistory] = useState([]);
  const [newDiag, setNewDiag] = useState([]);
  const [newPrescript, setNewPrescript] = useState([]);
  const [newLabVisits, setNewLabVisits] = useState([]);

  // updated patient states
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedAge, setUpdatedAge] = useState(0);
  const [updatedGender, setUpdatedGender] = useState("");
  const [updatedContactInfo, setUpdatedContactInfo] = useState("");
  const [updatedRecentContact, setUpdatedRecentContact] = useState(0);
  const [updatedVisitHistory, setUpdatedVisitHistory] = useState([]);
  const [updatedVaxHistory, setUpdatedVaxHistory] = useState([]);
  const [updatedDiag, setUpdatedDiag] = useState([]);
  const [updatedPrescript, setUpdatedPrescript] = useState([]);
  const [updatedLabVisits, setUpdatedLabVisits] = useState([]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const patientsCollectionRef = collection(db, "patients");

  // get patient list
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
        console.error(err);
      }
    };
    getPatientList();
  }, [])

  // delete patient function
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
  }

  const handleDeleteConfirmed = () => {
    if (patientToDelete) {
      deletePatient(patientToDelete);
      setPatientToDelete(null);
    }
  }

  // update existing patient info
  const updateName = async (id) => {
    if (!updatedName) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { name: updatedName });
  }
  const updateAge = async (id) => {
    if (!updatedAge) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { age: updatedAge });
  }
  const updateGender = async (id) => {
    if (!updatedGender) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { gender: updatedGender });
  }
  const updateContactInfo = async (id) => {
    if (!updatedContactInfo) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { contact: updatedContactInfo });
  }
  const updateRecentContact = async (id) => {
    if (!updatedRecentContact) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { recentContact: updatedRecentContact });
  }
  const updateVisitHistory = async (id) => {
    if (!updatedVisitHistory) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { visitHistory: updatedVisitHistory });
  }
  const updateVaxHistory = async (id) => {
    if (!updatedVaxHistory) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { vaxHistory: updatedVaxHistory });
  }
  const updateDiag = async (id) => {
    if (!updatedDiag) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { diag: updatedDiag });
  }
  const updatePrescript = async (id) => {
    if (!updatedPrescript) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { prescript: updatedPrescript });
  }
  const updateLabVisits = async (id) => {
    if (!updatedLabVisits) {
      setValidationError("No input detected. Unable to submit.");
      return;
    }
    const patientDoc = doc(db, "patients", id);
    await updateDoc(patientDoc, { labVisits: updatedLabVisits });
  }

  const handleUpdateMode = () => {
    setUpdateMode(prevMode => !prevMode);
  }

  // add a new patient function
  const onAddPatient = async () => {
    if (!newName || 
      !newAge || 
      !newGender || 
      !newContactInfo || 
      !newRecentContact || 
      !newVisitHistory || 
      !newVaxHistory || 
      !newDiag|| 
      !newPrescript || 
      !newLabVisits) {
      setValidationError("You must fill out all fields before submitting.");
      return;
    }
    try {
      await addDoc(patientsCollectionRef, {
        name: newName,
        age: newAge,
        gender: newGender,
        contact: newContactInfo,
        recentContact: newRecentContact,
        visitHistory: newVisitHistory,
        vaxHistory: newVaxHistory,
        diag: newDiag,
        prescript: newPrescript,
        labVisits: newLabVisits
      });
    } catch (err) {
      console.error(err);
    }
  }

  const handleAddMode = () => {
    setAddMode(prevMode => !prevMode);
  }

  // search patients function
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filterPatientList = () => {
    const filteredPatients = patientList.filter(patient => {
      return (
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.age.toString().includes(searchQuery) ||
        patient.gender.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredPatientList(filteredPatients);
  }

  useEffect(() => {
    filterPatientList();
  }, [searchQuery, patientList]);

  const togglePatientInfo = (patient) => {
    if (selectedPatient && selectedPatient.id === patient.id) {
      setSelectedPatient(null);
    } else {
      setSelectedPatient(patient);
    }
  }

  return (
    <div className="records-container">
      {/* display header */} 
      <div class = "header"> 
      <h1 className="header"> Patient Health Information </h1> 
      </div>
      {/* display search bar */}
      <div className="search-bar">
      <button><FaSearch /></button>  
        <input type="text" placeholder="Search patients by name..." value={searchQuery} onChange={handleSearchInputChange} />
      </div>
      {/* <button className="schedule-btn">Schedule Appointment</button> */}
      <h1><strong>Patient List</strong></h1>
      <h2>Click on a patient's name to view their information.</h2>
      <div>
        {/* display patient list */}
        {filteredPatientList.map((patient) => (
          <div key={patient.id}>
            <p><span className="patient-name" onClick={() => togglePatientInfo(patient)}>
              <div class="name"> <h4> <strong> ✧ {patient.name} </strong> </h4></div>
            </span></p>
            {selectedPatient && selectedPatient.id === patient.id &&
              <div>
                <p><strong>Age:</strong> {patient.age}</p>
                <p><strong>Gender:</strong> {patient.gender}</p>
                <p><strong>Contact Info:</strong> {patient.contact}</p>
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
                  {/* display delete patient option */}
                  <div className="delete">
                    <button onClick={() => handleDeleteConfirmation(patient.id)}>Delete Patient</button>
                  </div>
                </div>
                {patientToDelete &&
                  <div className="confirmation-dialog">
                    <p><strong>Are you sure you want to permanently delete this patient from the database?</strong></p>
                    <div>
                      <button onClick={handleDeleteConfirmed}>Yes, I do want to delete this patient.</button>
                      <button onClick={() => setPatientToDelete(null)}>No, I do not want to delete this patient.</button>
                    </div>
                  </div>
                }
                {/* display update patient option */}
                <div className="update">
                  <button onClick={handleUpdateMode}>
                    {updateMode ? "Cancel Update" : "Update Patient Info"}
                  </button>
                </div>
                {updateMode &&
                  <>
                    <p>
                      <p><strong>Patient Name: </strong> </p>
                      <input
                        placeholder="Name..."
                        onChange={(e) => setUpdatedName(e.target.value)}
                      />
                      <button onClick={() => updateName(patient.id)}>Update Patient Name</button>
                    </p>
                    <p><strong>Patient Age (Years): </strong></p>
                    <p>
                      <input
                        type="number"
                        placeholder="Age..."
                        onChange={(e) => setUpdatedAge(e.target.value)}
                      />
                      <button onClick={() => updateAge(patient.id)}>Update Patient Age</button>
                    </p>
                    <p><strong>Gender: </strong></p>
                    <p>
                      <input
                        placeholder="Gender..."
                        onChange={(e) => setUpdatedGender(e.target.value)}
                      />
                      <button onClick={() => updateGender(patient.id)}>Update Patient Gender</button>
                    </p>
                    <p><strong>Contact Info: </strong></p>
                    <p>
                      <input
                        placeholder="Email or phone number..."
                        onChange={(e) => setUpdatedContactInfo(e.target.value)}
                      />
                      <button onClick={() => updateContactInfo(patient.id)}>Update Patient Contact Info</button>
                    </p>
                    <p><strong>Most Recent Contact with New Patient (YYMMDD): </strong></p>
                    <p>
                      <input
                        type="number"
                        placeholder="YYMMDD..."
                        onChange={(e) => setUpdatedRecentContact(e.target.value)}
                      />
                      <button onClick={() => updateRecentContact(patient.id)}>Update Date of Most Recent Contact</button>
                    </p>
                    <p><strong>Patient Visit History: </strong> </p>
                    <p>Separate visits with commas </p>
                    <input
                      type="text"
                      placeholder="YYYY-MM-DD: Visit.."
                      onChange={(e) => setUpdatedVisitHistory(e.target.value.split(','))}
                    />
                    <button onClick={() => updateVisitHistory(patient.id)}>Update Visit History</button>
                    <p><strong>Patient Vaccination History: </strong> </p>
                    <p>Separate vaccinations with commas </p>
                    <input
                      placeholder="Vaccination (Year)..."
                      onChange={(e) => setUpdatedVaxHistory(e.target.value.split(','))}
                    />
                    <button onClick={() => updateVaxHistory(patient.id)}>Update Vaccination History</button>
                    <p><strong>Patient Current Diagnoses: </strong> </p>
                    <p>Separate diagnoses with commas </p>
                    <input
                      placeholder="Diagnoses..."
                      onChange={(e) => setUpdatedDiag(e.target.value.split(','))}
                    />
                    <button onClick={() => updateDiag(patient.id)}>Update Diagnoses</button>
                    <p><strong>Patient Prescriptions: </strong> </p>
                    <p>Separate presciptions with commas </p>
                    <input
                      placeholder="Prescription - dosage (frequency)..."
                      onChange={(e) => setUpdatedPrescript(e.target.value.split(','))}
                    />
                    <button onClick={() => updatePrescript(patient.id)}>Update Prescriptions</button>
                    <p><strong>Patient Lab Visits: </strong> </p>
                    <p>Separate visits with commas </p>
                    <input
                      placeholder="YYYY-MM-DD: Visit..."
                      onChange={(e) => setUpdatedLabVisits(e.target.value.split(','))}
                    />
                    <button onClick={() => updateLabVisits(patient.id)}>Update Lab Visits</button>
                  </>
                }
              </div>
            }
          </div>
        ))}
      </div>
      <p>.................................................................................</p>
      {/* display add a new patient option */}
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
           <p><strong>Contact Info: </strong></p>
          <input
            placeholder="Email or phone number..."
            onChange={(e) => setNewContactInfo(e.target.value)}
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
            placeholder="Prescription - dosage (frequency)..."
            onChange={(e) => setNewPrescript(e.target.value.split(','))}
          />
          <p><strong>Patient Lab Visits: </strong> </p>
          <p>Separate visits with commas </p>
          <input
            placeholder="YYYY-MM-DD: Visit..."
            onChange={(e) => setNewLabVisits(e.target.value.split(','))}
          />
          <div className="add">
          {validationError && <p className="inputVal">{validationError}</p>}
            <p><button onClick={onAddPatient}> Submit New Patient </button></p>
          </div>
        </div>
      )}
      {/* spacer text */}
      <p>.................................................................................</p>
      <p>.................................................................................</p>
    </div>
  );
}
