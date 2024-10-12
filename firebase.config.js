// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfIty5cGP9sUc9JNSMRrx6VmPEbodDsQ",
  authDomain: "actividad-pi.firebaseapp.com",
  projectId: "actividad-pi",
  storageBucket: "actividad-pi.appspot.com",
  messagingSenderId: "644363809031",
  appId: "1:644363809031:web:674682b499e1b9a5efd5a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);