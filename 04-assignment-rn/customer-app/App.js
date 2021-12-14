import 'react-native-gesture-handler'
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const stack = createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator>
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
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
