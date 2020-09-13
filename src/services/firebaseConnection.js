import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDcKT99IIFmuQ5_k5iSeFbbe-EnUVRokPo",
    authDomain: "mamis-48611.firebaseapp.com",
    databaseURL: "https://mamis-48611.firebaseio.com",
    projectId: "mamis-48611",
    storageBucket: "mamis-48611.appspot.com",
    messagingSenderId: "984911148676",
    appId: "1:984911148676:web:c6a77b7c8f880dfeecf4d1",
    measurementId: "G-J5LL7ZLBMG"
  };
  // Se não existir uma conexão Firebase então inicie uma
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;