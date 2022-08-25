import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwW84Szm-IPdPYdiW-fiznTvoiJk0cwYQ",
  authDomain: "react-portfolio-ee3c7.firebaseapp.com",
  projectId: "react-portfolio-ee3c7",
  storageBucket: "react-portfolio-ee3c7.appspot.com",
  messagingSenderId: "432188616491",
  appId: "1:432188616491:web:daf941f4c562b2c73b9f6e",
  measurementId: "G-44W38BGCYG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
