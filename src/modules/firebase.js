import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiOAp7GwAQGhLkLLTBr9wb4R-VOF1ZdFk",
  authDomain: "clone-1b668.firebaseapp.com",
  projectId: "clone-1b668",
  storageBucket: "clone-1b668.appspot.com",
  messagingSenderId: "246839653890",
  appId: "1:246839653890:web:438491e43b27a8246a591b",
  measurementId: "G-KJ51QDNQ00",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
