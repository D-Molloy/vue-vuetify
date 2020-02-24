import firebase from 'firebase/app'
import "firebase/firestore"


var firebaseConfig = {
  apiKey: "AIzaSyDRHqfo9Fx8hqx_itQA1aEQneqir7FjJpY",
  authDomain: "vueify-demo.firebaseapp.com",
  databaseURL: "https://vueify-demo.firebaseio.com",
  projectId: "vueify-demo",
  storageBucket: "vueify-demo.appspot.com",
  messagingSenderId: "1016636881996",
  appId: "1:1016636881996:web:cac5b75c934e788e59c8e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();

export default db;