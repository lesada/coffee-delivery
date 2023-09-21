import { Pressable, Text } from 'react-native';
import styled, { css } from 'styled-components';

export const Container = styled(Pressable)<{ $active: boolean }>`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral[700]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[700]};
  border-radius: 6px;
  height: 40px;

  ${({ $active, theme }) =>
    $active &&
    css`
      border: 1px solid ${theme.colors.primary[200]};
      background-color: ${theme.colors.neutral[900]};
    `}
`;

export const Content = styled(Text)<{ $active: boolean }>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[300]};

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.primary[200]};
    `}
`;
