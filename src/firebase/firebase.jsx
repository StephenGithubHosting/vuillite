// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_apiKey,
    authDomain: import.meta.env.VITE_REACT_authDomain,
    projectId: import.meta.env.VITE_REACT_projectId,
    storageBucket: import.meta.env.VITE_REACT_storageBucket,
    messagingSenderId: import.meta.env.VITE_REACT_messagingSenderId,
    appId: import.meta.env.VITE_REACT_appId
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);