import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDSBlDb1rKw8D7zkY0RHI9aJwQiWnZX-DU",
    authDomain: "svelte-users-cfde6.firebaseapp.com",
    projectId: "svelte-users-cfde6",
    storageBucket: "svelte-users-cfde6.appspot.com",
    messagingSenderId: "53818408429",
    appId: "1:53818408429:web:08b292831ade829089fbe4",
    measurementId: "G-QHZZSNEQPE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()
  