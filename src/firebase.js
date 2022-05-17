import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkhY8wMoCnBavNCzRRn1G_GVegQucvVC4",
    authDomain: "line-clone-3f7a5.firebaseapp.com",
    projectId: "line-clone-3f7a5",
    storageBucket: "line-clone-3f7a5.appspot.com",
    messagingSenderId: "828925794168",
    appId: "1:828925794168:web:af3eebfa36c780212a5a8d"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };