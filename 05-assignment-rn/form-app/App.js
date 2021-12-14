import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'

const stack = createStackNavigator()

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown: false}}>
          <stack.Screen name="Login" component={LoginScreen} />
          <stack.Screen name="Home" component={HomeScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});