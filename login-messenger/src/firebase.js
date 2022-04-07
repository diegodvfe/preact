import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDlTMkaNIZKKZvcSxz--pOk1s-9F6i4D5g",
    authDomain: "login-messeger.firebaseapp.com",
    projectId: "login-messeger",
    storageBucket: "login-messeger.appspot.com",
    messagingSenderId: "570902340988",
    appId: "1:570902340988:web:f7348a437a1e939b0bf0f9",
    measurementId: "G-F5X3E6BFRR"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  //This is the provider ... some lines of code that firebase provides to give your app entire GOOGLE LOGIN FUNCTIONALITY


  export {auth , provider };

  export default db;