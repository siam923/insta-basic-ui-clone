import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQu9EWN34AFTREb8W_Db6dC_xKd6U-As",
  authDomain: "insta-demo-8093b.firebaseapp.com",
  projectId: "insta-demo-8093b",
  storageBucket: "insta-demo-8093b.appspot.com",
  messagingSenderId: "837251664502",
  appId: "1:837251664502:web:973ffc47537748ebbeed57"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage };