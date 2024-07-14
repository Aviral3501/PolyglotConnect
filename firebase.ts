import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

// fireabse config
const firebaseConfig = {
    apiKey: "AIzaSyAfXtLj9RqKBes9AG1cWOsMmVIPMSqs3uU",
    authDomain: "sass-translator-app-2a967.firebaseapp.com",
    projectId: "sass-translator-app-2a967",
    storageBucket: "sass-translator-app-2a967.appspot.com",
    messagingSenderId: "701051987551",
    appId: "1:701051987551:web:1eaa29e7cb4b490ad61dea"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// dont want to create multiple instaces of the app , if one is already there

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// set up the auth
const auth = getAuth(app);
// set the db
const db = getFirestore(app);
const functions = getFunctions(app);

export {app,auth,functions};