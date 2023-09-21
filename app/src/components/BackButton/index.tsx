import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { Icon } from './styles';

function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="arrow-left" />
    </TouchableOpacity>
  );
}

export default BackButton;
