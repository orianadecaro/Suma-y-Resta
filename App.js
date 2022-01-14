import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './component/header';




export default function App(si) {
  const [count, setCount] = useState(0);

  function onPress(si) {
    console.info['Click here'];
    if (si > 0) {
      return setCount(count + 1);
    }
    setCount(count - 1)
  }
  useEffect(() => {
    console.log('arrancando la app');
  })





  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.textoHeader}>Suma-Resta</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={(() => onPress(1))}
      >
        <Text style={styles.texto}>Sumar 1</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={(() => onPress(-1))}
      >
        <Text style={styles.texto}>Restar 1</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>Contador {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9967a',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textoHeader: {
    color: '#fff',
    fontSize: 50
  },

  texto: {
    color: '#fff',
    fontSize: 30
  }
});
