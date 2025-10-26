// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT7tXYV22kwe6WNWAonp6OgBzHzzeb60E",
  authDomain: "fir-fighter-28828.firebaseapp.com",
  projectId: "fir-fighter-28828",
  storageBucket: "fir-fighter-28828.firebasestorage.app",
  messagingSenderId: "540165864397",
  appId: "1:540165864397:web:5a0f667f5a04524238a284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
