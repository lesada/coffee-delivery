import { PropsWithChildren } from 'react';

import { Container, Content } from './styles';

export type TagVariant = 'outlined' | 'light' | 'active' | 'dark';

type TagProps = {
  variant?: TagVariant;
} & PropsWithChildren;

function Tag({ children, variant = 'outlined' }: TagProps) {
  return (
    <Container variant={variant}>
      <Content variant={variant}> {children}</Content>
    </Container>
  );
}

export default Tag;
