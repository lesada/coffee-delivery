import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity } from 'react-native';

import DefaultLayout from '@/components/DefaultLayout';
import Location from '@/components/Location';
import Typography from '@/components/Typography';
import FilterCoffeeProvider from '@/contexts/filterCoffee';
import theme from '@/styles/theme';

import Carousel from './components/Carousel';
import List from './components/List';
import Navigation from './components/Navigation';
import Search from './components/Search';

import { Background, Cart, Header, Wrapper } from './styles';

function Home() {
  return (
    <DefaultLayout>
      <StatusBar
        translucent
        backgroundColor={theme.colors.neutral[100]}
        style="light"
      />
      <FilterCoffeeProvider>
        <Background>
          <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[2]}
            contentContainerStyle={{ backgroundColor: '#FAFAFA' }}
          >
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
            <Carousel />
            <Navigation />
            <List />
          </ScrollView>
        </Background>
      </FilterCoffeeProvider>
    </DefaultLayout>
  );
}

export default Home;
