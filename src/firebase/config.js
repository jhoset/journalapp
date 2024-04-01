// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// console.log( import.meta.env.VITE_PRIVATE_PROPERTY )
// console.log(process.env.VITE_PRIVATE)

const {VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID } = getEnvironments();

// Your web app's Firebase configuration
//? FIREBASE DEV / PRODUCTION
// const firebaseConfig = {
//     apiKey: "AIzaSyB5MKc4fzmrINYu-LlUbS_yVw14BzYoUZE",
//     authDomain: "react-course-9da14.firebaseapp.com",
//     projectId: "react-course-9da14",
//     storageBucket: "react-course-9da14.appspot.com",
//     messagingSenderId: "590187339471",
//     appId: "1:590187339471:web:5177f879abc448771ba1ba"
// };

//? TESTING
// const firebaseConfig = {
//     apiKey: "AIzaSyACRShsocsjdnHu2dkjD07wCX1EOP7lkpA",
//     authDomain: "testing-6f9ab.firebaseapp.com",
//     projectId: "testing-6f9ab",
//     storageBucket: "testing-6f9ab.appspot.com",
//     messagingSenderId: "1063024096390",
//     appId: "1:1063024096390:web:8dd5651e4826cef47f0d07"
//   };

const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID
  };

  // console.log(firebaseConfig);
  

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);