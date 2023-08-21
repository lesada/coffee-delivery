import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Icon = styled(MaterialIcons)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary[200]};
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.neutral[400],
  cursorColor: theme.colors.neutral[400],
  selectionColor: theme.colors.primary[200],
}))`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Roboto};
`;
