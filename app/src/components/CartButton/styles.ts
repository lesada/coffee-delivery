import { MaterialIcons } from '@expo/vector-icons/';
import { Text } from 'react-native';
import styled, { css } from 'styled-components';

export const Cart = styled(MaterialIcons)<{ $hasItems: boolean }>`
  color: ${({ theme }) => theme.colors.secondary[100]};
  font-size: 20px;

  ${({ $hasItems }) =>
    $hasItems &&
    css`
      color: ${({ theme }) => theme.colors.primary[200]};
    `}
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
  top: -16px;
  right: -16px;
`;
