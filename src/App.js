import './App.css';
import LoginForm from './Components/Pages/LoginForm/LoginForm.jsx';
import { Dashboard } from './Components/Pages/Dashboard/Dashboard.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  { path: '/', element: <LoginForm/>},
  { path: 'dash-board', element: <Dashboard/>}
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
} 



export default App;
