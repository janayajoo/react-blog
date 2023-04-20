// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsyJQ3T_ks3nl9iaA-k2GhKCUyrWy4GkU",
  authDomain: "unisabana-class-react.firebaseapp.com",
  projectId: "unisabana-class-react",
  storageBucket: "unisabana-class-react.appspot.com",
  messagingSenderId: "17134130250",
  appId: "1:17134130250:web:e10d76a8206ce838dbc2b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);