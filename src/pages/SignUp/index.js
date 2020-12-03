import React, { useState, useContext } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Platform, View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, TextInput, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useContext(AuthContext);

    function handleSignUp(){
        signUp(email, password, name, telefone, endereco);
    }

  return(
    <View 
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    style={styles.view} >
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
          autoCapitalize="none"
          onChangeText={ (text) => setPassword(text)}
        />
      <Button style={styles.button} mode="contained" onPress={handleSignUp}>
        Cadastrar
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();  


const styles = StyleSheet.create({
	view: {
    backgroundColor: '#f16a77',
    width:'100%',
    height:'100%'
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