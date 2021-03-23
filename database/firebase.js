import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDC5CxEysrTOewMsBhvm8ZONbFK5raXlfY",
  authDomain: "react-native-firebase-4f295.firebaseapp.com",
  projectId: "react-native-firebase-4f295",
  storageBucket: "react-native-firebase-4f295.appspot.com",
  messagingSenderId: "767774793530",
  appId: "1:767774793530:web:096cdba036a5c56b55fa03"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default{
  firebase,
  db,
  
};