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


const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs','color: blue; background-color: white;');


function fb_initialise_and_authenticate() {
    console.log('%c fb_initialise_and_authenticate(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    document.getElementById("p_fbInitialise_and_authenticate").innerHTML= "Button Clicked";

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
    fb_gamedb = getDatabase(FB_GAMEAPP);
    console.info(fb_gamedb); 

    // Authenticate
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();

    // Force Google to show account selection
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {
            // Successful authentication
            console.log(result.user.email);
            console.log(result.user.uid);
            document.getElementById("p_fbAuthenticate").innerHTML= "Sucess!";

        })
        .catch((error) => {
            //  Authentication error
            console.log(error);
            document.getElementById("p_fbAuthenticate").innerHTML= "Error";

        });
}