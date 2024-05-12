import React from 'react';
import { useState } from 'react';
import './LoginForm.css';

//import {FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Config/firebase';

//import user_icon from '../Assets/profile.png';
//import email_icon from '../Assets/email.png';
//import lock_icon from '../Assets/lock.png';


export function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedin, setSignedin] = useState(false);
    const [signinFail, setSigninFail] = useState('')

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    //const userCredentials;

    function handlePassword(){
        sendPasswordResetEmail(auth, email)
        .then(() => {

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    function resetError (){
        setEmailError('');
        setPasswordError('');
    }

    async function handleSignin(){
        //resetError();
        try{
            await signInWithEmailAndPassword(auth, email, password).then((userCredentials) =>{
                const user = userCredentials
                navigate("/navi/dash-board");
                signedin(true);
            });
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch(errorCode){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(errorMessage);
                    break;
                case "auth/wrong-password":
                    setPasswordError(errorMessage);
                    break;
            }
            setSigninFail(true);
            //userCredentials.user ? navigate("/navi/dash-board") : alert('No User');
        }
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
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input" >
                        <RiLockPasswordFill />
                        <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="LogButton">
                    <div className="submit-container">
                        <div className="Submit"><button className="Submit-Button" onClick={handleSignin} >Login</button></div>
                        <div className="forgot-signup">
                            {signinFail && <button onClick={handlePassword}>Lost Password?</button>}
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

    );
};

export default LoginForm;