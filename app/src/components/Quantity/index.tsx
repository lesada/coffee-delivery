import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import theme from '@/styles/theme';

import { Container, Number, NumberWrapper, QuantityButton } from './styles';

type QuantityProps = {
  border?: boolean;
};

function Quantity({ border = false }: QuantityProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Container $border={border}>
      <QuantityButton
        onPress={() => setQuantity(quantity - 1)}
        disabled={quantity === 1}
      >
        <Feather
          name="minus"
          size={24}
          color={
            quantity === 1
              ? theme.colors.neutral[400]
              : theme.colors.primary[200]
          }
        />
      </QuantityButton>
      <NumberWrapper>
        <Number>{quantity}</Number>
      </NumberWrapper>
      <QuantityButton onPress={() => setQuantity(quantity + 1)}>
        <Feather name="plus" size={24} color={theme.colors.primary[200]} />
      </QuantityButton>
    </Container>
  );
}

export default Quantity;
