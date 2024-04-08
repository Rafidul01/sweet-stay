// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-1ZTjNW9izKVbx_7C0-rnB4bwuPEFTHw",
  authDomain: "sweet-stay.firebaseapp.com",
  projectId: "sweet-stay",
  storageBucket: "sweet-stay.appspot.com",
  messagingSenderId: "122371300831",
  appId: "1:122371300831:web:77d92e3c1f96bd9942386a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;