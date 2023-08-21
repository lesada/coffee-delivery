import React from 'react';

import { Dimensions } from 'react-native';
import List from 'react-native-anchor-carousel';

import { Images } from '@/assets';

import Card from '../Card';

import { Container } from './styles';

const data = [
  {
    id: 1,
    title: 'Café 1',
    type: 'Tradicional',
    image: Images.Coffee,
    price: '5.99',
    description: 'Café com leite',
  },
  {
    id: 2,
    title: 'Café 2',
    type: 'Especial',
    image: Images.Coffee,
    price: '5.99',
    description: 'Café sem leite',
  },
  {
    id: 3,
    title: 'Café 3',
    type: 'Tradicional',
    image: Images.Coffee,
    price: '5.99',
    description: 'Café sem leite',
  },
  {
    id: 3,
    title: 'Café 3',
    type: 'Tradicional',
    image: Images.Coffee,
    price: '5.99',
    description: 'Café sem leite',
  },
];

function Carousel() {
  const { width: windowWidth } = Dimensions.get('window');

  return (
    <Container>
      <List
        data={data}
        separatorWidth={0}
        renderItem={({ item }) => <Card {...item} />}
        itemWidth={windowWidth * 0.6}
        containerWidth={windowWidth}
        keyExtractor={(item) => String(item.id)}
        inActiveScale={0.7}
        inActiveOpacity={1}
      />
    </Container>
  );
}

export default Carousel;
