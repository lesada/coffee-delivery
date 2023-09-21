import { Feather } from '@expo/vector-icons';
import { styled } from 'styled-components';

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.neutral[1000]};
  font-size: 20px;
`;
