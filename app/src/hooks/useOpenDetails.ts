import { useNavigation } from '@react-navigation/native';

import { TCoffee } from '@/types/coffee';
import { UseNavigationProp } from '@/types/navigation';

export const useOpenDetails = () => {
  const navigation = useNavigation<UseNavigationProp>();

  const openDetails = ({
    title,
    description,
    id,
    image,
    price,
    sizes,
    type,
  }: TCoffee) => {
    navigation.navigate('CoffeeDetails', {
      title,
      description,
      id,
      image,
      price,
      sizes,
      type,
    });
  };

  return openDetails;
};
