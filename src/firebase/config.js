// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPQbpal0TEli09g4mhtmzSSNDVzHJEFzA",
  authDomain: "netflix-clon-react-59a63.firebaseapp.com",
  projectId: "netflix-clon-react-59a63",
  storageBucket: "netflix-clon-react-59a63.appspot.com",
  messagingSenderId: "711662256967",
  appId: "1:711662256967:web:aab57f4dd8838a6431c262",
  measurementId: "G-CCQNWDMVH8"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)