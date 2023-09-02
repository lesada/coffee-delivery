import React from 'react';

import { Dimensions, Text, View } from 'react-native';
import List from 'react-native-anchor-carousel';

import useGetCoffees from '@/hooks/useGetCoffees';

import Card from './Card';

import { Container } from './styles';

function Carousel() {
  const { width: windowWidth } = Dimensions.get('window');
  const { data, loading } = useGetCoffees();

  const items = data?.slice(0, 5);

  return (
    <Container>
      {loading ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <List
          data={items}
          separatorWidth={0}
          renderItem={({ item }) => <Card {...item} />}
          itemWidth={windowWidth * 0.6}
          containerWidth={windowWidth}
          keyExtractor={(item) => String(item.id)}
          inActiveScale={0.7}
          inActiveOpacity={1}
        />
      )}
    </Container>
  );
}

export default Carousel;
