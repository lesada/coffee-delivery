import { View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  gap: 16px;

  padding: 32px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;
