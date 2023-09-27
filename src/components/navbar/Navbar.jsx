import React from 'react';
import VuilliteLogo from './images/flatNewLogo.png';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import AuthDetails from '../../firebase/auth/authController';
import defaultImage from './images/default.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';``
import { faMagnifyingGlass, faPlus, faHome, faMessage, faImage } from '@fortawesome/free-solid-svg-icons';``
function Navbar() {
  return (
    <div className='Navbar'>
      <div className="imageLogo">
        <img src={VuilliteLogo} alt="" />
        
      </div>
      <div className="links">
        <Link to='/'><FontAwesomeIcon icon={faHome} /></Link>
        <Link to='/chats'><FontAwesomeIcon icon={faMessage} /></Link>
        <Link to='/posts'><FontAwesomeIcon icon={faImage} /></Link>
        <Link to='/posts/new'><FontAwesomeIcon icon={faPlus} /></Link>
        <Link to='/browse'><FontAwesomeIcon icon={faMagnifyingGlass}/></Link>
        <div className="pfp">
          <AuthDetails></AuthDetails>
        </div>
      </div>
    </div>
  )
}

export default Navbar;