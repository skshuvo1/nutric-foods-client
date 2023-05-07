// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYhS0okeiN8rspaWljjfHANGo8z-3gfN4",
  authDomain: "the-nutric-food.firebaseapp.com",
  projectId: "the-nutric-food",
  storageBucket: "the-nutric-food.appspot.com",
  messagingSenderId: "722707849229",
  appId: "1:722707849229:web:d78755b37f18178e52b544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;