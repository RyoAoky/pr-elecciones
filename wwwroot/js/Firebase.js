
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVEDPveJFLN58NAdNxvfz8PN7D01peyUo",
    authDomain: "elecciones2022-971a9.firebaseapp.com",
    projectId: "elecciones2022-971a9",
    storageBucket: "elecciones2022-971a9.appspot.com",
    messagingSenderId: "396251691052",
    appId: "1:396251691052:web:1dbbae53430b05f8423989",
    measurementId: "G-JTE50R1751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const save = (user, pass) => {
    console.log("work");
}