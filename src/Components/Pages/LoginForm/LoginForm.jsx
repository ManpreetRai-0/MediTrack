import React from 'react';
import { useState } from 'react';
import './LoginForm.css';

//import {FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
//import user_icon from '../Assets/profile.png';
//import email_icon from '../Assets/email.png';
//import lock_icon from '../Assets/lock.png';

export function LoginForm() {

    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');
    const [user, setUser] = useState(false);

    const navigate = useNavigate();
    const handleClick = () => {
        alert('No User');
        setUser(true);
        user ? navigate("/navi") : alert('No User');;
    }


    return (
        <div className="background">

            <div className="container">
                <div className="login">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div>
                    <div className="input">
                        <MdEmail />
                        <input type="email"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <RiLockPasswordFill />
                        <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="forgot-password">Lost Password? <button>Click Here!</button></div>
                <div className="submit-container">
                    <div className="Submit"><button className="Submit-Button" onClick={handleClick} >Login</button></div>
                    {user && <div className="submit"><button>Sign Up</button></div>}
                </div>
            
            </div>
        </div>

    );
};

export default LoginForm;