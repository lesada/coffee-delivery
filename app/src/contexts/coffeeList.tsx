import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { API_BASE } from '@env';
import axios from 'axios';

import { Images } from '@/assets';
import { TCoffee } from '@/types/coffee';
import { TType } from '@/types/type';

type CoffeeContextType = {
  loading: boolean;
  data: TCoffee[] | null;
  setData: React.Dispatch<React.SetStateAction<TCoffee[] | null>>;
  types: TType[] | null;
  filteredData: TCoffee[] | null;
  setFilteredData: React.Dispatch<React.SetStateAction<TCoffee[] | null>>;
};

const CoffeeListContext = createContext<CoffeeContextType>(
  {} as CoffeeContextType,
);

function CoffeeListProvider({ children }: PropsWithChildren) {
  const [types, setTypes] = useState<TType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TCoffee[] | null>(null);
  const [filteredData, setFilteredData] = useState<TCoffee[] | null>(null);

  const getCoffeeIcon = (title: string) => {
    return Images[title.replace(/\s/g, '')] || Images.AmericanoCoffee;
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE}/coffees`);

      const coffeesWithImages = response.data.map((coffee: TCoffee) => ({
        ...coffee,
        image: getCoffeeIcon(coffee.title),
      }));

      setData(coffeesWithImages);
      setFilteredData(coffeesWithImages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getTypes = async () => {
    try {
      const response = await axios.get(`${API_BASE}/types`);
      setTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    getTypes();
  }, [fetchData]);

  return (
    <CoffeeListContext.Provider
      value={{ loading, data, setData, types, filteredData, setFilteredData }}
    >
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
