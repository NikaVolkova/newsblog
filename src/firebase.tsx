import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU9eAhuoyfS83kH0SXAcKyyRdXSB2rLas",
  authDomain: "newsblog-da291.firebaseapp.com",
  projectId: "newsblog-da291",
  storageBucket: "newsblog-da291.appspot.com",
  messagingSenderId: "307188015617",
  appId: "1:307188015617:web:84f86e6d9a1f864c289600",
  measurementId: "G-N85SXCQEEL",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { auth, db };

