import * as React from 'react';
import { FlatList, View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Title } from 'react-native-paper';

const Produto = () => {
  const [nome, setNome] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
  const [supermercado, setSupermercado] = React.useState('');
  const [marca, setMarca] = React.useState('');
  const [publicadoPor, setPublicadoPor] = React.useState('');
  const [dataDaPublicacao, setDataDaPublicacao] = React.useState('');
  const [preco, setPreco] = React.useState('');

  return (
    <ScrollView>
      <Title style={styles.title}>Cadastrar produto</Title>
        <View style={styles.inputs}>
        <TextInput style={styles.text}
          label="Nome do produto"
          value={nome}
          onChangeText={nome => setNome(nome)}
        />
        <TextInput style={styles.text}
          label="Descrição"
          value={descricao}
          onChangeText={descricao => setDescricao(descricao)}
        />
        <TextInput style={styles.text}
          label="Categoria"
          value={categoria}
          onChangeText={categoria => setCategoria(categoria)}
        />
        <TextInput style={styles.text}
          label="Supermercado"
          value={supermercado}
          onChangeText={supermercado => setSupermercado(supermercado)}
        />
        <TextInput style={styles.text}
          label="Marca"
          value={marca}
          onChangeText={marca => setMarca(marca)}
        />
        <TextInput style={styles.text}
          label="Publicado por"
          value={publicadoPor}
          onChangeText={publicadoPor => setPublicadoPor(publicadoPor)}
        />
        <TextInput style={styles.text}
          label="Data da publicação"
          value={dataDaPublicacao}
          onChangeText={dataDaPublicacao => setDataDaPublicacao(dataDaPublicacao)}
        />
        <TextInput style={styles.text}
          label="Preço"
          value={preco}
          onChangeText={preco => setPreco(preco)}
        />
      </View>
    </ScrollView>
  );
};

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

export default Produto;