import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CardItem } from '@/types/cartItem';

type CoffeeContextType = {
  items: CardItem[] | null;
  setItems: React.Dispatch<React.SetStateAction<CardItem[] | null>>;
};

const CartContext = createContext<CoffeeContextType>({} as CoffeeContextType);

function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CardItem[] | null>(null);

  const loadCartFromStorage = async () => {
    try {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Erro ao carregar carrinho do AsyncStorage:', error);
    }
  };

  useEffect(() => {
    loadCartFromStorage();
  }, []);

  useEffect(() => {
    const saveCartToStorage = async () => {
      try {
        await AsyncStorage.setItem('cart', JSON.stringify(items));
      } catch (error) {
        console.error('Erro ao salvar carrinho no AsyncStorage:', error);
      }
    };

    saveCartToStorage();
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCoffee must be used within a CoffeeProvider');
  }
  return context;
}
