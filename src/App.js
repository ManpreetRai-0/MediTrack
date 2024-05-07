import './App.css';
import LoginForm from './Components/Pages/LoginForm/LoginForm.jsx';
import { Calendar } from "./Components/Pages/Calendar/Calendar.jsx"
import { Dashboard } from './Components/Pages/Dashboard/Dashboard.jsx';
import { HealthInfo } from './Components/Pages/HealthInfo/HealthInfo.jsx'
import { NaviBar } from "./Components/Pages/NaviBar/NaviBar.jsx"

import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  { path: '/', element: <LoginForm/>},
  { path: '/navi', element: <NaviBar/>, children:
  [
    { path: 'dash-board', element: <Dashboard/>},
    { path: 'healthInfo', element: <HealthInfo/>},
    { path: 'calendar', element: <Calendar/>}
  ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
} 



export default App;
