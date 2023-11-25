import "./index.css";

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmXUqkTOY3dWUqLfMIqabaCHko_BpeitU",
  authDomain: "band-gigs.firebaseapp.com",
  projectId: "band-gigs",
  storageBucket: "band-gigs.appspot.com",
  messagingSenderId: "865977140194",
  appId: "1:865977140194:web:53b41ab9b740b684e7afbb",
  measurementId: "G-DXQ35KEDEV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
