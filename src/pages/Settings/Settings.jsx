import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

function Settings() {
  return (
    <div>
      <h1>Sorry.. This app is on progress..</h1>
      <h2>For now you only can log in and log out..</h2>
      <button onClick={()=>{signOut(auth), window.location.href='/login'}}>Log out.</button>
      </div>
  )
}

export default Settings;