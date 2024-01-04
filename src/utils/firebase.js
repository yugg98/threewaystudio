// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 



const firebaseConfig = {
  apiKey: "AIzaSyBF49IKK6jHV1bufiKavX8v70mWuvcHX9s",
  authDomain: "threewaystudio-b6ef7.firebaseapp.com",
  projectId: "threewaystudio-b6ef7",
  storageBucket: "threewaystudio-b6ef7.appspot.com",
  messagingSenderId: "227430121650",
  appId: "1:227430121650:web:4bf80b6900e3dd976249ab",
  measurementId: "G-4F5CEGTK4D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
