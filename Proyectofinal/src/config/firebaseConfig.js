import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBkdJnPR7_0kOvIvoAb7-Qet38OqGl6DGc",
  authDomain: "mundo-videojuegos.firebaseapp.com",
  projectId: "mundo-videojuegos",
  storageBucket: "mundo-videojuegos.appspot.com",
  messagingSenderId: "538263300588",
  appId: "1:538263300588:web:de7b75518f5b39371ab8c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)