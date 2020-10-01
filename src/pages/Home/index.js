
import React, { Alert } from 'react';
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, Title } from 'react-native-paper';

import { Image } from 'react-native';

import Busca from '../Busca';
import Produto from '../Produto';
import Lista from '../Lista';
import Conta from '../Conta';
import SignIn from '../SignIn';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

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
    },
    SignIn: {
      name: 'supervisor-account'
    }
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
export default function Home(){


  return (
    <PaperProvider theme={theme}>
      
      <Appbar.Header>
        <Appbar.Content title="Mamis" />
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
            headerTitle: {name}
        })}
        tabBarOptions={{
        
        style:{
            backgroundColor: '#f16a77',
        },
        activeTintColor: '#FFF',
        inactiveTintColor: "grey",
        headerTitle: {name}

        }}
        >
        <Tab.Screen name="Busca" component={Busca} options={{title:"teste"}}/>
        <Tab.Screen name="Lista" component={Lista} />
        <Tab.Screen name="Produto" component={Produto} />
        <Tab.Screen name="Conta" component={Conta} />
    </Tab.Navigator>     
    </PaperProvider>

  );
}