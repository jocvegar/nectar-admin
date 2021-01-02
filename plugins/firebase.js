import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = require("../config");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId,
  appId: config.firebase.appId,
  measurementId: config.firebase.measurementId
};
// Initialize Firebase
!firebase.apps || !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : "";

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
// const currentUser = auth.currentUser;

export { db, auth, firebase };
