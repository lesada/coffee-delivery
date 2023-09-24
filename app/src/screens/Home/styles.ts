import { View } from 'react-native';
import styled from 'styled-components';

export const Background = styled(View)`
  background-color: ${({ theme }) => theme.colors.neutral[900]};
  flex: 1;
`;

export const Header = styled(View)`
  gap: 16px;
  padding: ${({ theme }) => theme.containerPadding}px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
