// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMSh59GGwvZT7h9MORKIjzuknnq4DHwZU",
  authDomain: "prepwise-fec21.firebaseapp.com",
  projectId: "prepwise-fec21",
  storageBucket: "prepwise-fec21.firebasestorage.app",
  messagingSenderId: "335027424307",
  appId: "1:335027424307:web:77bda17deb355fa5522746",
  measurementId: "G-L5S9S2NNVG",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
