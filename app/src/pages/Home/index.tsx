import { TouchableOpacity } from 'react-native';

import Carousel from '@/components/Carousel';
import DefaultLayout from '@/components/DefaultLayout';
import Location from '@/components/Location';
import Search from '@/components/Search';
import Typography from '@/components/Typography';

import { Background, Cart, Header, Wrapper } from './styles';

function Home() {
  return (
    <DefaultLayout>
      <Header>
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
      </Header>
      <Background>
        <Carousel />
      </Background>
    </DefaultLayout>
  );
}

export default Home;
