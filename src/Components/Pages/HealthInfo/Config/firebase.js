import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAt4w7tsP2MBU329B7VHMtNC1QHQ_KJAdM",
  authDomain: "test-93238.firebaseapp.com",
  projectId: "test-93238",
  storageBucket: "test-93238.appspot.com",
  messagingSenderId: "609439793439",
  appId: "1:609439793439:web:aba135225f3d697334702a",
  measurementId: "G-GCJ94NC1LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

