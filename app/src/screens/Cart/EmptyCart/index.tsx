import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Button from '@/components/Button';
import DefaultLayout from '@/components/DefaultLayout';
import Typography from '@/components/Typography';
import theme from '@/styles/theme';
import { UseNavigationProp } from '@/types/navigation';

import { Container, Info, Wrapper } from './styles';

function EmptyCart() {
  const navigation = useNavigation<UseNavigationProp>();

  return (
    <DefaultLayout>
      <Container>
        <Info>
          <FontAwesome
            name="shopping-cart"
            color={theme.colors.neutral[400]}
            size={24}
          />
          <Typography
            size="large"
            type="text"
            color="neutral"
            variation={400}
            align="center"
          >
            Your cart is empty
          </Typography>
        </Info>
        <Wrapper>
          <Button onPress={() => navigation.navigate('Home')}>
            Check our products
          </Button>
        </Wrapper>
      </Container>
    </DefaultLayout>
  );
}

export default EmptyCart;
