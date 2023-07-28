import { TouchableOpacity } from 'react-native';

import Card from '@/components/Card';
import DefaultLayout from '@/components/DefaultLayout';
import Location from '@/components/Location';
import Search from '@/components/Search';
import Typography from '@/components/Typography';

import { Cart, Container, Wrapper } from './styles';

function Home() {
  return (
    <DefaultLayout>
      <Container>
        <Wrapper>
          <Location />
          <TouchableOpacity>
            <Cart name="shopping-cart" />
          </TouchableOpacity>
        </Wrapper>
        <Typography type="title" size="medium">
          The perfect coffee for your taste in the palm of your hand
        </Typography>
        <Search />
        <Card />
      </Container>
    </DefaultLayout>
  );
}

export default Home;
