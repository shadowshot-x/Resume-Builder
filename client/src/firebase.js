import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAWC_bh5aIcCEoeaJr6NCAckA1KPTyiVQA",
    authDomain: "res-builder.firebaseapp.com",
    databaseURL: "https://res-builder.firebaseio.com",
    projectId: "res-builder",
    storageBucket: "res-builder.appspot.com",
    messagingSenderId: "618865146322"
  };

firebase.initializeApp(config);
export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();