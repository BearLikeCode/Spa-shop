import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyClb0HI_E0xrohOGCwQsb-BUbUwI24-1oA",
    authDomain: "nextjsblog-4e4bd.firebaseapp.com",
    databaseURL: "https://nextjsblog-4e4bd.firebaseio.com",
    projectId: "nextjsblog-4e4bd",
    storageBucket: "nextjsblog-4e4bd.appspot.com",
    messagingSenderId: "985489808714",
    appId: "1:985489808714:web:e675a4f0c8f15556a0b5b3",
    measurementId: "G-67XZX78DLF"
  };

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;