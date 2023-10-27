// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv_HREQ6JhjYDxkv4agH41wAs8Ohcfczc",
  authDomain: "metaschool-segue.firebaseapp.com",
  projectId: "metaschool-segue",
  storageBucket: "metaschool-segue.appspot.com",
  messagingSenderId: "257782194668",
  appId: "1:257782194668:web:44784f98deea2f9503e0c9",
  measurementId: "G-RW1XW19KS7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
