import { Text, View } from 'react-native';

import Typography from '@/components/Typography';
import { useCoffeeList } from '@/contexts/coffeeList';

import Card from './Card';

import { Container, Wrapper } from './styles';

function List() {
  const { data, loading, types } = useCoffeeList();

  if (loading) {
    <Container>
      <View>
        <Text>Loading</Text>
      </View>
    </Container>;
  }

  return (
    <Container>
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
            ?.sort((a, b) => a.title.localeCompare(b.title))
            .map((coffee) => <Card key={coffee.id} {...coffee} />)}
        </Wrapper>
      ))}
    </Container>
  );
}

export default List;
