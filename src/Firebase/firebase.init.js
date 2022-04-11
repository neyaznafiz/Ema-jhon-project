// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhiCTFmstC_WBAa2rfYHxLqtepGK3WJPE",
  authDomain: "ema-jhon-project-f1f64.firebaseapp.com",
  projectId: "ema-jhon-project-f1f64",
  storageBucket: "ema-jhon-project-f1f64.appspot.com",
  messagingSenderId: "43023464900",
  appId: "1:43023464900:web:be4a34d276fc09d6c38c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app)

export default auth
