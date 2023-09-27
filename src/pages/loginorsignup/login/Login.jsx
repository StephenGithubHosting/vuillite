import React, { useState } from 'react';
import ParticleBackground from "../../../components/particleBackground";
import './login.scss';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';

function Login() {
    const [emailBar, setEmailBar] = useState(null);
    const [passwordBar, setPasswordBar] = useState(null);
    const [error, setError] = useState(null);
    const [errorState, setErrorState] = useState(false);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                window.location.href='/posts';
            } else {
               null
            }
        });

        return () => {
            listen();
        };
    }, []);

    const handleEmail = (params)=>{
        setEmailBar(params);
    };
    const handlePassword = (param) => {
        setPasswordBar(param);
    };
    const handleLogIn = () =>{
        signInWithEmailAndPassword(auth, emailBar, passwordBar)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // window.location.href ='/';
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                setErrorState(true);
            });
    };
    const handleError = () => {
    
    };
  return (
    <>
    <ParticleBackground></ParticleBackground>
    <div className="loginWrapper">

        <div className="login">
            <div className="title">
                <h1>Log in into vuillite.</h1>
            </div>
            <div className="loginForm">
                <div className="email">
                          <input type="text" placeholder='Email' onChange={(e) => {handleEmail(e.target.value)}}/>
                </div>
                <div className="password">
                    <input type="password" placeholder='Password' onChange={(e)=>{handlePassword(e.target.value)}}/>
                </div>
            </div>
            {errorState
            ?<div className="err">
                <p>Email or password is incorrect.</p>
            </div>

            :null}
         
                <div className="button">
                    <button onClick={handleLogIn}>Log in.</button>
                </div>
                <div className="signup">
                    <Link to='/signup'>
                    <Typewriter
                    words={[`Don't have an account? Sign up.`]}
                loop={1}
                    cursor={true}
                    cursorBlinking={false}
                    ></Typewriter>
                    </Link>
                </div>
        </div>
    </div>
    </>
  )
}

export default Login;