
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKHBdcj4mIFZjXsyoSWohpGfQhsZ2lAOU",
  authDomain: "findo-client-ca633.firebaseapp.com",
  projectId: "findo-client-ca633",
  storageBucket: "findo-client-ca633.appspot.com",
  messagingSenderId: "454775464682",
  appId: "1:454775464682:web:713f66868d1ad403f7ed93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);