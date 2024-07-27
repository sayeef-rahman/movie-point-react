// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-gN4W7k2POMLREXTzCdq8SPaXGGjAjh0",
  authDomain: "fixfilm-movies.firebaseapp.com",
  projectId: "fixfilm-movies",
  storageBucket: "fixfilm-movies.appspot.com",
  messagingSenderId: "853073212134",
  appId: "1:853073212134:web:842a27d71e446100e4c127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
