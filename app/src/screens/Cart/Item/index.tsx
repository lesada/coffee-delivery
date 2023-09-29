import { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import Quantity from '@/components/Quantity';
import Typography from '@/components/Typography';
import { CardItem } from '@/contexts/cart';
import theme from '@/styles/theme';

import {
  Action,
  Container,
  DeleteButton,
  Photo,
  Price,
  Wrapper,
} from './styles';

function Item({
  image,
  quantity: defaultQuantity,
  size,
  title,
  totalPrice,
}: CardItem) {
  const [quantity, setQuantity] = useState(defaultQuantity);

  return (
    <Container>
      <Photo source={image} />
      <Wrapper>
        <View>
          <Typography size="large" type="text" color="neutral" variation={100}>
            {title}
          </Typography>
          <Typography size="medium" type="text" color="neutral" variation={400}>
            {size}
          </Typography>
        </View>
        <Action>
          <Quantity border quantity={quantity} setQuantity={setQuantity} />
          <DeleteButton>
            <Feather
              name="trash-2"
              size={20}
              color={theme.colors.primary[200]}
            />
          </DeleteButton>
        </Action>
      </Wrapper>
      <Price>
        <Typography
          size="medium"
          type="title"
          color="neutral"
          variation={100}
          bold
        >
          $ {totalPrice.toFixed(2)}
        </Typography>
      </Price>
    </Container>
  );
}

export default Item;
