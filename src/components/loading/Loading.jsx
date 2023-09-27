import React from 'react';
import './Loading.scss';
import logo from './../navbar/images/flatNewLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = (props) => {
  return (
    <>
        {props.mode ?
        
        <div className="Loading">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="loadingBar">
                <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
            </div>
        </div> :
        null
        }
    </>
  )
}

export default Loading;