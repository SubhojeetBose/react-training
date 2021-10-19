import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import back from '../assets/back.png'

const Screen = (props) => {
    return (
    <View style= {{flex: 1, backgroundColor: "#f5f6f8"}}>
      <View style={styles.header}>
        <Image source={back} style={styles.backButton} />
        <Text style={styles.name}>{props.screenName}</Text>
      </View>
      <View style={styles.screen}>
        <Text style= {{fontSize: 20}}>{props.screenName}!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  screen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
    backButton: {
    width: 28,
    height: 28,
    margin: 20
  },
  header: {
    flexDirection: "row",
    marginTop: 24
  },
  name: {
    fontSize: 28,
    color: '#515d6e',
    fontWeight: 'Bold',
    marginTop: 16
  }
})

export default Screen;