import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';

export default function Busca(){
  const navigation = useNavigation();
  //barra de pesquisa
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

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
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
      </View>
    );
}
