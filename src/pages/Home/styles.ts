import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  gap: 16px;

  padding: 32px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const Search = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.neutral[200]};
  padding: 12px;
  border-radius: 8px;
`;

export const SearchIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'search',
  size: 18,
  color: theme.colors.neutral[400],
}))``;

export const SearchInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.neutral[400],
  cursorColor: theme.colors.neutral[400],
}))`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-weight: 400;

  font-family: 'Roboto';
`;
