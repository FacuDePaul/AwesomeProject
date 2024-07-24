import React, {useEffect, useState} from 'react';
import {View, Button, FlatList} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from './RootStackNavigation';
import {styles} from '../styles';
import axios from 'axios';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams, 'Home'>;
};

type QueryResponse = {
  results: Array<{
    id: string;
    title: string;
  }>;
};

function HomeScreen({navigation}: HomeScreenProps) {
  const [data, setData] = useState<QueryResponse | null>(null);
  // Rest of the code...
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<QueryResponse>(
          'https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=5#json',
        );
        setData(response.data);
        // Process the data here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.homeScreenView}>
      <FlatList
        data={data?.results}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Button
              title={item.title}
              onPress={() => navigation.navigate('Product', {itemId: item.id})}
            />
          </View>
        )}
      />
    </View>
  );
}

export default HomeScreen;
