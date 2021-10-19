import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './screen/Screen'

const Tab = createBottomTabNavigator();
const SCREEN = [
  {key: "1", screen: () => <Screen screenName= "Home" />, iconName: "home", name: "Home"},
  {key: "2", screen: () => <Screen screenName= "Search" />, iconName: "search", name: "Search"},
  {key: "3", screen: () => <Screen screenName= "Cart" />, iconName: "cart-outline", badgeCount: 3, name: "Cart"},
  {key: "4", screen: () => <Screen screenName= "Profile" />, iconName: "person-outline", name: "Profile"},
  {key: "5", screen: () => <Screen screenName= "More" />, iconName: "menu", name: "More"},
]

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === SCREEN[0].name) {
                iconName = SCREEN[0].iconName;
              } else if (route.name === SCREEN[1].name) {
                iconName = SCREEN[1].iconName;
              } else if (route.name === SCREEN[2].name) {
                iconName = SCREEN[2].iconName;
              } else if (route.name === SCREEN[3].name) {
                iconName = SCREEN[3].iconName;
              } else if (route.name === SCREEN[4].name) {
                iconName = SCREEN[4].iconName;
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FF6969',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
          tabBarOptions= {{
            style: {
              backgroundColor: '#F5F6F8',   // This is not working
            },
            labelStyle: { fontSize: 12, fontFamily: "neusa-next-std" }
          }}
      >
        <Tab.Screen name={SCREEN[0].name} component={SCREEN[0].screen} options={{ tabBarBadge: SCREEN[0].badgeCount }} />
        <Tab.Screen name={SCREEN[1].name} component={SCREEN[1].screen} options={{ tabBarBadge: SCREEN[1].badgeCount }} />
        <Tab.Screen name={SCREEN[2].name} component={SCREEN[2].screen} options={{ tabBarBadge: SCREEN[2].badgeCount }} />
        <Tab.Screen name={SCREEN[3].name} component={SCREEN[3].screen} options={{ tabBarBadge: SCREEN[3].badgeCount }} />
        <Tab.Screen name={SCREEN[4].name} component={SCREEN[4].screen} options={{ tabBarBadge: SCREEN[4].badgeCount }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
