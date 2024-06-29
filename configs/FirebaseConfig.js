// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvNTKJ29vMDAJh431efpUFa4caMD8WkKs",
  authDomain: "directoryhub-46b50.firebaseapp.com",
  projectId: "directoryhub-46b50",
  storageBucket: "directoryhub-46b50.appspot.com",
  messagingSenderId: "799411814676",
  appId: "1:799411814676:web:72aa9fbc48761157864201"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);