// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZQEOMCNvQrE6Kz83-5SKd8pQpxrm4qYc",
  authDomain: "real-estate-land-assaingment.firebaseapp.com",
  projectId: "real-estate-land-assaingment",
  storageBucket: "real-estate-land-assaingment.appspot.com",
  messagingSenderId: "488856200711",
  appId: "1:488856200711:web:15db23977c307dac2a6ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app