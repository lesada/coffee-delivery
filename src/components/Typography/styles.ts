import { Text } from 'react-native';
import styled from 'styled-components';

import { TypographyProps } from '.';

const variants = {
  title: {
    extraLarge: 36,
    large: 24,
    medium: 20,
    small: 16,
    extraSmall: 14,
  },
  text: {
    extraLarge: 20,
    large: 16,
    medium: 14,
    small: 12,
  },
};

export const Container = styled(Text)<TypographyProps>`
  color: ${({ theme }) => theme.colors.neutral[1000]};
  font-family: ${({ variant }) => (variant === 'title' ? 'Baloo' : 'Roboto')};
  font-size: ${({ variant, size }) => variants[variant][size]}px;
  line-height: ${({ variant, size }) => variants[variant][size] * 1.3}px;
`;
