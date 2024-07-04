// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4Fhrfd9RPuUYpCR-sp2hQ3iLT9crcL8",
  authDomain: "proyecto-lenguajes-c3e72.firebaseapp.com",
  projectId: "proyecto-lenguajes-c3e72",
  storageBucket: "proyecto-lenguajes-c3e72.appspot.com",
  messagingSenderId: "287491897114",
  appId: "1:287491897114:web:bc990e609d5ffead711ea3"
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);

export { app, auth };