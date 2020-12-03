import { Image, StyleSheet, Button, Text, View, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import firebase from './services/firebaseConnection';
import * as Random from 'expo-random';
import { AuthContext } from './contexts/auth';

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
    const image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

  
    return image;
  }
  return null;
} 


export async function sendImageToStorage(image){
 
  var date = new Date().getTime();
  var imagePath;

  //cria o nome do arquivo que vai ficar gravado no firebase
  let filename = date + image.uri.substring(
    image.uri.lastIndexOf("."),
    image.uri.length
  );

  //adiciona a imagem no firebase na pasta 'produtos'
  const responseUpload = await fetch(image.uri);
  const blob = await responseUpload.blob();
  var refUpload = firebase.storage().ref('produtos/').child(filename);
  await refUpload.put(blob);

  //busca a URL da imagem que acabou de ser adicionar e atribui para a 
  //variavel imagePath
  await firebase.storage().ref("produtos/" + filename).getDownloadURL()
    .then(url => {
      console.log('url->' + url);
      imagePath = url;
    })
    .catch((error) => {
      console.log("não deu certo")
      console.log(error)
    });  

  //retorna a URL da imagem
  return imagePath;
}



/*
   if(!result.cancelled){
      this.sendImageToStorage(result)
        .then(() => {
          alert("Success");
        })
        .catch((error) => {
          alert(error);
        });
    }
*/
    /*return result;*/
/*
uploadImage = async (uri, imageName) => fetch(uri)
  .then(response => response.blob())
  .then(blob => { 
    var ref = firebase.storage().ref("produtos/" + imageName);
    return ref.put(blob);
  })

  async function runCrypto() {
  
  // Calling randomBytes method without callback 
  const randomBytes = await Random.getRandomBytesAsync(16).toString('hex');  
    console.log('buf: ', randomBytes);
    return randomBytes;
  }

  */
    