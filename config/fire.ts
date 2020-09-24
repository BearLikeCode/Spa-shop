import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAX45nlMk2M6oke5Mtr-uHJxATf5D9AaM4",
  authDomain: "spashop-657c5.firebaseapp.com",
  databaseURL: "https://spashop-657c5.firebaseio.com",
  projectId: "spashop-657c5",
  storageBucket: "spashop-657c5.appspot.com",
  messagingSenderId: "886883092852",
  appId: "1:886883092852:web:9424a8c3fb71b3bffd0421"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;