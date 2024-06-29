// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2c747.firebaseapp.com",
  projectId: "mern-blog-2c747",
  storageBucket: "mern-blog-2c747.appspot.com",
  messagingSenderId: "466798332389",
  appId: "1:466798332389:web:2d98f9f10a170b8a8e870c",
  measurementId: "G-BGH1H3141B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);