// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 



const firebaseConfig = {
  apiKey: "AIzaSyABzjIhhCaWEKeUl37NPzQlML1WA9c46uE",
  authDomain: "threewaystudio-1563f.firebaseapp.com",
  projectId: "threewaystudio-1563f",
  storageBucket: "threewaystudio-1563f.appspot.com",
  messagingSenderId: "596547304862",
  appId: "1:596547304862:web:9e6d1622119e693599aa8f",
  measurementId: "G-TYE869MYSY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
