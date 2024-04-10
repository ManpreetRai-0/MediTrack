import React from 'react';
import './LoginForm.css';

import {FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
//import user_icon from '../Assets/profile.png';
//import email_icon from '../Assets/email.png';
//import lock_icon from '../Assets/lock.png';

const LoginForm = () => {

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <MdEmail />
                    <input type="email" />
                </div>
                <div className="input">
                    <RiLockPasswordFill />
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <button>Click Here!</button></div>
            <div className="submit-container">
                <div className="submit"><button>Sign Up</button></div>
                <div className="submit"><button>Login</button></div>
            </div>
        </div>
    );
};

export default LoginForm;