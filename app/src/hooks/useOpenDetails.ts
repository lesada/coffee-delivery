import { useNavigation } from '@react-navigation/native';

import { UseNavigationProp } from '@/types/navigation';
import { Size } from '@/types/size';

export const useOpenDetails = () => {
  const navigation = useNavigation<UseNavigationProp>();

  const openDetails = (
    title: string,
    type: string,
    description: string,
    price: string,
    sizes: Size[],
  ) => {
    navigation.navigate('CoffeeDetails', {
      title,
      type,
      description,
      price,
      sizes,
    });
  };

  return openDetails;
};
