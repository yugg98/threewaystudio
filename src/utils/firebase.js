// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 



const firebaseConfig = {
  apiKey: "AIzaSyBrz0OkHTZKLEsc0t1XmEbZuXCPp69HanI",
  authDomain: "web3carnival-59f83.firebaseapp.com",
  projectId: "web3carnival-59f83",
  storageBucket: "web3carnival-59f83.appspot.com",
  messagingSenderId: "410145969620",
  appId: "1:410145969620:web:ec5f33bd47086f50253241",
  measurementId: "G-ZXJ1Z1Z2L5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
