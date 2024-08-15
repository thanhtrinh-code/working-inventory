// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvAXo7DHorNpl8hgUoYEImwRWu3azbGSU",
  authDomain: "inventorymanagement-c08bb.firebaseapp.com",
  projectId: "inventorymanagement-c08bb",
  storageBucket: "inventorymanagement-c08bb.appspot.com",
  messagingSenderId: "409255336949",
  appId: "1:409255336949:web:feb93234fbcedd0daf5ebc",
  measurementId: "G-PFSSX2WPQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export {db, auth, provider};