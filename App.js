import React from 'react';
// import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home.js';
import About from './src/pages/About.js';
import Contacts from './src/pages/Contacts.js';
import Network from './src/pages/Network.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Network" component={Network} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
