import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnQu8NyXXddCDiXMlo71Vwn-KUPqjNAA",
  authDomain: "resume-builder-c9c01.firebaseapp.com",
  projectId: "resume-builder-c9c01",
  storageBucket: "resume-builder-c9c01.appspot.com",
  messagingSenderId: "447338692579",
  appId: "1:447338692579:web:14e2d4dcbbf6a37eeaaad6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);