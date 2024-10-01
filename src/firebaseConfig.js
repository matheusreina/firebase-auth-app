import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyC5qNfibc0AEZHHlMtICVC03ZlXt1zTK1s",
  authDomain: "fir-auth-app-ed43a.firebaseapp.com",
  projectId: "fir-auth-app-ed43a",
  storageBucket: "fir-auth-app-ed43a.appspot.com",
  messagingSenderId: "737178725340",
  appId: "1:737178725340:web:bad1b658ed644fb643fd19",
  measurementId: "G-GSTL5Y147S",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
