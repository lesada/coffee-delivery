import { PropsWithChildren, createContext, useContext, useState } from 'react';

type CoffeeContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  items: CardItem[] | null;
  setItems: React.Dispatch<React.SetStateAction<CardItem[] | null>>;
};

const CartContext = createContext<CoffeeContextType>({} as CoffeeContextType);

export type CardItem = {
  id: string;
  image: typeof import('*.png');
  title: string;
  size: string;
  quantity: number;
  totalPrice: number;
};

function CartProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<CardItem[] | null>(null);

  return (
    <CartContext.Provider
      value={{
        loading,
        items,
        setItems,
        setLoading,
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
