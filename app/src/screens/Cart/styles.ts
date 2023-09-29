import { View } from 'react-native';
import { styled } from 'styled-components';

export const Background = styled(View)`
  background-color: ${({ theme }) => theme.colors.neutral[900]};
  flex: 1;
  position: relative;
  flex-direction: column;
`;
