import React, { useEffect, useState } from 'react'
import { auth } from '../../../firebase/firebase';
import { database } from '../../../firebase/firebase';
import { getDatabase, set, ref, onValue, get } from "firebase/database";
import { onAuthStateChanged } from 'firebase/auth';
function Rightsettings(props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {

      }
    });

    return () => {
      listen();
    };
  }, []);


  return (
    <>
      {props.setting === 'account' ? 
      <>
        <div className="accountSettings">
          <div className="accountSettingsTitle">
            <h1>Account Settings</h1>
            </div>
            <div className="accountDetails">
              <div className="emailOfAccount">
                <h2>Email: {email}</h2>
                </div>
                <div className="passwordOfAccount">
                    <h2>Password: ******</h2>
                </div>
                <div className="buttonEdit">
                <button>Change Email</button>
                <button>Change password</button>
                </div>
            </div>
        </div>
      </> 
      : props.setting === 'profile' ? <>profile</>
      : props.setting === 'privacy' ? <>privacy</> 
      : props.setting === 'advanced' ? <>advanced</> 
      : null}

    </>
  )
}

export default Rightsettings