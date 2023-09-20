import { View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(View)`
  gap: 16px;
  padding: 0 ${({ theme }) => theme.containerPadding}px;
`;

export const Wrapper = styled(View)`
  gap: 32px;
`;
