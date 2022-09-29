// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY1QJEfcr9mhP5crq1tbQ7-omjcx4_jMs",
  authDomain: "walker-shots.firebaseapp.com",
  projectId: "walker-shots",
  storageBucket: "walker-shots.appspot.com",
  messagingSenderId: "615076553694",
  appId: "1:615076553694:web:568e0198827f123be4b34f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);