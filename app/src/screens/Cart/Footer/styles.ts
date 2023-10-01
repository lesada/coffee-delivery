import { View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)`
  background-color: ${({ theme }) => theme.colors.neutral[1000]};
  gap: 20px;
  padding: 28px 32px;
`;

export const Value = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
