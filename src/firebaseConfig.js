import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBsbLOOki4WrN4kMvLw-aqIfxB_3C2PMpI",
  authDomain: "seren-dfda2.firebaseapp.com",
  databaseURL: "https://seren-dfda2.firebaseio.com",
  projectId: "seren-dfda2",
  storageBucket: "seren-dfda2.appspot.com",
  messagingSenderId: "404740102522",
  appId: "1:404740102522:web:abee28b11625d2eee1dec3",
  measurementId: "G-12068CZWZ0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
