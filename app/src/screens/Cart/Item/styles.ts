import { View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)`
  flex-direction: row;
  padding: 16px 32px;
  gap: 20px;
  flex-shrink: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.neutral[700]};
`;
