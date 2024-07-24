import React from 'react';
import RootStackNavigation from './src/navigation/RootStackNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}

export default App;
