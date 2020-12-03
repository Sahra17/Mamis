import React, { useState } from 'react';
import { View, Text, StyleSheet,  TouchableHighlight, Image, Modal, TouchableOpacity } from 'react-native';
import firebase from './services/firebaseConnection';

export default function Listagem({ data }){
  const [modalVisible, setModalVisible] = useState(false);
  const [mercado, setMercado] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [filial, setFilial] = useState('');
  const [site, setSite] = useState('');
  const [foto, setFoto] = useState('');
  const [endereco, setEndereco] = useState('');
  const [horarioDeFuncionamento, setHorarioDeFuncionamento] = useState('');
  console.disableYellowBox = true;

  async function buscarMercado(){
    setMercado(data.mercado);
    setModalVisible(true);
    await firebase.database().ref('supermercado')
      .orderByChild('nome')
      .equalTo(mercado)
      .on('value', (snapshot)=>{
  
        snapshot.forEach((childItem) => {
        
          setNome(childItem.val().nome);
          setTelefone(childItem.val().telefone);
          setFilial(childItem.val().filial);
          setSite(childItem.val().site);
          setFoto(childItem.val().foto);
          setEndereco(childItem.val().endereco);
          setHorarioDeFuncionamento(childItem.val().horarioDeFuncionamento);

        })
      })
  }
  console.log(data.nome);
  
  return(
    
     <View style={{ marginVertical: 10, borderRadius: 10, minHeight: 80, flexDirection: 'row' }}>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Image style={{ height: 230, width: 350, backgroundColor: '#f0f0f0', borderRadius: 10 }} source={{ uri:foto }} /> 
            
            <View style={styles.text}>

              <Text style={{fontSize: 20, margin: 10 }}> {nome} </Text>
              <Text style={styles.text}> Filial: {filial}</Text>
              <Text style={styles.text}> Telefone: {telefone}</Text>
              <Text style={styles.text}> Endereço: {endereco}</Text>
              <Text style={styles.text}> Horário de funcionamento: {horarioDeFuncionamento}</Text>
              <Text style={styles.text}> Site: {site}</Text>

          
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#545454" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}> Voltar </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>


     <TouchableOpacity> 
      <Image style={{ marginLeft: 10, height: 100, width: 90, backgroundColor: '#f0f0f0', borderRadius: 10 }} source={{ uri:data.foto }} /> 
     </TouchableOpacity>

     <TouchableOpacity
       onPress={() => {buscarMercado()}}
       style={{ marginLeft: 10, flex: 1 }}
       activeOpacity={1}
     >
          
       <Text style={{ color: '#333', fontSize: 18 }}>{ data.nome }</Text>
       <Text style={{ color: '#333' }}>Descrição: { data.descricao }</Text>
       <Text style={{ color: '#333' }}>Categoria: { data.categoria }</Text>
       <Text style={{ color: '#333' }}>Marca: { data.marca }</Text>
       <Text style={{ color: '#333' }}>Mercado: { data.mercado }</Text>
       <Text style={{ color: '#333'}}>Data da publicação: { data.dataDePublicacao }</Text>
       <Text style={{ color: '#333', marginRight: 15 }}>Preço: { currencyFormat(data.preco) }</Text>
      
     </TouchableOpacity>
   </View>
   
  )

}
const currency = "R$ ";

export function currencyFormat ( value ) {
  return currency + (((typeof(value) === 'number' ? value.toFixed(2).toString() : value)
    .replace(/\D/g,'') /100).toFixed(2) + '')
    .replace(".", ",")
    .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
    .replace(/(\d)(\d{3}),/g, "$1.$2,");
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#121212',
  },
  text:{
    fontSize: 15, 
    margin: 5
  },
  modalView: {
    margin: 10,
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
});

/*      
*/