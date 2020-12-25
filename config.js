import * as firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyB0u_kB7GESfuaRuXjbP6cwsab2h2BwHNc",
    authDomain: "library-management-app-43844.firebaseapp.com",
    projectId: "library-management-app-43844",
    storageBucket: "library-management-app-43844.appspot.com",
    messagingSenderId: "1078982105106",
    appId: "1:1078982105106:web:20155d175dfa5379e060cb"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();