import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome to the community</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#233975',
    padding: 8,
    alignItems: 'center'
  },
  box: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 310,
    height: 200,
    borderRadius: 16,
    alignItems: "center"
  },
  text: {
    fontSize: 40, 
    margin: 10, 
    fontFamily: "Montserrat", 
    color: "#233975",
    fontWeight: 'bold',
    textAlign: 'center'
    }
});