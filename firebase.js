import * as firebase from 'firebase-admin'

const firebaseConfig = {
    apiKey: "AIzaSyBtX4jGWfffbIVRtsLGcyw1rogu56wlpW0",
    authDomain: "thecameralabs-338c3.firebaseapp.com",
    projectId: "thecameralabs-338c3",
    storageBucket: "thecameralabs-338c3.appspot.com",
    messagingSenderId: "707069400727",
    appId: "1:707069400727:web:2c43019ab3918c85247bd2"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();

export default db