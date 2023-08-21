import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import styled from 'styled-components';

export const Background = styled(View)`
  gap: 16px;

  padding: ${({ theme }) => theme.containerPadding}px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Cart = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.secondary[100]};
  font-size: 20px;
`;
