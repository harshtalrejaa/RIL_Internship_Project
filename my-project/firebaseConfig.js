// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf4MfMWs8ssZMDHuD_rwej_Y838_RTn1k",
  authDomain: "ril-internship-project.firebaseapp.com",
  projectId: "ril-internship-project",
  storageBucket: "ril-internship-project.appspot.com",
  messagingSenderId: "231836336479",
  appId: "1:231836336479:web:ad6ee8efa65ea5ee87b6ea",
  measurementId: "G-ZY4WMPYD0P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };