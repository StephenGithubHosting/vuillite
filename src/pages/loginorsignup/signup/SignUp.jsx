import React, { useEffect, useState } from 'react';
import { auth, database } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import ParticleBackground from "../../../components/particleBackground";
import './signup.scss';
import { app } from '../../../firebase/firebase';
import { Database, onValue } from 'firebase/database';
import { set, update, ref} from 'firebase/database';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Loading from '../../../components/loading/Loading';
function SignUp() {
  const [emailBar, setEmailBar] = useState(null);
  const [passwordBar, setPasswordBar] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisabled(true);
        // const refer2 = ref(database, `users/${user.uid}`);
        // onValue(refer2, (snapshot)=>{
        //     console.log(snapshot.val());
        // });
        setInterval(()=>{
          if (username == '' & email == '' && password == ''){
            window.location.href = '/posts';
          } else {
            null
          }
        }, 50);

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
  const [disabled, setDisabled] = useState(false);
  const [errorState, setErrorState] = useState(false);
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
    setDisabled(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user.uid;
        const refer = ref(database, `users/${userCredential.user.uid}`);
        set(refer, {
          username: username,
          pfp: 'default'
        }).then(()=>{
          window.location.href = '/posts';
          setUsername('');
          setEmail('');
          setPassword('');
        })        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        setDisabled(false);
        setErrorState(true);
        // ..
      });
    };
    return (
    <>
    <Loading mode={disabled}></Loading>
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
        {errorState ? 
        <>
            <div className="errSg">
              <p>Invalid Username, Email or Password</p>
            </div>
        </> 
        : null }
            <div className="buttonSignUp">
              <button onClick={handleSignUp} disabled={disabled}>Sign up.</button>
            </div>
            <br />
            <div className="loginbtn">
              <Link to='/'>
                <Typewriter
                  words={[`Already have an account? Sign in!`]}
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

export default SignUp;