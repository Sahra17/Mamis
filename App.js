/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:'Inicio',
          headerStyle:{
            backgroundColor: '#121212'
          },
          headerTintColor: '#FFF',
          headerShown: false,
        }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getActiveChildNavigationOptions } from 'react-navigation';


function HomeScreen({ navigation }) {
  return (
    <View>
      
  

      <View style={{width: "100%", height: "33.33%", backgroundColor: 'green', border: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textMenu}>Pesquisar produto</Text>
        <Icon.Button
          name="search"
          size={40}
          color="#2B2B2B"
          backgroundColor="transparent"
          onPress={() => alert('Funciona se você programar')}
        />
      </View>
      <View style={{width: "100%", height: "33.33%", backgroundColor: 'yellow', border: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textMenu}>Criar lista</Text>
        <Icon.Button
          name="playlist-add"
          size={40}
          color="#2B2B2B"
          backgroundColor="transparent"
          onPress={() => alert('Funciona se você programar')}
        />
      </View>
      <View style={{width: "100%", height: "33.33%", backgroundColor: 'red', border: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textMenu}>Adicionar produto</Text>
        <Icon.Button
          name="add"
          size={40}
          color="#2B2B2B"
          backgroundColor="transparent"
          onPress={() => alert('Funciona se você programar')}
        />
      </View>

    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/
/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Tab = createBottomTabNavigator();

const icons={
  Home: {
    name: 'search'
  },
  Sobre: {
    name: 'playlist-add'
  },
  Contato: {
    name: 'add'
  }
};
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
export default function App(){
  const _goBack = () => console.log('Went back');

  return(
    <NavigationContainer>
      <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
    </Appbar.Header>

    <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const {name} = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        },
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
      })}
      tabBarOptions={{
        style:{
          backgroundColor: '#f16a77'
        },
        activeTintColor: '#FFF',
        inactiveTintColor: "grey"
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/

import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import firebase from './src/services/firebaseConnection';

import Busca from './src/pages/Busca';
import Produto from './src/pages/Produto';
import Lista from './src/pages/Lista';
import Conta from './src/pages/Conta';
import SignIn from './src/pages/SignIn';

const Tab = createBottomTabNavigator();

const icons={
  Busca: {
    name: 'search'
  },
  Lista: {
    name: 'playlist-add'
  },
  Produto: {
    name: 'add'
  },
  Conta: {
    name: 'supervisor-account'
  },
  SignIn: {
    name: 'supervisor-account'
  }
};
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
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

export default function App(){

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Appbar.Header>
          <Appbar.Content title="Mamis" color="white"/>
        </Appbar.Header>

      <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size}) => {
            const {name} = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          },
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
        })}
        tabBarOptions={{
          
          style:{
            backgroundColor: '#f16a77',
          },
          activeTintColor: '#FFF',
          inactiveTintColor: "grey"
        }}
        >
          <Tab.Screen name="Busca" component={Busca} />
          <Tab.Screen name="Lista" component={Lista} />
          <Tab.Screen name="Produto" component={Produto} />
          <Tab.Screen name="Conta" component={Conta} />
          <Tab.Screen name="SignIn" component={SignIn} />
        </Tab.Navigator>
      </NavigationContainer>      
    </PaperProvider>

  );
}
/*
 <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const {name} = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        },
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
      })}
      tabBarOptions={{
        style:{
          backgroundColor: '#f16a77'
        },
        activeTintColor: '#FFF',
        inactiveTintColor: "grey"
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
      */


/*
      <Button style={styles.container}
          title="Pesquisa por produto"
          onPress={() => navigation.navigate('Details')}
        />

      <View style={styles.container}>
        <Button
          title="Pesquisa por produto"
          onPress={() => navigation.navigate('Details')}
        />
      </View>

      <View style={styles.container}>
        <Button
          title="Pesquisa por produto"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
*/