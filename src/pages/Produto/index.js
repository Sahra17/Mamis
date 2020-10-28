import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, TouchableOpacity, ScrollView, Picker} from 'react-native';
import firebase from '../../services/firebaseConnection';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Button, TextInput, Title, Subheading } from 'react-native-paper';
import { pickImageFromCamera, pickImageFromLibrary } from '../../Camera.js';


export default function Produto(){
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoriaSel, setCategoriaSel] = useState(''); //select
  const [supermercadoSel, setSupermercadoSel] = useState(''); //select

  const [categoria, setCategoria] = useState([]); //select verificar não
  const [supermercado, setSupermercado] = useState([]); //select
  const [selectedValue, setSelectedValue] = useState("Fruta");
  const [selectSupermercado, setSelectSupermercado] = useState("Rancho Bom");
  const [imagePickerStatus, setImagePickerStatus] = useState(false);
  const [foto, setFoto] = useState('');

  
  useEffect(()=>{
   

    async function loadList(){
      await firebase.database().ref('categoria')
      .on('child_added', (snapshot)=>{
        console.log(snapshot);

        snapshot.forEach((childItem) => {
         
          let list = childItem.val();
          console.log(list);

          setCategoria(oldArray => [...oldArray, list]);
          console.log(categoria);
  
        })
      })

      await firebase.database().ref('supermercado')
      .on('child_added', (snapshot)=>{
        console.log(snapshot);

        snapshot.forEach((childItem) => {
         
          let list = childItem.val();
          console.log(list);

          setSupermercado(oldArray => [...oldArray, list]);
          console.log(supermercado);
  
        })
      })


    }

    loadList();
  }, []);

  

  //criado por
  const [preco, setPreco] = useState('');
  async function cadastrar(){
    if(nome !== '' & descricao !== ''){
      let produtos = await firebase.database().ref('produtos');
      let chave = produtos.push().key;

      produtos.child(chave).set({
        nome: nome,
        descricao: descricao,
        preco: preco,
        foto: foto,
      });

      alert('Cadastrado com sucesso!');
      setDescricao('');
      setNome('');
    }
  }

  async function getImage(type) {
    if (type === 'camera') {
      const response = await pickImageFromCamera();
      setImagePickerStatus(false);
      if (!response.cancelled) setFoto(response.uri);
    }
    
    else if (type === 'library') {
      const response = await pickImageFromLibrary();
      setImagePickerStatus(false);
      if (!response.cancelled) setFoto(response.uri);

    }
  }


  return(
    <ScrollView 
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    style={styles.inputs} >
      <Title style={styles.title}>Cadastro de produto</Title>

      <Button style={styles.button} labelStyle={{color: "white"}} mode="contained" onPress={() => getImage('camera')}>Tirar uma foto</Button>
      <Button style={styles.button} labelStyle={{color: "white"}} mode="contained" onPress={() => getImage('library')}>Importar da biblioteca</Button>



      <TextInput style={styles.text}
        label="Nome"
        onChangeText={(texto) => setNome(texto) }
        value={nome}
      />


      <TextInput style={styles.text}
        label="Descrição"
        onChangeText={(texto) => setDescricao(texto) }
        value={descricao}
      />
      
      <Subheading style={{padding:10}}>Categoria</Subheading>

      <Picker
        selectedValue={categoriaSel}
        onValueChange={(itemValue, itemIndex) =>
        setCategoriaSel(itemValue)
        }
        >
        {categoria.map((item, index) => {
        return (
          <Picker.Item
            label={item}
            value={item}
            key={index}
            />
          );
        })}
      </Picker>
        
      <Subheading style={{padding:10}}>Supermercado</Subheading>

      <Picker
        selectedValue={supermercadoSel}
        onValueChange={(itemValue, itemIndex) =>
        setSupermercadoSel(itemValue)
        }
        >
        {supermercado.map((item, index) => {
        return (
          <Picker.Item
            label={item}
            value={item}
            key={index}
            />
          );
        })}
      </Picker>

      <TextInput style={styles.text}
        label="Preço"
        onChangeText={(texto) => setPreco(texto) }
        value={preco}
      />

      <Button style={styles.button} labelStyle={{color: "white"}} mode="contained" onPress={cadastrar}>
        Cadastrar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
	view: {
    backgroundColor: 'white',
    width:'100%',
    height:'100%'
  },
  inputs: {
    marginTop: 10, 
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
},
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  button:{
    backgroundColor:"#545454",
    color:'white',
    marginTop: 10, 
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
	text: {
    marginTop: 10, 
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor:"white",
  },
  title:{
      alignSelf: "center",
      marginTop: 10
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
})

/*
      < Formik
     initialValues = { { nome : '' } }  
     onSubmit = { valores => console . log ( valores ) } 
   ></Formik>
   */