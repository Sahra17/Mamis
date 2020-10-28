import React, { useState, useContext } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Platform, View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import { Button, TextInput, Title } from 'react-native-paper';
=======
import { Button, TextInput } from 'react-native-paper';
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){
    const navigation = useNavigation();

    const [name, setName] = useState('');
<<<<<<< HEAD
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useContext(AuthContext);

    function handleSignUp(){
<<<<<<< HEAD
        signUp(email, password, name, telefone, endereco);
=======
        signUp(email, password, name);
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
    }

  return(
    <View 
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    style={styles.view} >
<<<<<<< HEAD
        <Title style={styles.title}>Criar conta</Title>

=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
        <TextInput style={styles.text}
          label="name"
          value={name}
          onChangeText={ (text) => setName(text)}
        />
        <TextInput style={styles.text}
<<<<<<< HEAD
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
=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
          label="email"
          value={email}
          onChangeText={ (text) => setEmail(text)}
        />
        <TextInput style={styles.text}
          label="senha"
          value={password}
<<<<<<< HEAD
          secureTextEntry={true}
          autoCapitalize="none"
=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
          onChangeText={ (text) => setPassword(text)}
        />
      <Button style={styles.button} mode="contained" onPress={handleSignUp}>
        Cadastrar
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();  
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f16a77',
    accent: 'yellow',
    background: '#f16a77',
  },
};

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