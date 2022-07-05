import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBBjSFkAV20ZvYKbPFfjMf4bI6G7scZp74",
    authDomain: "pro71-9c7e5.firebaseapp.com",
    projectId: "pro71-9c7e5",
    storageBucket: "pro71-9c7e5.appspot.com",
    messagingSenderId: "279270989665",
    appId: "1:279270989665:web:eb037cfb19a2e7cd5def20"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
