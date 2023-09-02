import { useEffect, useState } from 'react';

import { API_BASE } from '@env';
import axios from 'axios';

import { TCoffee } from '@/types/coffee';

function useGetCoffees() {
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

  return { loading, data };
}

export default useGetCoffees;
