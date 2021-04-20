import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCh3POp6cDfbUw2S14HOaH108D9yarVGFk",
  authDomain: "twitter-clone-c30c8.firebaseapp.com",
  databaseURL: "https://twitter-clone-c30c8-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-c30c8",
  storageBucket: "twitter-clone-c30c8.appspot.com",
  messagingSenderId: "911959394615",
  appId: "1:911959394615:web:3ae1288258976f42d732b2",
  measurementId: "G-TP6C0CT2Z9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
