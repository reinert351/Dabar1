import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6jonWbIcTw1xgCdmKNQrRH0ZltE_chR4",
  authDomain: "dabar-84286.firebaseapp.com",
  projectId: "dabar-84286",
  storageBucket: "dabar-84286.firebasestorage.app",
  messagingSenderId: "819032270575",
  appId: "1:819032270575:web:d055e51f7d614c21dedd1a",
  measurementId: "G-CV1M707YGK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

