import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDCqiJ_Lc1Kh0fADY-_HQvsrzLQF22ThPw",
  authDomain: "book-santa-cc81f.firebaseapp.com",
  databaseURL: "https://book-santa-cc81f.firebaseio.com",
  projectId: "book-santa-cc81f",
  storageBucket: "book-santa-cc81f.appspot.com",
  messagingSenderId: "873356981176",
  appId: "1:873356981176:web:215c890efe96b7c155154d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
