// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv773LlX_tqn0fZH49oFmrRX3i6P8oyaM",
  authDomain: "movie-point-23124.firebaseapp.com",
  projectId: "movie-point-23124",
  storageBucket: "movie-point-23124.appspot.com",
  messagingSenderId: "1042360783250",
  appId: "1:1042360783250:web:0f09ea29e2beaf1e83314b",
  measurementId: "G-VFMDQRW8QE",
};
// const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.REACT_APP_PROJECT_ID,
//   storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: import.meta.env.REACT_APP_APP_ID,
//   measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID,
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const firebaseAnalytics = getAnalytics(app);
