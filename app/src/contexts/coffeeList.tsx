import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { API_BASE } from '@env';
import axios from 'axios';

import { TCoffee } from '@/types/coffee';

type CoffeeContextType = {
  loading: boolean;
  data: TCoffee[] | null;
};

const CoffeeListContext = createContext<CoffeeContextType>(
  {} as CoffeeContextType,
);

function CoffeeListProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TCoffee[] | null>(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE}/coffees`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CoffeeListContext.Provider value={{ loading, data }}>
      {children}
    </CoffeeListContext.Provider>
  );
}

export default CoffeeListProvider;

export function useCoffeeList() {
  const context = useContext(CoffeeListContext);
  if (context === undefined) {
    throw new Error('useCoffee must be used within a CoffeeProvider');
  }
  return context;
}
