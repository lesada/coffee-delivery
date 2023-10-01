import { Feather } from '@expo/vector-icons';
import { styled } from 'styled-components';

export const Icon = styled(Feather)<{ $variant: 'light' | 'dark' }>`
  color: ${({ theme, $variant }) =>
    theme.colors.neutral[$variant === 'light' ? 1000 : 100]};
  font-size: 20px;
`;
