// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-app-ec8ed.firebaseapp.com",
  projectId: "estate-app-ec8ed",
  storageBucket: "estate-app-ec8ed.appspot.com",
  messagingSenderId: "185286726003",
  appId: "1:185286726003:web:3d93a10171efa15e7c3506",
  measurementId: "G-RCKWB049KH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
