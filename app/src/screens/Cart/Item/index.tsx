import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { Images } from '@/assets';
import Quantity from '@/components/Quantity';
import Typography from '@/components/Typography';
import theme from '@/styles/theme';

import {
  Action,
  Container,
  DeleteButton,
  Photo,
  Price,
  Wrapper,
} from './styles';

function Item() {
  return (
    <Container>
      <Photo source={Images.AmericanoCoffee} />
      <Wrapper>
        <View>
          <Typography size="large" type="text" color="neutral" variation={100}>
            Irish Coffee
          </Typography>
          <Typography size="medium" type="text" color="neutral" variation={400}>
            224ml
          </Typography>
        </View>
        <Action>
          <Quantity border />
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
          $ 3.50
        </Typography>
      </Price>
    </Container>
  );
}

export default Item;
