//**************************************************************/
// signUpPage.js
//
// Written by Vanessa, Term 1&2 2026
// Contains functions specific to the signUpPage HTML page:
//
//
// 
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
import { ref, set }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { initFirebase } from './script.js';
const { AUTH, fb_gamedb } = initFirebase();

function writeRec() {
    const WELCOME_FORM = document.getElementById("welcomeForm");

    if (WELCOME_FORM.checkValidity() === false) {
        console.log("Incorrect details")
    } else {
        const name = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const region = document.getElementById("region").value;

        const user = AUTH.currentUser;
        const uid = user.uid;

        const dbReference = ref(fb_gamedb, "users/" + uid);

        set(dbReference, {
            name: name,
            username: username,
            email: email,
            age: age,
            gender: gender,
            region: region,
        })

        .then(() => {
            console.log("Record written successfully");
            window.location.href = "welcomePage.html";
        })

        .catch((error) => {
            console.error("Error writing record: ", error);
        });
    }
}
window.writeRec = writeRec;