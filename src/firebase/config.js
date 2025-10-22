// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl-g-y0VJ-mi5AuHyOABeiHDtz7rJFHuw",
    authDomain: "green-nest-plant-shop.firebaseapp.com",
    projectId: "green-nest-plant-shop",
    storageBucket: "green-nest-plant-shop.firebasestorage.app",
    messagingSenderId: "508369488159",
    appId: "1:508369488159:web:d7331d7b181f3aa2e9c82a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;