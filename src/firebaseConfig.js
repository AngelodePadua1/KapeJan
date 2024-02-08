import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyD-xm4qW5eYejk0Dg-IUN47bU6EuXIthng",
    authDomain: "kapejan-9f2b1.firebaseapp.com",
    projectId: "kapejan-9f2b1",
    storageBucket: "kapejan-9f2b1.appspot.com",
    messagingSenderId: "461699998216",
    appId: "1:461699998216:web:0421e201eea793008067bd",
    measurementId: "G-GXMSW5VVB5"
  };

     
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };