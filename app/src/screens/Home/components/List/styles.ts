import { TouchableOpacity, View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(View)`
  gap: 16px;
`;

export const Filter = styled(View)`
  gap: 12px;
  padding: 16px 0;
`;

export const TypeButton = styled(TouchableOpacity)`
  align-self: flex-start;
`;

export const Wrapper = styled(View)`
  gap: 32px;
`;
