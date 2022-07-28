// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGuTdH2CAngvb4_QmP3Z0PSUHWO0stqOI",
    authDomain: "elecciones-socpr.firebaseapp.com",
    projectId: "elecciones-socpr",
    storageBucket: "elecciones-socpr.appspot.com",
    messagingSenderId: "280490448376",
    appId: "1:280490448376:web:b9154edaa74228357ff20d",
    measurementId: "G-8E3EHKVRDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"
const db = getFirestore(app);
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js"
const auth = getAuth();
export const save = (user, pass) => {
    createUserWithEmailAndPassword(auth, user, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    //console.log(user + " " + pass);
    //addDoc(collection(db, 'task'), { user, pass });
}

/*
try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}*/