import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyDpKJUBv0EBjYanXtoYoGI_6exdISwTkpM",
    authDomain: "ultimate-blog-ug.firebaseapp.com",
    projectId: "ultimate-blog-ug",
    storageBucket: "ultimate-blog-ug.appspot.com",
    messagingSenderId: "976229882879",
    appId: "1:976229882879:web:85a5a31853601b41d8e5ca"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fireDb = firebase.firestore(); // this will be our databse

export const fireStorage = firebase.storage(); // this will be our storage for image

export const fireAuth = firebase.auth();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;


// Config for react-firebase-ui

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
