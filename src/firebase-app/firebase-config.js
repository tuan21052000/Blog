import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"
import  {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl-Qd1iqycPT9EafiEboEohGq8V4Y2aRo",
  authDomain: "mokey-blogging-b5cfa.firebaseapp.com",
  projectId: "mokey-blogging-b5cfa",
  storageBucket: "mokey-blogging-b5cfa.appspot.com",
  messagingSenderId: "581058801858",
  appId: "1:581058801858:web:b3a6378f1bad7660db8b5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

