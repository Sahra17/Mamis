import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { FlatList, View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>home Screen</Text>
  
    <Button mode="contained" onPress={() => navigation.navigate('Busca')}>
    Go to Home
    </Button>
  
  </View>
  );
}

function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return(
    <View style={styles.inputs}>
<Image
        style={styles.stretch}

        source={require('./LogoMamis.png')}
      />

      <TextInput style={styles.text}
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput style={styles.text}
        label="Senha"
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Busca')}>
        Entrar
      </Button>
    </View>
  );
}
function DetailsScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.push('Details')}
      >
        Go to Details... again
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('HomeScreen')}>
      Go to Home
      </Button>
      <Button mode="contained" onPress={() => navigation.goBack()}>
      Go back
      </Button>
      <Button
                mode="contained"
        onPress={() => navigation.popToTop()}
      >
        Go back to first screen in stack
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



export default function SignIn(){
  const navigation = useNavigation();
 
  return (
    <PaperProvider theme={theme}>

    <Stack.Navigator initialRouteName="Login"  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
	inputs: {
        marginTop: 10, 
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
  },
  button:{
    backgroundColor:"#545454",
    color:"#841584"
  },
	text: {
        marginBottom: 5,
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