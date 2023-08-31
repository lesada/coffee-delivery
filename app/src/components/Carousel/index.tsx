import React, { useEffect, useState } from 'react';

import { API_BASE } from '@env';
import axios from 'axios';
import { Dimensions } from 'react-native';
import List from 'react-native-anchor-carousel';

import Card from './Card';

import { Container } from './styles';

function Carousel() {
  const [data, setData] = useState([]);
  const { width: windowWidth } = Dimensions.get('window');

  const fetchData = async () => {
    try {
      console.log(API_BASE);
      const response = await axios.get(`${API_BASE}/coffees`);
      const firstFive = response.data.slice(0, 5);
      setData(firstFive);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
