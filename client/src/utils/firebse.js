// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "authnotexaai-84c11.firebaseapp.com",
    projectId: "authnotexaai-84c11",
    storageBucket: "authnotexaai-84c11.firebasestorage.app",
    messagingSenderId: "687447388992",
    appId: "1:687447388992:web:cef4b72ae8c370311f00a5",
    measurementId: "G-J2BK9ST4F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider }