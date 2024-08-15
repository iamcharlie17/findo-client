// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgVFk_2ek7p2FLBolZqw1COFbbExjRn1Y",
  authDomain: "findo-client.firebaseapp.com",
  projectId: "findo-client",
  storageBucket: "findo-client.appspot.com",
  messagingSenderId: "807421446020",
  appId: "1:807421446020:web:a9a723670fb313bb53bfd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);