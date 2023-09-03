import { useEffect, useState } from 'react';

import { API_BASE } from '@env';
import axios from 'axios';
import { Text, View } from 'react-native';

import Tag from '@/components/Tag';
import Typography from '@/components/Typography';
import { TType } from '@/types/type';

import { Container, Filter, TypeButton } from './styles';

function List() {
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState<TType[] | null>(null);
  const [activeType, setActiveType] = useState<TType | null>(null);

  const getTypes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE}/types`);
      setTypes(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <Container>
      {loading ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <Filter>
          <Typography
            size="small"
            color="neutral"
            variation={300}
            type="title"
            bold
          >
            Our Coffees
          </Typography>
          {types?.map((type) => (
            <TypeButton
              key={type.id}
              onPress={() =>
                setActiveType((prev) => (prev === type ? null : type))
              }
            >
              <Tag variant={activeType === type ? 'secondary' : 'primary'}>
                {type.title}
              </Tag>
            </TypeButton>
          ))}
        </Filter>
      )}
    </Container>
  );
}

export default List;
