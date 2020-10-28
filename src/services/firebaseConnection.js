import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyDcKT99IIFmuQ5_k5iSeFbbe-EnUVRokPo",
  authDomain: "mamis-48611.firebaseapp.com",
  databaseURL: "https://mamis-48611.firebaseio.com",
  projectId: "mamis-48611",
  storageBucket: "mamis-48611.appspot.com",
  messagingSenderId: "984911148676",
  appId: "1:984911148676:web:0e7b6f736841006decf4d1",
  measurementId: "G-W1CGVZ99XB"
};
  // Se não existir uma conexão Firebase então inicie uma
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;