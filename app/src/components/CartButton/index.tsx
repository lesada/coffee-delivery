import { TouchableOpacity } from 'react-native';

import { Cart } from './styles';

function CartButton() {
  return (
    <TouchableOpacity>
      <Cart name="shopping-cart" />
    </TouchableOpacity>
  );
}

export default CartButton;
