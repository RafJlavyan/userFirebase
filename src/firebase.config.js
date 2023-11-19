// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVupH7YlslUl6yIzZoQ6Bu0c_npQtXyX8",
  authDomain: "my-first-project-with-fi-39e39.firebaseapp.com",
  projectId: "my-first-project-with-fi-39e39",
  storageBucket: "my-first-project-with-fi-39e39.appspot.com",
  messagingSenderId: "992190930222",
  appId: "1:992190930222:web:5cf75ee4edaf4f9a476ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)