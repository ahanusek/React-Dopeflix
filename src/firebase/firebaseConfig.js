import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAkMCRnAKUlFKoeXfNuwgv_CCmXDUklH_k",
  authDomain: "dopeflix-redux.firebaseapp.com",
  databaseURL: "https://dopeflix-redux.firebaseio.com",
  projectId: "dopeflix-redux",
  storageBucket: "dopeflix-redux.appspot.com",
  messagingSenderId: "203203552857"
};

firebase.initializeApp(config);

export default firebase;
