import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import firebase from '../../services/firebaseConnection';
import { createStackNavigator } from '@react-navigation/stack';



export default function Produto(){
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

  useEffect(()=> {

    async function dados(){

      //Criar um (nó)
      //await firebase.database().ref('tipo').set('Vendedor');

      //Remove um nó
      //await firebase.database().ref('tipo').remove();

      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: 'Jose',
      //   cargo: 'Programador Junior'
      // });

      // await firebase.database().ref('usuarios').child(3)
      // .update({
      //   nome: 'Jose augusto'
      // })

    }

    dados();


  }, []);



  async function cadastrar(){
    if(nome !== '' & cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo
      });

      alert('Cadastrado com sucesso!');
      setCargo('');
      setNome('');
    }
  }
  const Stack = createStackNavigator();


  return(
    
    <View style={styles.container}>
       < Formik
     initialValues = { { nome : '' } }  
     onSubmit = { valores => console . log ( valores ) } 
   ></Formik>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto) }
      value={nome}
      />

      <Text style={styles.texto}>Cargo</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setCargo(texto) }
      value={cargo}
      />

      <Button
      title="Novo funcionario"
      onPress={cadastrar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
  },
  texto: {
    fontSize: 20,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }
});
