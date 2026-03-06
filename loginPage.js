//**************************************************************/
// loginPage.js
//
// Written by Vanessa, Term 1&2 2026
// Contains functions specific to the loginPage HTML page:
//
//
// 
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/

import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { getDatabase, ref, set, get, push }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";


const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme

import { initFirebase } from './script.js';
const { AUTH, fb_gamedb, PROVIDER } = initFirebase();

function fb_authenticate() {

    // Force Google to show account selection
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {
            // Successful authentication
            console.log(result.user.email);
            console.log(result.user.uid);

        })
        .catch((error) => {
            //  Authentication error
            console.log(error);

        });
}

window.fb_authenticate = fb_authenticate;

onAuthStateChanged(AUTH, async (user) => {
    if (user) {
        const uid = user.uid;

        // Check if user exists in your database
        const userRef = ref(fb_gamedb, 'users/' + uid);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
            // User exists → go to welcome page
            window.location.href = "welcomePage.html";
        } else {
            // User does NOT exist → go to signup page
            window.location.href = "signUpPage.html";
        }
    } else {
        console.log("User not logged in yet.");
        // Optionally, show login button here
    }
});