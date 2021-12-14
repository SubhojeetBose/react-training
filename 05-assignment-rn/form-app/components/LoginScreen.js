import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import Constants from 'expo-constants';

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("India")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isChecked, setChecked] = useState(false)

  const submitPress = useCallback(() =>{
    if(!name || !country || !email || !password) {
      Alert.alert("Fill all the fields marked with asterisk")
      return
    }
    if(!isChecked) {
      Alert.alert("Please accept the terms and conditions")
      return
    }
    const newUser = {
      name, country, email, password
    }
    navigation.navigate('Home', newUser)
  }, [name, country, email, password, isChecked])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Join our community</Text>
        <Text style={styles.subtitle}>Get full access today.</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.inputTitle}>PERSONAL INFORMATION</Text>
        <Text style={styles.inputText}>Full name*</Text>
        <View style={styles.input}>
          <TextInput style={styles.box} placeholder="Full Name" onChangeText={setName}/>
        </View>
        <Text style={styles.inputText}>Country*</Text>
        <View style={styles.input}>
          <TextInput style={styles.box} defaultValue="India" onChangeText={setCountry}/>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.inputTitle}>SECURITY</Text>
        <Text style={styles.inputText}>Email*</Text>
        <View style={styles.input}>
          <TextInput style={styles.box} placeholder="Email" onChangeText={setEmail}/>
        </View>
        <Text style={styles.inputText}>Password*</Text>
        <View style={styles.input}>
          <TextInput style={styles.box} secureTextEntry={true} onChangeText={setPassword}/>
        </View>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>I accept the terms</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style= {styles.submit} onPress= {submitPress} >
          <Text style={{fontSize:20, color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  heading: {
    backgroundColor: '#233975',
    height: 160,
    flexDirection: 'column',
    justifyContent: "center"
  },
    section: {
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    paddingLeft: 40,
    fontFamily: 'Montserrat'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    paddingLeft: 40,
    fontFamily: 'Montserrat'
  },
  body: {
    flexDirection: 'column',
    justifyContent: "center",
    margin: 20
  },
    box: {
    borderRadius: 100,
    borderColor: '#cecece',
    borderWidth: 1,
    padding: 5,
    width: 310,
    height: 40
  },
  inputText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    margin: 10,
    marginLeft: 20
  },
  input: {
    alignItems: "center",
    flexDirection: "column"
  },
  inputTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Montserrat'
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Montserrat',
    margin: 10
  },
    submit: {
    backgroundColor: '#233975',
    borderRadius: 100,
    padding: 5,
    margin: 10,
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: "center"
  }
});

export default LoginScreen
