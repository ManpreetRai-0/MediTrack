import React from 'react';
import './App.css';

// Patient Info Component
function PatientInfo({ name, age, gender }) {
  return (
    <div className="info-container">
      <h2>Patient Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Gender:</strong> {gender}</p>
    </div>
  );
}

// Health Records Component
function HealthRecords({ vaccinations, diagnoses, prescriptions, labVisits }) {
  return (
    <div className="records-container">
      <h2>Health Records</h2>
      <div>
        <h3>Vaccination History</h3>
        <ul>
          {vaccinations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Current Diagnoses</h3>
        <ul>
          {diagnoses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Prescriptions</h3>
        <ul>
          {prescriptions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Lab Visits</h3>
        <ul>
          {labVisits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const patientName = 'John Doe';
  const patientAge = 30;
  const patientGender = 'Male';

  const vaccinations = [
    'COVID-19 Vaccine (2021)',
    'Flu Shot (2020)',
    'Tetanus Booster (2019)'
  ];

  const diagnoses = [
    'Hypertension',
    'Type 2 Diabetes',
    'Seasonal Allergies'
  ];

  const prescriptions = [
    'Metformin - 500mg, once daily',
    'Lisinopril - 10mg, once daily',
    'Loratadine - 10mg, as needed'
  ];

  const labVisits = [
    '2023-02-10: Blood Test - Lipid Panel',
    '2022-12-15: Urine Analysis',
    '2022-09-20: Hemoglobin A1c Test'
  ];

  return (
    <div className="app">
      
      {/* Search Bar (Top Right Corner) */}
      <div className="search-bar">
        <input type="text" placeholder="Search patients..." />
        <button>Search</button>
      </div>
      <h1>Patient Health Information</h1>

      <PatientInfo name={patientName} age={patientAge} gender={patientGender} />
      <HealthRecords
        vaccinations={vaccinations}
        diagnoses={diagnoses}
        prescriptions={prescriptions}
        labVisits={labVisits}
      />

      {/* Bottom Navigation Bar */}
      <div className="bottom-nav">
        <button>Dashboard</button>
        <button>Patient General Info</button>
        <button>Calendar & Appointments</button>
        <button>Settings</button>
      </div>
    </div>
  );
}

export default App;
