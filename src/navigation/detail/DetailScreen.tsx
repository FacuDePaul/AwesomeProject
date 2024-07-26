import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {RootStackParams} from '../RootStackNavigation';
import {StackScreenProps} from '@react-navigation/stack';
import {DetailFetchData, DetailQueryResponse} from '../../api';
import {styles} from './styles';

type DetailScreenProps = StackScreenProps<RootStackParams, 'Detail'>;

function DetailScreen({route}: DetailScreenProps) {
  const {itemId} = route.params;
  const [data, setData] = useState<DetailQueryResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DetailFetchData(itemId);
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
        <View style={styles.thumbnailPlaceholder}>
          <Text style={styles.darkGrayText}>No Image Available</Text>
        </View>
      )}
      <Text style={[styles.titleText, styles.darkGrayText]}>{data?.title}</Text>
      <Text style={styles.darkGrayText}>{`precio: $${data?.price}`}</Text>
    </View>
  );
}

export default DetailScreen;
