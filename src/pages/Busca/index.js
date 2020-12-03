import React, { useState } from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import Listagem from '../../Listagem.js';
import firebase from '../../services/firebaseConnection';


export default function busca(){
  console.disableYellowBox = true;

  const [produtos, setProdutos] = useState('');
  const [historico, setHistorico] = useState([]);
  const [imageName, setImageName] = useState('');
 
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
          dataDePublicacao: childItem.val().dataDePublicacao
        };
     
        setHistorico(oldArray => [...oldArray, list]);

      })

    })

    

  };

    return(
      <ScrollView>      

          <Searchbar
            placeholder="Busque por um produto"
            style={{
              height: 50,
              marginLeft:10,
              marginRight:10,
              marginTop:10,
              alignContent: "center",
              }}
              onChangeText={(texto) => setProdutos(texto) }

            value={produtos}
          />
     
          <Button style={styles.button} labelStyle={{color: "white"}} mode="contained" onPress={() => buscar()}>
            Buscar
          </Button>
         
          <FlatList
          keyExtractor={item => item.key}
          data={historico}
          renderItem={ ({item}) => ( <Listagem data={item} /> )  }
          />
   
  
  
      </ScrollView>
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