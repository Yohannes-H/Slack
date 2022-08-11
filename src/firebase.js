import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDQASCHoRvh4OefqV_YKxEI27piJ0j3OD8",
  authDomain: "slack-clone-285aa.firebaseapp.com",
  projectId: "slack-clone-285aa",
  storageBucket: "slack-clone-285aa.appspot.com",
  messagingSenderId: "591726451545",
  appId: "1:591726451545:web:450e0974df18a91b604a48",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
