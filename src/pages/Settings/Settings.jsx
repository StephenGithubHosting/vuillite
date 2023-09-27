import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import './settings.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faHome, faMessage, faImage, faUsers, faGears, faLock, faUser, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import Rightsettings from './rightsettings/Rightsettings';
import Loading from '../../components/loading/Loading';
import { onAuthStateChanged } from 'firebase/auth';
function Settings() {
  const [settingMode, setSettingMode] = useState('account');
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        user.displayName ='cool';
        console.log(user)
      } else {

      }
    });

    return () => {
      listen();
    };
  },[]);
  return (
    <>
    {/* <div>
      <h1>Sorry.. This app is on progress..</h1>
      <h2>For now you only can log in and log out..</h2>
      <button onClick={()=>{signOut(auth), window.location.href='/login'}}>Log out.</button>
    </div> */
    }
    <Loading mode={loading}></Loading>
    <div className="Settings">
      <div className="leftNavbar">
        <div className="account" onClick={()=>{setSettingMode('account')}}>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <h1>Account</h1>
        </div>
        <div className="profile" onClick={()=>{setSettingMode('profile')}}>
          <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
          <h1>Profile</h1>
        </div>
        <div className="privacy" onClick={()=>{setSettingMode('privacy')}}>
          <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          <h1>Privacy</h1>
        </div>
          <div className="advanced" onClick={()=>{setSettingMode('advanced')}}>
            <FontAwesomeIcon icon={faGears}></FontAwesomeIcon>
            <h1>Advanced</h1>
          </div>
          <div className="signout" onClick={()=>{signOut(auth); window.location.href = '/login';}}>
            <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
            <h1>Sign out</h1>
          </div>
      </div>
      <div className="contentEdit">
          <Rightsettings setting={settingMode}></Rightsettings>
      </div>
      
    </div>
    </>
  )
}

export default Settings;