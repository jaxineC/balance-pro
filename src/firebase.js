// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Cloud Firestore
// https://firebase.google.com/docs/firestore/quickstart?authuser=0#initialize
const firebaseConfig = {
  apiKey: "AIzaSyAjJMLWbOQRZbc28kbBapaaeuJf89OSYWc",
  authDomain: "balancepro-a7076.firebaseapp.com",
  projectId: "balancepro-a7076",
  storageBucket: "balancepro-a7076.appspot.com",
  messagingSenderId: "194292071224",
  appId: "1:194292071224:web:e30e38c38c69be178f9fcd",
  measurementId: "G-0MK5FSND3P",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
