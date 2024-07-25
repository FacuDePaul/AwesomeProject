// Import necessary libraries
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home/HomeScreen';
import DetailScreen from './detail/DetailScreen';

export type RootStackParams = {
  Home: undefined;
  Detail: {itemId: string};
};

// Create a stack navigator
const Stack = createNativeStackNavigator<RootStackParams>();

function RootStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default RootStackNavigation;
