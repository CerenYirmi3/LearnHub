import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9HslShvB1fr6VTZDP7FjeF64ep2yMxA0",
  authDomain: "learnhub-480c7.firebaseapp.com",
  projectId: "learnhub-480c7",
  storageBucket: "learnhub-480c7.appspot.com",
  messagingSenderId: "893129682501",
  appId: "1:893129682501:web:27f52cbe58e62a7728fd2c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH  = getAuth(FIREBASE_APP);
export const FIREBASE_DB  = getFirestore(FIREBASE_APP);

