import React, { useState, useContext } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Platform, View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password);
  }

  return(
    <View 
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    style={styles.view} >
      <Image
        style={styles.stretch}

        source={require('./LogoMamis.png')}
      />

      <TextInput style={styles.text}
        placeholder="Email"
        autoCorrect={false} //impede a autocorreção do teclado
        autoCapitalize="none" //não começa com a primeira maiuscula
        value={email}
        onChangeText={text => setEmail(text)} //text
      />
      <TextInput style={styles.text}
        placeholder="Senha"
        autoCorrect={false} //impede a autocorreção do teclado
        autoCapitalize="none"
        value={password}
<<<<<<< HEAD
        secureTextEntry={true}
=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
        onChangeText={text => setPassword(text)}
      />
      <Button style={styles.button} mode="contained" onPress={handleLogin}>
        Entrar
      </Button>

<<<<<<< HEAD
      <Text style={styles.criarConta} onPress={ () => navigation.navigate('SignUp')}>
=======
      <Text onPress={ () => navigation.navigate('SignUp')}>
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
        Criar uma conta!
      </Text>
    </View>
  );
}


const Stack = createStackNavigator();  
<<<<<<< HEAD

=======
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f16a77',
    accent: 'yellow',
    background: '#f16a77',
  },
};
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047

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
<<<<<<< HEAD
  },
  criarConta:{
    alignSelf: "center",
    marginTop: 10,
    color:'white'
=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
  },
	text: {
    marginTop: 10, 
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor:"white",
<<<<<<< HEAD
    color:'red'

=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
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
