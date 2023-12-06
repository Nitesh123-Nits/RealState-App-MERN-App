
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-stack-61d6f.firebaseapp.com",
  projectId: "mern-stack-61d6f",
  storageBucket: "mern-stack-61d6f.appspot.com",
  messagingSenderId: "688059519461",
  appId: "1:688059519461:web:86581a765e74e28fc69f0c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);