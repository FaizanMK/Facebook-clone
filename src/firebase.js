import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCazX4w8hh-c-YajEGmkWPBRg4QVWJGBl4",
  authDomain: "facebook-clone-40907.firebaseapp.com",
  projectId: "facebook-clone-40907",
  storageBucket: "facebook-clone-40907.appspot.com",
  messagingSenderId: "846056990218",
  appId: "1:846056990218:web:b9cd98d406915a228ee1f3",
  measurementId: "G-ZGYE8S0G7L",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider(); //this will tell the firebase that we want google login service

export { app, storage, provider, auth };
export default db;
