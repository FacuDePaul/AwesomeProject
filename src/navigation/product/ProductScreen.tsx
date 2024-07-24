import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {RootStackParams} from '../RootStackNavigation';
import {StackScreenProps} from '@react-navigation/stack';
import {ProductFetchData, ProductQueryResponse} from '../../api';
import {styles} from './styles';
type ProductScreenProps = StackScreenProps<RootStackParams, 'Product'>;

function ProductScreen({route}: ProductScreenProps) {
  const {itemId} = route.params;
  const [data, setData] = useState<ProductQueryResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductFetchData(itemId);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [itemId]);

  return (
    <View style={styles.screenView}>
      {data?.thumbnail ? (
        <Image source={{uri: data.thumbnail}} style={styles.thumbnail} />
      ) : (
        // Optionally, render a default image or nothing
        <View style={styles.thumbnailPlaceholder}>
          <Text>No Image Available</Text>
        </View>
      )}
      <Text style={styles.titleText}>{data?.title}</Text>
      <Text>{`precio: $${data?.price}`}</Text>
    </View>
  );
}

export default ProductScreen;
