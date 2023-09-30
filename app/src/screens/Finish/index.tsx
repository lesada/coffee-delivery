import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Images } from '@/assets';
import Button from '@/components/Button';
import DefaultLayout from '@/components/DefaultLayout';
import Typography from '@/components/Typography';
import { useCart } from '@/contexts/cart';
import theme from '@/styles/theme';
import { UseNavigationProp } from '@/types/navigation';

import { Container, TextWrapper, Wrapper } from './styles';

function Finish() {
  const navigation = useNavigation<UseNavigationProp>();

  const { setItems } = useCart();

  useEffect(() => {
    setTimeout(() => {
      setItems([]);
    }, 3000);
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <StatusBar
          translucent
          backgroundColor={theme.colors.neutral[800]}
          style="dark"
        />
        <Images.Finish />
        <TextWrapper>
          <Typography
            size="large"
            type="title"
            align="center"
            bold
            color="secondary"
            variation={100}
          >
            Order placed successfully!
          </Typography>
          <Typography
            size="large"
            type="text"
            align="center"
            color="neutral"
            variation={200}
          >
            Now just wait for your order to arrive. Have a good meal!
          </Typography>
        </TextWrapper>
        <Wrapper>
          <Button onPress={() => navigation.navigate('Home')}>
            Go back to home
          </Button>
        </Wrapper>
      </Container>
    </DefaultLayout>
  );
}

export default Finish;
