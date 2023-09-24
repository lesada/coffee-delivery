import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: row;
  flex: 1;
`;

export const NumberWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const Number = styled(Text)`
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-size: 16px;
  text-align: center;
`;

export const QuantityButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
