import firebase from 'firebase/app'
import 'firebase/firestore'
import {key} from './key';

  var firebaseConfig = {
    apiKey: key,
    authDomain: "recordatorios-firebase.firebaseapp.com",
    projectId: "recordatorios-firebase",
    storageBucket: "recordatorios-firebase.appspot.com",
    messagingSenderId: "847835110764",
    appId: "1:847835110764:web:4d0b741abca57924bae749"
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
