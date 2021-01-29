
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";



const firebaseConfig = {
    apiKey: "AIzaSyBYbJ9lsSttLvvQtNJKss24b49c3xP8BlE",
    authDomain: "employees-feedback-98890.firebaseapp.com",
    projectId: "employees-feedback-98890",
    storageBucket: "employees-feedback-98890.appspot.com",
    messagingSenderId: "1079516831654",
    appId: "1:1079516831654:web:7af714e419a38e2a4e7967"
  };



firebase.initializeApp(firebaseConfig)

export default firebase;