// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCvPonNZ1hxxPAEwjlsgT6MQscY1_jkuUw",
  authDomain: "coffee-store-ef42d.firebaseapp.com",
  projectId: "coffee-store-ef42d",
  storageBucket: "coffee-store-ef42d.appspot.com",
  messagingSenderId: "380889506021",
  appId: "1:380889506021:web:667d43eed49845278db40c",
  measurementId: "G-4VV2MN79LL"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
