import React from 'react';
import { TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';

export default function AddCustomerScreen () {
  return (
    <View style={styles.container}>
      <TextInput style={styles.box} placeholder="Email"/>
      <TextInput style={styles.box} placeholder="Password"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 5,
    margin: 10
  },
  submit: {
    backgroundColor: '#01aae5',
    borderRadius: 10,
    padding: 5,
    margin: 10,
    width: 90,
    alignItems: 'center'
  }
});