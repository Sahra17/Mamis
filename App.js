import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/index';

const Stack = createStackNavigator();     

export default function App(){

  return (
      <NavigationContainer>
        <AuthProvider>
          <Routes/>
        </AuthProvider>      
      </NavigationContainer>      

  );
}