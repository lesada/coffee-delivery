import { View } from 'react-native';
import styled from 'styled-components';

export const Background = styled(View)`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;
