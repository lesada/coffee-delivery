import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { useCart } from '@/contexts/cart';
import { UseNavigationProp } from '@/types/navigation';

import { Cart, Number } from './styles';

function CartButton() {
  const { items } = useCart();
  const navigation = useNavigation<UseNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      {items && items.length > 0 && (
        <Number>{items.reduce((acc, item) => acc + item.quantity, 0)}</Number>
      )}
      <Cart name="shopping-cart" $hasItems={!!items?.length} />
    </TouchableOpacity>
  );
}

export default CartButton;
