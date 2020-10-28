import { Image, StyleSheet, Button, Text, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from './services/firebaseConnection';


export async function pickImageFromLibrary() {
  const { permissionStatus } = await ImagePicker.requestCameraRollPermissionsAsync();
  if (permissionStatus !== undefined && permissionStatus !== 'granted') {
    Alert.alert('Erro', 'Desculpe, nós precisamos da sua permissão para acessar suas fotos', [{ text: 'Ok' }]);
  } else {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    return response;
  }
  return null;
}

export async function pickImageFromCamera() {
  
  const { permissionStatus } = await ImagePicker.requestCameraPermissionsAsync();
  if (permissionStatus !== undefined && permissionStatus !== 'granted') {
    alert('Erro', 'Desculpe, nós precisamos da sua permissão para acessar sua câmera', [{ text: 'Ok' }]);
  } else {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    

   if(!result.cancelled){
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          alert("Success");
        })
        .catch((error) => {
          alert(error);
        });
    }

    return response;
  }
  return null;
} 

uploadImage = async (uri, imageName) => fetch(uri)
  .then(response => response.blob())
  .then(blob => { 
    var ref = firebase.storage().ref("produtos/" + imageName);
    return ref.put(blob);
  })
 

 