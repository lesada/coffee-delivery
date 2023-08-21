import { PropsWithChildren } from 'react';

import { colors } from '@/styles/colors';

import { Container } from './styles';

export interface TypographyProps extends PropsWithChildren {
  type: 'title' | 'text';
  size: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
  align?: 'left' | 'center' | 'right';
  color?: keyof typeof colors;
  variation?: keyof (typeof colors)['neutral'];
  bold?: boolean;
}

function Typography({ children, ...rest }: TypographyProps) {
  return <Container {...rest}>{children}</Container>;
}

export default Typography;
