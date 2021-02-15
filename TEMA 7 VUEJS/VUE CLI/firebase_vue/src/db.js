import firebase from 'firebase/app'
import 'firebase/firestore'

//copiamos de la configuracion del proyecto var firebaseconfig, y añadimos la variable en initializeApp
var firebaseConfig = {
    apiKey: "AIzaSyAnVNiThtUoxIyb05H4wrscpO0dsPaSxqw",
    authDomain: "ejemplo-proyecto-vue.firebaseapp.com",
    projectId: "ejemplo-proyecto-vue",
    storageBucket: "ejemplo-proyecto-vue.appspot.com",
    messagingSenderId: "227696155421",
    appId: "1:227696155421:web:0a72bf78582a5daaf49ff4"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })