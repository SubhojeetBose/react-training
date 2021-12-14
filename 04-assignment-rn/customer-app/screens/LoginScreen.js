import React from 'react';
import { TouchableOpacity, View, StyleSheet, TextInput, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.box} placeholder="Email"/>
      <TextInput style={styles.box} placeholder="Password"/>
      <TouchableOpacity onPress= {() => {navigation.navigate("Home")}} style= {styles.submit}>
        <Text>
          Submit
        </ Text>
      </ TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  box: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    width: 200
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