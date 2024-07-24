import React, {useState} from 'react';
import {View, FlatList, TextInput, Pressable, Image, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeFetchData, HomeQueryResponse} from '../../api';
import {RootStackParams} from '../RootStackNavigation';
import {styles} from './styles';
import Section from '../../components/Section';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams, 'Home'>;
};

function HomeScreen({navigation}: HomeScreenProps) {
  const [data, setData] = useState<HomeQueryResponse | null>(null);

  const onEndEditing = async (query: string) => {
    try {
      const response = await HomeFetchData(query, 5);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.screenView}>
      <TextInput
        style={styles.input}
        onEndEditing={e => onEndEditing(e.nativeEvent.text)}
        placeholder="Enter something..."
      />
      <FlatList
        data={data?.results}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Pressable
              onPress={() => navigation.navigate('Product', {itemId: item.id})}>
              <Section item={item}>
                <View style={styles.pressableView}>
                  <Image
                    source={{uri: item.thumbnail}}
                    style={styles.thumbnail}
                  />
                  <Text>{`precio: $${item.price}`}</Text>
                </View>
              </Section>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

export default HomeScreen;
