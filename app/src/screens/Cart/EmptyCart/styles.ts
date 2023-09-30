import { View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(View)`
  padding: ${({ theme }) => theme.containerPadding}px;
  gap: 32px;
  align-items: center;
`;

export const Info = styled(View)`
  align-items: center;
  gap: 8px;
`;

export const Wrapper = styled(View)`
  flex-direction: row;
`;
