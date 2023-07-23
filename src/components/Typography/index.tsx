import { PropsWithChildren } from 'react';

import { Container } from './styles';

export interface TypographyProps extends PropsWithChildren {
  variant: 'title' | 'text';
  size: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
}

function Typography({ children, ...rest }: TypographyProps) {
  return <Container {...rest}>{children}</Container>;
}

export default Typography;
