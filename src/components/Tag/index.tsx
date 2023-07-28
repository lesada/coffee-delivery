import { PropsWithChildren } from 'react';

import { Container, Content } from './styles';

type TagProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
} & PropsWithChildren;

function Tag({ children, variant = 'primary' }: TagProps) {
  return (
    <Container variant={variant}>
      <Content variant={variant}> {children}</Content>
    </Container>
  );
}

export default Tag;
