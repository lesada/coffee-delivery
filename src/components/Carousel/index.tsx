import React from 'react';

import { Images } from '@/assets';

import Card from '../Card';

import { Container, List } from './styles';

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
];

function Carousel() {
  return (
    <Container>
      <List
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card {...item} />}
      />
    </Container>
  );
}

export default Carousel;
