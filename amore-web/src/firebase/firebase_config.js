// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import { FCM } from "../utils/constants";

const isMyConfig = false;

const myFirebaseConfig = {
    apiKey: "AIzaSyCLry_5xVTzZZRZsrslhP7N1yqeYrUYTcQ",
    authDomain: "react-push-notifications-99498.firebaseapp.com",
    projectId: "react-push-notifications-99498",
    storageBucket: "react-push-notifications-99498.firebasestorage.app",
    messagingSenderId: "528299936920",
    appId: "1:528299936920:web:46e2dc40dfca1005bd94ed",
    measurementId: "G-GQZZW73W94"
};

const firebaseConfig = {
    apiKey: FCM.API_KEY,
    authDomain: FCM.AUTH_DOMAIN,
    projectId: FCM.PROJECT_ID,
    storageBucket: FCM.STORAGE_BUCKET,
    messagingSenderId: FCM.MESSAGING_SENDER_ID,
    appId: FCM.APP_ID,
    measurementId: FCM.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(isMyConfig ? myFirebaseConfig : firebaseConfig);

export const messaging = getMessaging(app);


export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log(payload);

            resolve(payload);
        });
    });




