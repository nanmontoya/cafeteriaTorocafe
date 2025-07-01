// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk8V1gmkMYQkvMfyHluRLRm-z6AcWapf4",
  authDomain: "torocafe-78491.firebaseapp.com",
  projectId: "torocafe-78491",
  storageBucket: "torocafe-78491.firebasestorage.app",
  messagingSenderId: "277196893553",
  appId: "1:277196893553:web:3dc51a57e8b6a940251ad0",
  measurementId: "G-J69K463VYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);