import React from 'react';
import './HealthInfo.css';
import { Dashboard } from '../Dashboard/Dashboard';

// Patient Info Component
function PatientInfo({ name, age, gender }) {
  return (
    <div className="info-container">
      <div className="patient-header">
        <h2>Patient Information</h2>
        <button className="schedule-btn">Schedule Appointment</button>
      </div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Gender:</strong> {gender}</p>
    </div>
  );
}


// Health Records Component
function HealthRecords({ visitHistory, vaccinations, diagnoses, prescriptions, labVisits }) {
  return (
    <div className="records-container">
      <h2>Health Records</h2>
      <div>
        <h3>Visit History</h3>
        <ul>
          {visitHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
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
export function HealthInfo() {
  const patientName = 'John Doe';
  const patientAge = 30;
  const patientGender = 'Male';

  // Static data for other patients (names)
  const otherPatients = [
    'Jane Smith',
    'Mike Johnson',
    'Emily Brown',
    'David Lee',
    'Sarah Wilson',
    'Alex Thompson'
  ];

  const visitHistory = [
    '2023-01-15: Routine Checkup',
    '2022-11-20: Follow-up Visit',
    '2022-08-05: Annual Physical Exam'
  ];

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
    '2023-02-10: MRI Scan',
    '2022-12-15: X-Ray',
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
          visitHistory={visitHistory}
          vaccinations={vaccinations}
          diagnoses={diagnoses}
          prescriptions={prescriptions}
          labVisits={labVisits}
        />

        {/* Patient List on the Right Side */}
        <div className="patient-list">
          <h2>Other Patients</h2>
          <ul>
            {otherPatients.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>

        {/* Bottom Navigation Bar
        <div className="bottom-nav">
          <button >Dashboard</button>
          <button>Patient General Info</button>
          <button>Calendar & Appointments</button>
          <button>Settings</button>
        </div>*/}
        </div>
       
  );
}

//export default HealthInfo;