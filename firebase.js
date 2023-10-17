// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTAe3TjsmPNQdmoaIisXNGD1WhjsJloB4",
  authDomain: "autentica-fire01.firebaseapp.com",
  projectId: "autentica-fire01",
  storageBucket: "autentica-fire01.appspot.com",
  messagingSenderId: "266988537667",
  appId: "1:266988537667:web:e17643f3d5864146a411f6"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };