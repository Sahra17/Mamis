import React, {Component} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { TextInput, Title, Button } from 'react-native-paper';

//        {id:'1', nome: 'Sahra', telefone: '0000-0000', endereco: 'limoeiro', email: 'sahra@gmail.com', senha: 'senha'}
class Conta extends Component {
constructor(props){
    super(props);
    this.state={
        nome: '',
        telefone: '',
        endereco: '',
        email: '',
        senha: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
    this.pegaTelefone = this.pegaTelefone.bind(this);
    this.pegaEndereco = this.pegaEndereco.bind(this);
    this.pegaEmail = this.pegaEmail.bind(this);
    this.pegaSenha = this.pegaSenha.bind(this);

}

    pegaNome(texto){
      this.setState({nome: texto});
    }
    pegaTelefone(texto){
      this.setState({telefone: texto});
    }
    pegaEndereco(texto){
      this.setState({endereco: texto});
    }
    pegaEmail(texto){
      this.setState({email: texto});
    }
    pegaSenha(texto){
      this.setState({senha: texto});
    }
render(){
  return (
    <View>
      <Title style={styles.title}>Minha conta</Title>
        <View style={styles.inputs}>
        <TextInput style={styles.text}
          label="Nome"
          value={this.state.nome}
          onChangeText={this.pegaNome}
        />
        <TextInput style={styles.text}
          label="Telefone"
          value={this.state.telefone}
          onChangeText={this.pegaTelefone}
        />
        <TextInput style={styles.text}
          label="endereco"
          value={this.state.endereco}
          onChangeText={this.pegaEndereco}
        />
        <TextInput style={styles.text}
          label="email"
          value={this.state.email}
          onChangeText={this.pegaEmail}
        />
        <TextInput style={styles.text}
          label="senha"
          value={this.state.senha}
          onChangeText={this.pegaSenha}
        />
        <Button mode="contained" onPress={() => alert('Seus dados foram salvos')}>
          Salvar
        </Button>
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
    }
})

export default Conta;