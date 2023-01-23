import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeV7JzMPO2jzarIcQ7Q2yO8e5muN4r4LA",
    authDomain: "chat-app-905f6.firebaseapp.com",
    projectId: "chat-app-905f6",
    storageBucket: "chat-app-905f6.appspot.com",
    messagingSenderId: "429340442639",
    appId: "1:429340442639:web:514069b7e6ad0e5ccce37a",
    measurementId: "G-40EXBM0KTH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

