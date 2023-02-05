import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
function Probando() {

  const probando = useSelector(state => state.stateGlobal);
  return (
    <View style={styles.container}>
        <Text>ESTADO GLOBAL: {probando?"Verdadero":"Falso"}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Probando