import React, { useEffect, useState } from 'react';
import { auth, database } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import ParticleBackground from "../../../components/particleBackground";
import './signup.scss';
import { app } from '../../../firebase/firebase';
import { Database } from 'firebase/database';
import { set, update, ref} from 'firebase/database';
import { onAuthStateChanged, signOut } from "firebase/auth";
function SignUp() {
  const [emailBar, setEmailBar] = useState(null);
  const [passwordBar, setPasswordBar] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = '/posts';
      } else {
        null
      }
    });

    return () => {
      listen();
    };
  }, []);

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleUsernameChange = (user) => {
      setUsername(user);
  }
  const handleEmailChange = (email)=>{
      setEmail(email);
  }
  const handlePasswordChange = (pass) => {
      setPassword(pass);
  }
  const handleSignUp = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user.uid;
        const refer = ref(database, `users/${userCredential.user.uid}`);
        set(refer, {
          username: username,
          pfp: 'default'
        })        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    };
    return (
    <>
    <ParticleBackground></ParticleBackground>
    <div className="signupWrapper">
      <div className="signup">
        <div className="title">
          <h1>Sign up into vuillite.</h1>
        </div>
        <div className="signUpForm">
            <div className="username">
              <input type="text" name="" id="" placeholder='Username' onChange={(e)=>{handleUsernameChange(e.target.value)}}/>  
            </div> 
            <div className="email">
              <input type="text" name="" id="" placeholder='Email' onChange={(e) => { handleEmailChange(e.target.value) }} />
            </div>
            <div className="password">
              <input type="password" name="" id="" placeholder='Password' onChange={(e) => { handlePasswordChange(e.target.value) }} />
            </div>
        </div>
            <div className="buttonSignUp">
              <button onClick={handleSignUp}>Sign up.</button>
            </div>
      </div>
    </div>
    </>
  )
}

export default SignUp;