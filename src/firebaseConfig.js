// src/firebaseConfig.js
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDlcHM6w9-xsiUC41wQUUkpgX48yVr4oqM",
    authDomain: "e-learning-platform-f60f8.firebaseapp.com",
    projectId: "e-learning-platform-f60f8",
    storageBucket: "e-learning-platform-f60f8.appspot.com",
    messagingSenderId: "666757265441",
    appId: "1:666757265441:web:70979b4f6ae8fcd1c58b60"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
