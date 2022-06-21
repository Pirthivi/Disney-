import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCayDCe9jUmKTLg9C3VEf3T00YauLea1bQ",
    authDomain: "disneyplus-clone-93167.firebaseapp.com",
    projectId: "disneyplus-clone-93167",
    storageBucket: "disneyplus-clone-93167.appspot.com",
    messagingSenderId: "231663350932",
    appId: "1:231663350932:web:4379b450956a0b6cd77081"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
//  autanication by google
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider() ;
  const storage = firebase.storage();
  
export {auth,provider,storage};
export default db;
