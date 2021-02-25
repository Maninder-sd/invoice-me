import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDtTl_4Dp_TA4ybDK_aFW6uDRlBvHmBqek",
    authDomain: "invoice-me-5b2c2.firebaseapp.com",
    projectId: "invoice-me-5b2c2",
    storageBucket: "invoice-me-5b2c2.appspot.com",
    messagingSenderId: "605195644799",
    appId: "1:605195644799:web:4159619c1c6164f37db44a"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase,database}