import { useEffect, useState } from 'react';

import { API_BASE } from '@env';
import axios from 'axios';
import { Text, View } from 'react-native';

import Tag from '@/components/Tag';
import Typography from '@/components/Typography';
import useGetCoffees from '@/hooks/useGetCoffees';
import { TType } from '@/types/type';

import Card from './Card';

import { Container, Filter, TypeButton, Wrapper } from './styles';

function List() {
  const [types, setTypes] = useState<TType[] | null>(null);
  const [activeType, setActiveType] = useState<TType | null>(null);

  const { data, loading } = useGetCoffees();

  const getTypes = async () => {
    try {
      const response = await axios.get(`${API_BASE}/types`);
      setTypes(response.data);
    } catch (error) {
      console.log(error);
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
        <>
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
          {types?.map((type) => (
            <Wrapper key={type.id}>
              <Typography
                size="extraSmall"
                color="neutral"
                variation={400}
                type="title"
                bold
              >
                {type.title}
              </Typography>
              {data
                ?.filter((coffee) => coffee.type === type.title)
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((coffee) => <Card key={coffee.id} {...coffee} />)}
            </Wrapper>
          ))}
        </>
      )}
    </Container>
  );
}

export default List;
