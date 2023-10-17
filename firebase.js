
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app);

export { app, auth, db }