import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { CardItem } from '@/types/cartItem';

type CoffeeContextType = {
  items: CardItem[] | null;
  setItems: React.Dispatch<React.SetStateAction<CardItem[] | null>>;
};

const CartContext = createContext<CoffeeContextType>({} as CoffeeContextType);

function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CardItem[] | null>(null);

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
