// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4T4fGayBZQ3bEAJSbZRuxxL2mMBpfLoo",
  authDomain: "catagory-jesmine-a9.firebaseapp.com",
  projectId: "catagory-jesmine-a9",
  storageBucket: "catagory-jesmine-a9.firebasestorage.app",
  messagingSenderId: "977318646875",
  appId: "1:977318646875:web:eff6fb143bce298ed9db7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
