import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBPDCWUPCgILuMxlqZYQq3UZ0pZb2shnVg",
  authDomain: "barterother.firebaseapp.com",
  projectId: "barterother",
  storageBucket: "barterother.appspot.com",
  messagingSenderId: "48498279451",
  appId: "1:48498279451:web:41278e8aa925579b0864be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();