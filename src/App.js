import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import LoginForm from './Components/Pages/LoginForm/LoginForm.jsx';
import { Calendar } from "./Components/Pages/Calendar/Calendar.jsx";
import { Dashboard } from './Components/Pages/Dashboard/Dashboard.jsx';
import { HealthInfo } from './Components/Pages/HealthInfo/HealthInfo.jsx';
import { NaviBar } from "./Components/Pages/NaviBar/NaviBar.jsx";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Components/Pages/Config/firebase';

// Define a private route component
function PrivateRoute({ element }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedin = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return loggedin;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />; // Redirect to login page if not authenticated
  }

  return element;
}

// Define your route configuration
const router = createBrowserRouter([
  { path: '/', element: <LoginForm /> },
  {
    path: '/navi', element: <PrivateRoute element={<NaviBar />} />, children:
      [
        { path: 'dash-board', element: <Dashboard /> },
        { path: 'healthInfo', element: <HealthInfo /> },
        { path: 'calendar', element: <Calendar /> }
      ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;