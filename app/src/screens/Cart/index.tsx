import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';

import DefaultLayout from '@/components/DefaultLayout';
import { useCart } from '@/contexts/cart';
import theme from '@/styles/theme';

import Footer from './Footer';
import Header from './Header';
import Item from './Item';

import { Background } from './styles';

function Cart() {
  const { items } = useCart();

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
          data={items}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id + item.size}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
        <Footer
          total={items?.reduce((acc, item) => acc + item.totalPrice, 0) || 0}
        />
      </Background>
    </DefaultLayout>
  );
}

export default Cart;
