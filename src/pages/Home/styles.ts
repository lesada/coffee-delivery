import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  gap: 16px;

  padding: 32px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Cart = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.secondary[200]};
  font-size: 20px;
`;
