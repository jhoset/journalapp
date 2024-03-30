// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5MKc4fzmrINYu-LlUbS_yVw14BzYoUZE",
    authDomain: "react-course-9da14.firebaseapp.com",
    projectId: "react-course-9da14",
    storageBucket: "react-course-9da14.appspot.com",
    messagingSenderId: "590187339471",
    appId: "1:590187339471:web:5177f879abc448771ba1ba"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);