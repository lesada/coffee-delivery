import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { TCoffee } from '@/types/coffee';
import { TType } from '@/types/type';

import { useCoffeeList } from './coffeeList';

type CoffeeContextType = {
  filteredData: TCoffee[] | null;
  setFilteredData: React.Dispatch<React.SetStateAction<TCoffee[] | null>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  activeType: TType | null;
  setActiveType: React.Dispatch<React.SetStateAction<TType | null>>;
};

const FilterCoffeeContext = createContext<CoffeeContextType>(
  {} as CoffeeContextType,
);

function FilterCoffeeProvider({ children }: PropsWithChildren) {
  const [filteredData, setFilteredData] = useState<TCoffee[] | null>(null);
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<TType | null>(null);

  const { data } = useCoffeeList();

  const filterData = useCallback(
    (data: TCoffee[]) => {
      const filterSearch = data.filter((coffee) =>
        coffee.title.includes(search),
      );
      if (activeType) {
        return filterSearch.filter(
          (coffee) => coffee.type === activeType.title,
        );
      }
      return filterSearch;
    },
    [search, activeType],
  );

  useEffect(() => {
    if (data) setFilteredData(filterData(data));
    else setFilteredData(null);
  }, [data, filterData]);

  return (
    <FilterCoffeeContext.Provider
      value={{
        filteredData,
        setFilteredData,
        search,
        setSearch,
        activeType,
        setActiveType,
      }}
    >
      {children}
    </FilterCoffeeContext.Provider>
  );
}

export default FilterCoffeeProvider;

export function useFilterCoffee() {
  const context = useContext(FilterCoffeeContext);
  if (context === undefined) {
    throw new Error('useCoffee must be used within a CoffeeProvider');
  }
  return context;
}
