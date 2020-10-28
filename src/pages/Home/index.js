
<<<<<<< HEAD
import React, { Component, useContext, useState, useEffect } from 'react';
=======
import React, { Alert } from 'react';
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, Title } from 'react-native-paper';

import { Image } from 'react-native';
<<<<<<< HEAD
import { AuthContext } from '../../contexts/auth';
=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047

import Busca from '../Busca';
import Produto from '../Produto';
import Lista from '../Lista';
import Conta from '../Conta';
<<<<<<< HEAD
/*import Camera from '../../Camera.js';*/
=======
import SignIn from '../SignIn';
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
import { Header } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

<<<<<<< HEAD


=======
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
const Stack = createStackNavigator();     

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
<<<<<<< HEAD
    },/*
    Camera: {
      name: 'supervisor-account'
    }*/
=======
    },
    SignIn: {
      name: 'supervisor-account'
    }
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
  };
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#f16a77',
      accent: 'yellow',
      background: '#f16a77',
    },
  };
<<<<<<< HEAD

 
export default function Home(){

  const { signOut } = useContext(AuthContext);

  function sair(){
    signOut();
  }
=======
export default function Home(){


>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
  return (
    <PaperProvider theme={theme}>
      
      <Appbar.Header>
<<<<<<< HEAD
        <Appbar.Content title="Mamis" titleStyle={{color: "white"}} />
        <Appbar.Action icon="logout" color= "white" onPress={sair} />
=======
        <Appbar.Content title="Mamis" />
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
      </Appbar.Header>
      <Tab.Navigator
        screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
            const {name} = icons[route.name];
            return <Icon name={name} color={color} size={size} />
        },
            headerStyle: {
            backgroundColor: 'red',
            },
            headerTintColor: '#fff',
<<<<<<< HEAD
           // headerTitle: {name} da erro
=======
            headerTitle: {name}
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
        })}
        tabBarOptions={{
        
        style:{
            backgroundColor: '#f16a77',
        },
        activeTintColor: '#FFF',
        inactiveTintColor: "grey",
<<<<<<< HEAD
       // headerTitle: {name} da erro

        }}
        >
        <Tab.Screen name="Busca" component={Busca} />
        <Tab.Screen name="Lista" component={Lista} />
        <Tab.Screen name="Produto" component={Produto} />
        <Tab.Screen name="Conta" component={Conta} />

=======
        headerTitle: {name}

        }}
        >
        <Tab.Screen name="Busca" component={Busca} options={{title:"teste"}}/>
        <Tab.Screen name="Lista" component={Lista} />
        <Tab.Screen name="Produto" component={Produto} />
        <Tab.Screen name="Conta" component={Conta} />
>>>>>>> 261a59cc3704433c6500f51c1edc6665dfc65047
    </Tab.Navigator>     
    </PaperProvider>

  );
}