import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSUwPJHtRlKSOMtVwtFWjLQnra3u5GJ7Y",
  authDomain: "meditrack-d0532.firebaseapp.com",
  projectId: "meditrack-d0532",
  storageBucket: "meditrack-d0532.appspot.com",
  messagingSenderId: "483396025420",
  appId: "1:483396025420:web:af91d922c30e17168a88e9",
  measurementId: "G-BJ174GC4S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

