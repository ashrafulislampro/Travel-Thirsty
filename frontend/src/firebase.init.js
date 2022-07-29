// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuW9zeYjbW3Js0qTSB4fIS12Yx0qnsbGY",
  authDomain: "travel-thirsty.firebaseapp.com",
  projectId: "travel-thirsty",
  storageBucket: "travel-thirsty.appspot.com",
  messagingSenderId: "1023941103938",
  appId: "1:1023941103938:web:53b2274532a4a7b34cf8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;