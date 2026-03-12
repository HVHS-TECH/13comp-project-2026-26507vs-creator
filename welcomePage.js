//**************************************************************/
// welcomePage.js
//
// Written by Vanessa, Term 1&2 2026
// Contains functions specific to the welcomePage HTML page:
//
//
// 
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { initFirebase } from './script.js';
const { AUTH, fb_gamedb } = initFirebase(); // Get your Firebase auth and database objects

function displayUsername() {
    onAuthStateChanged(AUTH, (user) => {
        if (!user) return;
        const dbRef = ref(fb_gamedb, "users/" + user.uid);
        get(dbRef).then(snapshot => {
            if (snapshot.exists()) {
                const username = snapshot.val().username;
                const target = document.getElementById("userStatus")
                target.textContent = "Logged in as: " + username;
            }
        });
    });
}

window.addEventListener("load", displayUsername);

function fb_logout() {
    signOut(AUTH)
        .then(() => {
            console.log("User signed out successfully.");
            // Send them back to login page
            window.location.href = "loginPage.html";
        })
        .catch((error) => {
            console.error("Error signing out:", error);
        });
}

// Make it accessible from the HTML button
window.fb_logout = fb_logout;