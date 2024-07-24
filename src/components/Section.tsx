import React, {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import {ProductQueryResponse} from '../api';
import {globalStyles} from '../navigation/globalStyles';

type SectionProps = PropsWithChildren<{item: ProductQueryResponse}>;

function Section({children, item}: SectionProps): React.JSX.Element {
  return (
    <View style={globalStyles.sectionContainer}>
      <Text style={globalStyles.sectionTitle}>{item.title}</Text>
      <Text style={globalStyles.sectionDescription}>{children}</Text>
      <View style={globalStyles.separator} />
    </View>
  );
}

export default Section;
