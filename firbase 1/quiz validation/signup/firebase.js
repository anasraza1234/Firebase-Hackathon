import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC7kvuTGvtwhv14aQCYNGUZckuKByeVkBk",
    authDomain: "anas-login-signup-form.firebaseapp.com",
    projectId: "anas-login-signup-form",
    storageBucket: "anas-login-signup-form.appspot.com",
    messagingSenderId: "216325610906",
    appId: "1:216325610906:web:fdbeca387679f6b7d82e23",
    measurementId: "G-TCZZKZFCTE"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  export{auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut, sendPasswordResetEmail}
