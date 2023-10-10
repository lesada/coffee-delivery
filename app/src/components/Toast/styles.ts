import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.neutral[1000]};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.neutral[800]};

  position: absolute;
  z-index: 99;
  bottom: 0;
`;

export const Icon = styled(View)`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 6px;
`;

export const CartIcon = styled(MaterialIcons)`
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  color: ${({ theme }) => theme.colors.neutral[1000]};
  font-size: 24px;
`;

export const Wrapper = styled(View)`
  flex: 1;
`;

export const Number = styled(Text)`
  color: ${({ theme }) => theme.colors.neutral[1000]};
  font-size: 12px;
  text-align: center;

  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary[200]};
  border-radius: 10px;
  padding: 2px;

  position: absolute;
  top: -8px;
  right: -8px;
`;

export const Message = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
