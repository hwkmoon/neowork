import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgmlGXCTvLrg7K0TYgSivd6Ah1K-2kkvw",
  authDomain: "neowork-53422.firebaseapp.com",
  projectId: "neowork-53422",
  storageBucket: "neowork-53422.appspot.com",
  messagingSenderId: "451403441292",
  appId: "1:451403441292:web:f4f8af2a5244202f91c7a9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};