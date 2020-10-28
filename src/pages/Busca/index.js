<<<<<<< HEAD
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
=======
import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
import { useNavigation } from '@react-navigation/native';
import { Searchbar, Button } from 'react-native-paper';

<<<<<<< HEAD
import Listagem from '../../Listagem.js';
import firebase from '../../services/firebaseConnection';

import { AuthContext } from '../../contexts/auth';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Button } from 'react-native-paper';
=======
import { AuthContext } from '../../contexts/auth';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-paper';
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047

const Tab = createBottomTabNavigator();


export default function busca(){
<<<<<<< HEAD
  const [produtos, setProdutos] = useState('');
  const [historico, setHistorico] = useState([]);

  /*
  useEffect(()=>{
    
    async function loadList(){
      await firebase.database().ref('produtos')
      .orderByChild('nome')
      .equalTo(produtos)
      .on('value', (snapshot)=>{
        setHistorico([]);

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            nome: childItem.val().nome,
            preco: childItem.val().preco,
          //  uid: uid
          };
       
          setHistorico(oldArray => [...oldArray, list]);
          console.log(historico);

        })

      })

    }

    loadList();
  }, []);

*/

 

  async function buscar(){
    await firebase.database().ref('produtos')
    .orderByChild('nome')
    .startAt(produtos)
    .endAt(produtos+"\uf8ff")
    .on('value', (snapshot)=>{
      setHistorico([]);

      snapshot.forEach((childItem) => {
        let list = {
          key: childItem.key,
          nome: childItem.val().nome,
          descricao: childItem.val().descricao,
          categoria: childItem.val().categoria,
          marca: childItem.val().marca,
          mercado: childItem.val().mercado,
          preco: childItem.val().preco,
          foto: childItem.val().foto,
        //  uid: uid
        };
     
        setHistorico(oldArray => [...oldArray, list]);

      })

    })

  };
=======
  const [prod, setProd] = useState('');

  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();
  //barra de pesquisa
  const [searchQuery, setSearchQuery] = useState('');
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047

  async function buscar(){
    var ref = firebase.database().ref("usuarios");
    ref.orderByChild("cargo").equalTo(prod).on("child_added", function(snapshot) {
      console.log(snapshot.key);
    });
};
    return(
      <View>      

          <Searchbar
            placeholder="Busque por um produto"
            style={{
              height: 50,
              marginLeft:10,
              marginRight:10,
              marginTop:10,
              alignContent: "center",
              }}
<<<<<<< HEAD
              onChangeText={(texto) => setProdutos(texto) }

            value={produtos}
          />
     
          <Button style={styles.button} labelStyle={{color: "white"}} mode="contained" onPress={() => buscar()}>
            Buscar
          </Button>
         
          <FlatList
          keyExtractor={item => item.key}
          data={historico.sort((a, b) => b.preco - a.preco)}
          renderItem={ ({item}) => ( <Listagem data={item} /> )  }
          />
   
  
  
=======
              onChangeText={(texto) => setProd(texto) }

            value={prod}
          />
          <Text>
            {user.name}
          </Text>
          <Button mode="contained"
            title="buscar"
            onPress={buscar}
          />
          <Button mode="contained"
            title="Sair da conta"
            onPress={() => signOut()} 
          />
        

>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
      </View>
    );
}

const styles = StyleSheet.create({
	view: {
    backgroundColor: 'white',
    width:'100%',
    height:'100%'
  },
  button:{
    backgroundColor:"#545454",
    color:"white",
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
})