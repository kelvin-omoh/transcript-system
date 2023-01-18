import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByEdy32ZMhMezm4YgkQoam3FaCN2bnUF4",
    authDomain: "transcript-system-c5497.firebaseapp.com",
    projectId: "transcript-system-c5497",
    storageBucket: "transcript-system-c5497.appspot.com",
    messagingSenderId: "877840813262",
    appId: "1:877840813262:web:9ed8f21d75cf998acc549f",
    measurementId: "G-87ZF0NMCDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);