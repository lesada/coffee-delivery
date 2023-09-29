import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';

import DefaultLayout from '@/components/DefaultLayout';
import theme from '@/styles/theme';

import Footer from './Footer';
import Header from './Header';
import Item from './Item';

import { Background } from './styles';

function Cart() {
  return (
    <DefaultLayout>
      <StatusBar
        translucent
        backgroundColor={theme.colors.neutral[900]}
        style="dark"
      />
      <Background>
        <Header />
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <Item />}
          keyExtractor={(item) => String(item)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
        <Footer />
      </Background>
    </DefaultLayout>
  );
}

export default Cart;
