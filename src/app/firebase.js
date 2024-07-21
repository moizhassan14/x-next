// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGtPEGo-EpWTIE6MkhT9IRseimZ2IA2b8",
  authDomain: "x-next-aba02.firebaseapp.com",
  projectId: "x-next-aba02",
  storageBucket: "x-next-aba02.appspot.com",
  messagingSenderId: "462922883660",
  appId: "1:462922883660:web:0325717af6da5972620ae9",
  measurementId: "G-FNW9CWXXTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);