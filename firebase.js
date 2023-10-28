// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLJSWJP4gKZW6pwoR4NHkVDk0cFc1xrwk",
    authDomain: "chatgenius-617d2.firebaseapp.com",
    projectId: "chatgenius-617d2",
    storageBucket: "chatgenius-617d2.appspot.com",
    messagingSenderId: "963200172743",
    appId: "1:963200172743:web:9c0b371e853026c93a34e2",
    measurementId: "G-7R28HSWRBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;