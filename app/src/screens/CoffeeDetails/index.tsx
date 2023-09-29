import React, { useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import CartButton from '@/components/CartButton';
import DefaultLayout from '@/components/DefaultLayout';
import Quantity from '@/components/Quantity';
import Tag from '@/components/Tag';
import Typography from '@/components/Typography';
import { useCart } from '@/contexts/cart';
import theme from '@/styles/theme';
import { TCoffee } from '@/types/coffee';

import CoffeeImage from './CoffeeImage';
import SizeButton from './SizeButton';

import {
  Add,
  Header,
  Info,
  Main,
  Options,
  Price,
  PrincipalInfoWrapper,
  Sizes,
  TitleWrapper,
} from './styles';

function CoffeeDetails() {
  const route = useRoute();
  const { items, setItems, setLoading } = useCart();

  const { id, title, type, image, description, price, sizes } =
    route.params as TCoffee;

  const sizesSorted = sizes?.sort(
    (a, b) => parseInt(a.name) - parseInt(b.name),
  );

  const [activeSize, setActiveSize] = useState(sizesSorted[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    try {
      setLoading(true);

      const newCoffee = {
        id,
        image,
        title,
        size: activeSize.name,
        quantity: quantity,
        totalPrice: price * activeSize.priceIncreaseRate,
      };

      setItems(items ? [...items, newCoffee] : [newCoffee]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <StatusBar
        translucent
        backgroundColor={theme.colors.neutral[100]}
        style="light"
      />
      <Header>
        <BackButton />
        <CartButton />
      </Header>
      <Main>
        <Info>
          <PrincipalInfoWrapper>
            <TitleWrapper>
              <Tag variant="dark">{type}</Tag>
              <Typography size="medium" type="title" bold>
                {title}
              </Typography>
            </TitleWrapper>
            <Price>
              <Typography
                size="medium"
                type="text"
                color="secondary"
                variation={100}
              >
                $ {''}
              </Typography>
              <Typography
                size="extraLarge"
                type="title"
                color="secondary"
                variation={100}
                bold
              >
                {(price * activeSize.priceIncreaseRate).toFixed(2)}
              </Typography>
            </Price>
          </PrincipalInfoWrapper>
          <Typography size="large" type="text">
            {description}
          </Typography>
        </Info>
        <CoffeeImage />
      </Main>
      <Options>
        <Typography size="large" type="text" color="neutral" variation={400}>
          Select a size:
        </Typography>
        <Sizes>
          {sizesSorted?.map((size) => (
            <SizeButton
              key={size.id}
              activeSize={activeSize.name}
              onPress={() => setActiveSize(size)}
            >
              {size.name}
            </SizeButton>
          ))}
        </Sizes>
        <Add>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <Button onPress={handleAddToCart}>Add to cart</Button>
        </Add>
      </Options>
    </DefaultLayout>
  );
}

export default CoffeeDetails;
