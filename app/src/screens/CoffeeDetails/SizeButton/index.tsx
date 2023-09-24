import { PropsWithChildren } from 'react';

import { PressableProps } from 'react-native';

import { Container, Content } from './styles';

type SizeButtonProps = {
  activeSize: string;
} & PropsWithChildren<PressableProps>;

function SizeButton({ children, activeSize, ...rest }: SizeButtonProps) {
  return (
    <Container $active={activeSize === children} {...rest}>
      <Content $active={activeSize === children}>{children}</Content>
    </Container>
  );
}

export default SizeButton;
