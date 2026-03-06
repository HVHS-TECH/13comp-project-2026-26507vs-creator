//**************************************************************/
// script.js
// Written by Vanessa, Term 1&2 2026
// General functions:
//
//
// 
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


function temporary() {
let username = "John";  // change this to whatever name

document.getElementById("userStatus").textContent =
  "Logged in as: " + username;
}

export function initFirebase(){
      // Your web app's Firebase configuration
      const firebaseConfig = {
          apiKey: "AIzaSyBPL24VWJhZmddNslgw2XRv7NIVu4tkfsk",
          authDomain: "vanessa-sturman-13comp-8f6f4.firebaseapp.com",
          databaseURL: "https://vanessa-sturman-13comp-8f6f4-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "vanessa-sturman-13comp-8f6f4",
          storageBucket: "vanessa-sturman-13comp-8f6f4.firebasestorage.app",
          messagingSenderId: "294457924144",
          appId: "1:294457924144:web:4d51a9d46ea5415b572bf5"
      };
  
      // Initialize Firebase
      const FB_GAMEAPP = initializeApp(firebaseConfig);
      const fb_gamedb = getDatabase(FB_GAMEAPP);
      console.info(fb_gamedb); 
  
      // Authenticate
      const PROVIDER = new GoogleAuthProvider();
      const AUTH = getAuth();

      return { AUTH, fb_gamedb, PROVIDER };
}