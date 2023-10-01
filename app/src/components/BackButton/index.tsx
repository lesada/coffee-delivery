import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { Icon } from './styles';

type BackButtonProps = {
  variant?: 'light' | 'dark';
};

function BackButton({ variant = 'light' }: BackButtonProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="arrow-left" $variant={variant} />
    </TouchableOpacity>
  );
}

export default BackButton;
