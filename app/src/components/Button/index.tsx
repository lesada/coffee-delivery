import { PropsWithChildren } from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, Content } from './styles';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & TouchableOpacityProps &
  PropsWithChildren;

function Button({ children, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <Container {...rest} $variant={variant}>
      <Content $variant={variant}>{children}</Content>
    </Container>
  );
}

export default Button;
