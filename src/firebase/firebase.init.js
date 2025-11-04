// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtyI2QxuRsr01EWRJgZrQA2t3a6fAIW8E",
  authDomain: "smart-deals-dfbd2.firebaseapp.com",
  projectId: "smart-deals-dfbd2",
  storageBucket: "smart-deals-dfbd2.firebasestorage.app",
  messagingSenderId: "158612128061",
  appId: "1:158612128061:web:cecb2b4a6dc4a484e54554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);