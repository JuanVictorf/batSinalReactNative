import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/morcego.png')} style={styles.logo} />
      <Text style={styles.title}>Bat Sinal</Text>
      <Button
        title="Activate Bat Signal"
        onPress={() => navigation.navigate('BatForm')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function BatFormScreen() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleEnviar = () => {
    Alert.alert(
      'Dados enviados!',
      `Nome: ${nome}\nTelefone: ${telefone}\nLocalização: ${localizacao}\nObservação: ${observacao}`
    );
  };

  return (
    <View style={styles.formContainer}>
      <Image source={require('./assets/morcego.png')} style={styles.logoSmall} />
      <Text style={styles.formTitle}>Formulário Bat Sinal</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone para contato"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Localização atual"
        value={localizacao}
        onChangeText={setLocalizacao}
      />
      <TextInput
        style={styles.input}
        placeholder="Observação"
        value={observacao}
        onChangeText={setObservacao}
        multiline
      />
      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bat Sinal' }} />
        <Stack.Screen name="BatForm" component={BatFormScreen} options={{ title: 'Formulário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  logoSmall: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 12,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  formTitle: {
    fontSize: 22,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
});
