import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';

import { AuthContext } from '../../contexts/auth';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-paper';

const Tab = createBottomTabNavigator();


export default function busca(){
  const [prod, setProd] = useState('');

  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();
  //barra de pesquisa
  const [searchQuery, setSearchQuery] = useState('');

  async function buscar(){
    var ref = firebase.database().ref("usuarios");
    ref.orderByChild("cargo").equalTo(prod).on("child_added", function(snapshot) {
      console.log(snapshot.key);
    });
};
    return(
      <View>      

          <Searchbar
            placeholder="Busque por um produto"
            style={{
              height: 50,
              marginLeft:10,
              marginRight:10,
              marginTop:10,
              alignContent: "center",
              }}
              onChangeText={(texto) => setProd(texto) }

            value={prod}
          />
          <Text>
            {user.name}
          </Text>
          <Button mode="contained"
            title="buscar"
            onPress={buscar}
          />
          <Button mode="contained"
            title="Sair da conta"
            onPress={() => signOut()} 
          />
        

      </View>
    );
}
