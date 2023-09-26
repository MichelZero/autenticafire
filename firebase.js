// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
// const app = initializeApp(firebaseConfig);
let app;  // variável global
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const autentica = firebase.autentica() // variável global

export { autentica }; // exporta a variável global