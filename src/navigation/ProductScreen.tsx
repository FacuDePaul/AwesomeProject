import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import {RootStackParams} from './RootStackNavigation';
import {StackScreenProps} from '@react-navigation/stack';
import axios from 'axios';

type ProductScreenProps = StackScreenProps<RootStackParams, 'Product'>;

type QueryResponse = {
  id: string;
  title: string;
};

function ProductScreen({route}: ProductScreenProps) {
  const {itemId} = route.params;

  const [data, setData] = useState<QueryResponse | null>(null);
  // Rest of the code...
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<QueryResponse>(
          `https://api.mercadolibre.com/items/${itemId}`,
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <View style={styles.ProductScreenView}>
      <Text>{data?.id}</Text>
      <Text>{data?.title}</Text>
    </View>
  );
}
export default ProductScreen;
