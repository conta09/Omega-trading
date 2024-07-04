// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQKQ6XCEP0DMsaQfgjtmMwnghMQ5-fz-k",
  authDomain: "omega-trading.firebaseapp.com",
  projectId: "omega-trading",
  storageBucket: "omega-trading.appspot.com",
  messagingSenderId: "980347060957",
  appId: "1:980347060957:web:f223d8aa7009c6cf5cd134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithPopup, provider, db, doc, setDoc };