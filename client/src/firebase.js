import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tugas-16e18.firebaseapp.com",
  projectId: "tugas-16e18",
  storageBucket: "tugas-16e18.firebasestorage.app",
  messagingSenderId: "639321596487",
  appId: "1:639321596487:web:95fcfb73f13195f3410762",
  measurementId: "G-J568ZGFRCF"
};

export const app = initializeApp(firebaseConfig);
