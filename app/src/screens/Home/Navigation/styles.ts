import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Filter = styled(View)`
  gap: 12px;
  padding: 16px ${({ theme }) => theme.containerPadding}px;
  background-color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const Tags = styled(View)`
  flex-direction: row;
  gap: 8px;
`;

export const TypeButton = styled(TouchableOpacity)`
  align-self: flex-start;
`;
