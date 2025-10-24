import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDl-g-y0VJ-mi5AuHyOABeiHDtz7rJFHuw",
    authDomain: "green-nest-plant-shop.firebaseapp.com",
    projectId: "green-nest-plant-shop",
    storageBucket: "green-nest-plant-shop.firebasestorage.app",
    messagingSenderId: "508369488159",
    appId: "1:508369488159:web:d7331d7b181f3aa2e9c82a"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const db = getFirestore(app);

console.log('Firebase initialized successfully');
console.log('Auth instance:', auth);
console.log('App instance:', app);

export default app;