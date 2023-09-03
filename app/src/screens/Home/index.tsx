import { ScrollView, TouchableOpacity } from 'react-native';

import DefaultLayout from '@/components/DefaultLayout';
import Location from '@/components/Location';
import Search from '@/components/Search';
import Typography from '@/components/Typography';

import Carousel from './components/Carousel';
import List from './components/List';

import { Background, Cart, Header, Wrapper } from './styles';

function Home() {
  return (
    <DefaultLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <List />
        </Background>
      </ScrollView>
    </DefaultLayout>
  );
}

export default Home;
