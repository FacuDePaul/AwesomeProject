// Import necessary libraries
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

export type RootStackParams = {
  Home: undefined;
  Product: {itemId: string};
};

// Create a stack navigator
const Stack = createNativeStackNavigator<RootStackParams>();

function RootStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default RootStackNavigation;
