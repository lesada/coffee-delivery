import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';

interface IconProps {
  state: 'focused' | 'filled' | 'default';
}

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.neutral[200]};
  padding: 12px;
  border-radius: 8px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: 18px;
  color: ${({ theme, state }) =>
    state === 'focused'
      ? theme.colors.secondary[200]
      : state === 'filled'
      ? theme.colors.secondary[100]
      : theme.colors.neutral[400]};
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.neutral[400],
  cursorColor: theme.colors.neutral[400],
}))`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-weight: 400;

  font-family: ${({ theme }) => theme.fonts.Roboto};
`;
