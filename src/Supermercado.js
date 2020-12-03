import { Image, StyleSheet, Button, Text, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from './services/firebaseConnection';


export async function supermercado({data}) {
    await firebase.database().ref('supermercado')
    .orderByChild('nome')
    .equalTo(data)
    .on('value', (snapshot)=>{
        console.log(snapshot);
    })
}
