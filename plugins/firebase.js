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
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : "";

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
