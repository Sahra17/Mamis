import React, {Component} from 'react';
import { FlatList, View, StyleSheet, Modal, Text } from 'react-native';
import { TextInput, Title, Button } from 'react-native-paper';

export default class Lista extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState({modalVisible: true});
  }
  sair(visible){
    this.setState({modalVisible: visible});
  }
  render(){
    return (
      <View>
        <Title style={styles.title}>Listas de compras</Title>
          <View style={styles.inputs}>
          <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
          Nova lista de compras
        </Button>
        <Button style={styles.button} mode="contained" onPress={ this.entrar}>
          Lista existente 1
        </Button>
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={{backgroundColor: '#292929', flex:1}}>
            <Text style={{color:'#FFF', fontSize: 28}}>
              passar o titulo por parametro
            </Text>
            <Button title="Sair" mode="contained" onPress={() => this.sair(false)}/>

          </View>
        </Modal>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	inputs: {
		marginTop: 10, 
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
	},
	text: {
    marginBottom: 5,
    backgroundColor:"white"
  },
  title:{
    alignSelf: "center",
    marginTop: 10
  },
  button:{
    marginTop: 10,
    backgroundColor:"#545454",
  }
})

