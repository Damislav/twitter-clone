import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh3POp6cDfbUw2S14HOaH108D9yarVGFk",
  authDomain: "twitter-clone-c30c8.firebaseapp.com",
  projectId: "twitter-clone-c30c8",
  storageBucket: "twitter-clone-c30c8.appspot.com",
  messagingSenderId: "911959394615",
  appId: "1:911959394615:web:e02b7b2ce4b7a44fd732b2",
  measurementId: "G-507K05ZJBX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
