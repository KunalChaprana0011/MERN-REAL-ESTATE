// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-373e5.firebaseapp.com",
  projectId: "realestate-373e5",
  storageBucket: "realestate-373e5.firebasestorage.app",
  messagingSenderId: "556995863615",
  appId: "1:556995863615:web:a0f0df1028f6ffa6c5048a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);