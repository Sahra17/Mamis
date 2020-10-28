import React, { Component, useContext, useState, useEffect } from 'react';
import { FlatList, ScrollView, View, StyleSheet } from 'react-native';
import { TextInput, Title, Button } from 'react-native-paper';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

//        {id:'1', nome: 'Sahra', telefone: '0000-0000', endereco: 'limoeiro', email: 'sahra@gmail.com', senha: 'senha'}

export default function Conta(){
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { update } = useContext(AuthContext);

    function handleSignUp(){
        update(email, password, name, telefone, endereco);
    }


/*
  useEffect(()=>{
    async function loadList(){
      await firebase.database().ref('users')
      .equalTo(userId)
      .set({
        nome: nome
      })

    }

    loadList();
  }, []);

*/
  return(
    <ScrollView 
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    style={styles.inputs} >
        <Title style={styles.title}>Criar conta</Title>

        <TextInput style={styles.text}
          label="name"
          value={name}
          onChangeText={ (text) => setName(text)}
        />
        <TextInput style={styles.text}
          label="telefone"
          value={telefone}
          onChangeText={ (text) => setTelefone(text)}
        />     
        <TextInput style={styles.text}
          label="endereco"
          value={endereco}
          onChangeText={ (text) => setEndereco(text)}
        />
        <TextInput style={styles.text}
          label="email"
          value={email}
          onChangeText={ (text) => setEmail(text)}
        />
        <TextInput style={styles.text}
          label="senha"
          value={password}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={ (text) => setPassword(text)}
        />
      <Button  mode="contained" labelStyle={{color: "white"}} onPress={handleSignUp}>
        Salvar
      </Button>
    
    </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    inputs: {
          marginTop: 10, 
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10
    },
    text: {
          marginBottom: 5,
          backgroundColor:"white"
      },
      title:{
          alignSelf: "center",
          marginTop: 10
      },
      button:{
        backgroundColor:"#545454",
        color:"white",
        marginTop: 10, 
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
      },
  })
      
/*

class Conta extends Component {
  constructor(props){
      super(props);
      this.state={
          nome: '',
          telefone: '',
          endereco: '',
          email: '',
          senha: ''
      };
  
  
      this.pegaNome = this.pegaNome.bind(this);
      this.pegaTelefone = this.pegaTelefone.bind(this);
      this.pegaEndereco = this.pegaEndereco.bind(this);
      this.pegaEmail = this.pegaEmail.bind(this);
      this.pegaSenha = this.pegaSenha.bind(this);
  
  }
  
      pegaNome(texto){
        this.setState({nome: texto});
      
  
      }
      pegaTelefone(texto){
        this.setState({telefone: texto});
      }
      pegaEndereco(texto){
        this.setState({endereco: texto});
      }
      pegaEmail(texto){
        this.setState({email: texto});
      }
      pegaSenha(texto){
        this.setState({senha: texto});
      }
  render(){
    return (
      <View>
        <Title style={styles.title}>Minha conta</Title>
          <View style={styles.inputs}>
          <TextInput style={styles.text}
            label="Nome"
            value={this.state.nome}
            onChangeText={this.pegaNome}
          />
          
          <TextInput style={styles.text}
            label="Telefone"
            value={this.state.telefone}
            onChangeText={this.pegaTelefone}
          />
          <TextInput style={styles.text}
            label="endereco"
            value={this.state.endereco}
            onChangeText={this.pegaEndereco}
          />
          <TextInput style={styles.text}
            label="email"
            value={this.state.email}
            onChangeText={this.pegaEmail}
          />
          <TextInput style={styles.text}
            label="senha"
            value={this.state.senha}
            onChangeText={this.pegaSenha}
          />
          <Button mode="contained" onPress={() => alert('Seus dados foram salvos')}>
            Salvar
          </Button>
        </View>
      </View>
    );
  }
  
  }
  const styles = StyleSheet.create({
    inputs: {
          marginTop: 10, 
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10
    },
    text: {
          marginBottom: 5,
          backgroundColor:"white"
      },
      title:{
          alignSelf: "center",
          marginTop: 10
      }
  })
  
  export default Conta;
  */