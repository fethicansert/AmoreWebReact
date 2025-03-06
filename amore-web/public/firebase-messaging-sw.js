
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
// import { FCM } from "../src/utils/constants";

const myFirebaseConfig = {
    apiKey: "AIzaSyCLry_5xVTzZZRZsrslhP7N1yqeYrUYTcQ",
    authDomain: "react-push-notifications-99498.firebaseapp.com",
    projectId: "react-push-notifications-99498",
    storageBucket: "react-push-notifications-99498.firebasestorage.app",
    messagingSenderId: "528299936920",
    appId: "1:528299936920:web:46e2dc40dfca1005bd94ed",
    measurementId: "G-GQZZW73W94"
};

// const firebaseConfig = {
//     apiKey: FCM.API_KEY,
//     authDomain: FCM.AUTH_DOMAIN,
//     projectId: FCM.PROJECT_ID,
//     storageBucket: FCM.STORAGE_BUCKET,
//     messagingSenderId: FCM.MESSAGING_SENDER_ID,
//     appId: FCM.APP_ID,
//     measurementId: FCM.MEASUREMENT_ID
// };


firebase.initializeApp(myFirebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()