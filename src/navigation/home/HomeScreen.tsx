import React, {useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Pressable,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeFetchData, DetailQueryResponse} from '../../api';
import {RootStackParams} from '../RootStackNavigation';
import {styles} from './styles';
import Section from '../../components/Section';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams, 'Home'>;
};

function HomeScreen({navigation}: HomeScreenProps) {
  const [data, setData] = useState<DetailQueryResponse[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState('');

  const fetchData = async (query: string, page: number) => {
    setLoading(true);
    try {
      const response = await HomeFetchData(query, 10, page * 10);
      setData(prevData => [...prevData, ...response.data.results]);
      setTotalResults(response.data.paging.total);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const onEndEditing = (e: {nativeEvent: {text: string}}) => {
    const newQuery = e.nativeEvent.text;
    setQuery(newQuery);
    setData([]);
    setPage(0);
    fetchData(newQuery, 0);
  };

  const loadMore = () => {
    if (!loading && data.length < totalResults) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchData(query, nextPage);
    }
  };

  return (
    <View style={styles.screenView}>
      <TextInput
        style={styles.input}
        onEndEditing={onEndEditing}
        placeholder="Enter something..."
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Pressable
              onPress={() => navigation.navigate('Detail', {itemId: item.id})}>
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
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
}

export default HomeScreen;
