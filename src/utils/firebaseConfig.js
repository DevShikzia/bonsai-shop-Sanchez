// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_oJen8FItmNAwyLDeEjtZtsYzSG3zrRA",
  authDomain: "bonsai-shop-d91af.firebaseapp.com",
  projectId: "bonsai-shop-d91af",
  storageBucket: "bonsai-shop-d91af.appspot.com",
  messagingSenderId: "184727361556",
  appId: "1:184727361556:web:b88c8b0dd792dca6b82f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
