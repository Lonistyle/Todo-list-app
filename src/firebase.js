
import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyAvUA8bwOhIeV28tKemClcddBex3Rn7izo",
    authDomain: "lonnie-todolist.firebaseapp.com",
    projectId: "lonnie-todolist",
    storageBucket: "lonnie-todolist.appspot.com",
    messagingSenderId: "334351172306",
    appId: "1:334351172306:web:44e9702e0f3a95a948a30b",
    measurementId: "G-2C5T4KPHMG"
  });
  
  const db = firebaseApp.firestore();
  export default db;

 
 