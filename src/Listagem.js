import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';

export default function Listagem({ data }){
console.log(data.foto);
  return(

     <View style={{ marginVertical: 10, borderRadius: 10, minHeight: 80, flexDirection: 'row' }}>
     <TouchableOpacity onPress={() => setIsModalOpenned(true)}>
       <Image style={{ height: 80, width: 80, backgroundColor: '#f0f0f0', borderRadius: 10 }} source={{ uri:data.foto }} />
     </TouchableOpacity>

     <TouchableOpacity
       onPress={() => {}}
       style={{ marginLeft: 10, flex: 1 }}
       activeOpacity={1}
     >
       <Text style={{ color: '#333', fontSize: 18 }}>{ data.nome }</Text>
     
       <Text style={{ color: '#333', marginRight: 15 }}>{ `${data.preco}` }</Text>
      
     </TouchableOpacity>
   </View>
   
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#121212',
  },
  text:{
    color:'#FFF',
    fontSize: 17
  }
});

/*       <Text style={{ color: '#333', marginRight: 15 }}>{ `${data.preco}\n${data.nome} - ${data.preco}` }</Text>
*/