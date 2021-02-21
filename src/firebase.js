import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJWv7VXnJqcm4iku9SHI442lpYGXbTAVs",
  authDomain: "instagram-clone-e4c32.firebaseapp.com",
  projectId: "instagram-clone-e4c32",
  storageBucket: "instagram-clone-e4c32.appspot.com",
  messagingSenderId: "1084840298861",
  appId: "1:1084840298861:web:922e71acd631f2c7443264",
  measurementId: "G-F4Q60QEDGP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
