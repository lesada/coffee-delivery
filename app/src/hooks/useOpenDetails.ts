import { useNavigation } from '@react-navigation/native';

import { UseNavigationProp } from '@/types/navigation';

export const useOpenDetails = () => {
  const navigation = useNavigation<UseNavigationProp>();

  const openDetails = (
    title: string,
    type: string,
    description: string,
    price: string,
  ) => {
    navigation.navigate('CoffeeDetails', {
      title,
      type,
      description,
      price,
    });
  };

  return openDetails;
};
