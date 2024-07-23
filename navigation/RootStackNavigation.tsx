import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren, useEffect} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  Button,
  FlatList,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [list, setList] = React.useState([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

// Define your screens
function Screen1() {
  const isDarkMode = useColorScheme() === 'dark';
  const [list, setList] = React.useState([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getMeli = async (query: String) => {
    return await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=3#json`,
    );
  };

  const handleButtonPress = () => {
    getMeli('iphone')
      .then(res => {
        console.log(res.data.results);
        setList(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="Simple Button" onPress={handleButtonPress} />
        </View>
      </ScrollView>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <Section title={item.title}>
            <Text>id: {item.id}</Text>
          </Section>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
}

function Screen2() {
  return (
    // Your screen 2 content
    <div>Screen 2</div>
  );
}

// Create a stack navigator
const Stack = createStackNavigator();

function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default RootStackNavigation;
