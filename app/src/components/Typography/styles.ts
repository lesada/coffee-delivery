import { Text } from 'react-native';
import styled from 'styled-components';

import { TypographyProps } from '.';

const types = {
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
    extraSmall: 10,
  },
};

export const Container = styled(Text)<TypographyProps>`
  color: ${({ color, variation, theme }) => {
    if (color && variation && theme.colors[color][variation]) {
      return theme.colors[color][variation];
    } else {
      return theme.colors.neutral[1000];
    }
  }};

  font-family: ${({ type, bold, theme }) => {
    if (bold) {
      return type === 'title' ? theme.fonts.BalooBold : theme.fonts.RobotoBold;
    }
    return type === 'title' ? theme.fonts.Baloo : theme.fonts.Roboto;
  }};

  font-size: ${({ type, size }) => types[type][size]}px;
  line-height: ${({ type, size }) => types[type][size] * 1.3}px;
  text-align: ${({ align }) => align || 'left'};

  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}
`;
