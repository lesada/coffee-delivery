import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

import CartButton from '@/components/CartButton';
import DefaultLayout from '@/components/DefaultLayout';
import Location from '@/components/Location';
import Typography from '@/components/Typography';
import CoffeeListProvider from '@/contexts/coffeeList';
import theme from '@/styles/theme';

import Carousel from './Carousel';
import List from './List';
import Navigation from './Navigation';
import Search from './Search';

import { Background, Header, Wrapper } from './styles';

function Home() {
  return (
    <DefaultLayout>
      <StatusBar
        translucent
        backgroundColor={theme.colors.neutral[100]}
        style="light"
      />
      <CoffeeListProvider>
        <Background>
          <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[2]}
            contentContainerStyle={{ backgroundColor: '#FAFAFA' }}
          >
            <Header>
              <Wrapper>
                <Location />
                <CartButton />
              </Wrapper>
              <Typography type="title" size="medium">
                The perfect coffee for your taste in the palm of your hand
              </Typography>
              <Search />
            </Header>
            <Carousel />
            <Navigation />
            <List />
          </ScrollView>
        </Background>
      </CoffeeListProvider>
    </DefaultLayout>
  );
}

export default Home;
