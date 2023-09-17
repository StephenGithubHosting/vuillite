import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import './authController.scss';
import { Link } from "react-router-dom";
import { onValue, ref, set } from "firebase/database";
import { database } from "../firebase";
import defaultImage from './default.png';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const [userDOM, setUserDOM] = useState('');
    const [mrs, setMrs] = useState('');
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                setMrs(user.uid);
                const refUsers = ref(database, `users/${user.uid}`);
                onValue(refUsers, (snapshot) => {
                    console.log(snapshot.val())
                    setUserDOM(snapshot.val().username);
                });
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            {authUser ? (
                <>
                {/* <Link to='/settings'> */}
                <Link to='/settings'>
                    <img src={defaultImage} alt=""/>
                    <p>{userDOM}</p>
                </Link>
                {/* </Link> */}
                </>
            ) : (
                <>
                <Link to='/login'>
                    <p>Log in.</p>
                </Link>
                </>
            )}
            </>
    );
};

export default AuthDetails;