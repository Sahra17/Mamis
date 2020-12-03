import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableHighlight, ScrollView, Modal, Picker} from 'react-native';
import firebase from '../../services/firebaseConnection';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import moment from "moment";

import { Button, TextInput, Title, Subheading } from 'react-native-paper';
import { pickImageFromCamera, pickImageFromLibrary, sendImageToStorage } from '../../Camera.js';


export default function Produto(){
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoriaSel, setCategoriaSel] = useState(''); 
  const [supermercadoSel, setSupermercadoSel] = useState(''); 
  const [categoria, setCategoria] = useState([]);
  const [supermercado, setSupermercado] = useState([]); 
  const [imagePickerStatus, setImagePickerStatus] = useState(false);
  const [foto, setFoto] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  console.disableYellowBox = true;
  useEffect(()=>{
   

    async function loadList(){
      await firebase.database().ref('categoria')
      .on('child_added', (snapshot)=>{

        snapshot.forEach((childItem) => {
         
          let list = childItem.val();

          setCategoria(oldArray => [...oldArray, list]);
  
        })
      })

      await firebase.database().ref('supermercado')	
      .on('child_added', (snapshot)=>{

          let list = snapshot.val().nome;

          setSupermercado(oldArray => [...oldArray, list]);        
      })

    }

    loadList();
  }, []);

  

  //criado por
  const [preco, setPreco] = useState('');
  async function cadastrar(){

    const nomeFoto = await buscaImage(foto);

      console.log(nome);
      alert('sim');

    var dataPub = moment().format('DD/MM/YYYY');

 
   
    if(nome && descricao && preco  && nomeFoto && supermercadoSel && categoriaSel && marca){
      let produtos = await firebase.database().ref('produtos');
      let chave = produtos.push().key;

      await produtos.child(chave).set({
        nome: nome,
        descricao: descricao,
        preco: preco,
        foto: nomeFoto,
        mercado: supermercadoSel,
        categoria: categoriaSel,
        marca: marca,
        dataDePublicacao: dataPub
      });

      alert('Cadastrado com sucesso!');
      setNome('');
      setDescricao('');
      setPreco('');
      setFoto('');
      setMarca('');
      setData('');

    }else{
      alert('Por favor preencha todos os campos!');
      console.log('Cadastro vazio, não cadastrou');
    }
  
  }

  async function getImage(type) {
    if (type === 'camera') {
      const response = await pickImageFromCamera();
      setImagePickerStatus(false);
    
      if (!response.cancelled) setFoto(response);
    }
    
    else if (type === 'library') {
      const response = await pickImageFromLibrary();
      setImagePickerStatus(false);
      if (!response.cancelled) setFoto(response.uri);

    }
  }

  async function buscaImage(imagem) {
    const response = await sendImageToStorage(imagem);
    console.log("busca foto");
    console.log(response);
    return response;

  }

  function validaTexto(){
    if(nome !== ''){
      if(nome.length < 2){
        alert("Utilize mais de 1 digito no campo nome");
        setNome('');
      }
    }
    if(descricao !== ''){
      if(descricao.length < 2){
        alert("Utilize mais de 1 digito no campo descrição");
        setDescricao('');
      }
    }
    if(marca !== ''){
      if(marca.length < 2){
        alert("Utilize mais de 1 digito no campo marca");
        setMarca('');
      }
    }
  }

  const currency = "R$ ";
/*
  function currencyFormat (value) {
    return currency + (((typeof(value) === 'number' ? value.toFixed(2).toString() : value)
      .replace(/\D/g,'') /100).toFixed(2) + '')
      .replace(".", ",")
      .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
      .replace(/(\d)(\d{3}),/g, "$1.$2,");
  }
*/
  return(
    <ScrollView 
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    style={styles.inputs} >
      <Title style={styles.title}>Cadastro de produto</Title>

      <Button icon="camera" style={styles.button} labelStyle={{color: "white"}} mode="contained" onPress={() => getImage('camera')}>Tirar uma foto</Button>

      <TextInput style={styles.text}
        label="Nome"
        onBlur={() => validaTexto() }
        onChangeText={(texto) => setNome(texto) }
        value={nome}
      />


      <TextInput style={styles.text}
        label="Descrição"
        onBlur={() => validaTexto() }
        onChangeText={(texto) => setDescricao(texto) }
        value={descricao}
      />

      <TextInput style={styles.text}
        label="Marca"
        onBlur={() => validaTexto() }
        onChangeText={(texto) => setMarca(texto) }
        value={marca}
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
        /*onBlur={(texto) => currencyFormat(texto) }*/
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
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


  