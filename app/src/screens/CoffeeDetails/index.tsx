import React, { useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Images } from '@/assets';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import CartButton from '@/components/CartButton';
import DefaultLayout from '@/components/DefaultLayout';
import Tag from '@/components/Tag';
import Typography from '@/components/Typography';
import theme from '@/styles/theme';
import { Size } from '@/types/size';

import Quantity from './Quantity';
import SizeButton from './SizeButton';

import {
  Add,
  Coffee,
  Header,
  Info,
  Main,
  Options,
  Photo,
  Price,
  PrincipalInfoWrapper,
  Sizes,
  TitleWrapper,
} from './styles';

type CoffeeDetailsParams = {
  title: string;
  type: string;
  description: string;
  price: string;
  sizes: Size[];
};

function CoffeeDetails() {
  const route = useRoute();
  const { title, type, description, price, sizes } =
    route.params as CoffeeDetailsParams;

  const sizesSorted = sizes?.sort(
    (a, b) => parseInt(a.name) - parseInt(b.name),
  );

  const [activeSize, setActiveSize] = useState(sizesSorted[1].name);

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
                {price}
              </Typography>
            </Price>
          </PrincipalInfoWrapper>
          <Typography size="large" type="text">
            {description}
          </Typography>
        </Info>
        <Coffee>
          <Photo source={Images.Coffee} />
        </Coffee>
      </Main>
      <Options>
        <Typography size="large" type="text" color="neutral" variation={400}>
          Select a size:
        </Typography>
        <Sizes>
          {sizesSorted?.map((size) => (
            <SizeButton
              key={size.id}
              activeSize={activeSize}
              onPress={() => setActiveSize(size.name)}
            >
              {size.name}
            </SizeButton>
          ))}
        </Sizes>
        <Add>
          <Quantity />
          <Button>Add to cart</Button>
        </Add>
      </Options>
    </DefaultLayout>
  );
}

export default CoffeeDetails;
