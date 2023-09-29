import { Text, TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components';

export const Container = styled(View)<{ $border: boolean }>`
  flex-direction: row;

  ${({ $border, theme }) =>
    $border &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.neutral[700]};
      border-radius: 6px;
    `}
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
