import firebase from 'firebase';
require('@firebase/firestore');


var firebaseConfig = {
    apiKey: "AIzaSyDVQGoUWmGmped6d0Glomk4xYwLR8e-AS0",
    authDomain: "barter-system-187b3.firebaseapp.com",
    projectId: "barter-system-187b3",
    storageBucket: "barter-system-187b3.appspot.com",
    messagingSenderId: "773487922669",
    appId: "1:773487922669:web:bbc095739370b16ba96be4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();