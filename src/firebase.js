import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD42a9JCEoaM5KxH90uM7ELFU26M4noLYI",
    authDomain: "amazecart-v1.firebaseapp.com",
    databaseURL: "https://amazecart-v1.firebaseio.com",
    projectId: "amazecart-v1",
    storageBucket: "amazecart-v1.appspot.com",
    messagingSenderId: "987770332270",
    appId: "1:987770332270:web:a913adc9034b94a953f27f",
    measurementId: "G-CG254SN14B"
});

const auth = firebase.auth();

export { auth }