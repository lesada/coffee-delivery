import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import { Images } from '@/assets';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import CartButton from '@/components/CartButton';
import DefaultLayout from '@/components/DefaultLayout';
import Tag from '@/components/Tag';
import Typography from '@/components/Typography';
import theme from '@/styles/theme';

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

function CoffeeDetails() {
  const [activeSize, setActiveSize] = useState<string>('140ml');
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
              <Tag variant="dark">Special</Tag>
              <Typography size="medium" type="title" bold>
                Irish Coffee
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
                9,90
              </Typography>
            </Price>
          </PrincipalInfoWrapper>
          <Typography size="large" type="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eros
            lorem
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
          <SizeButton
            activeSize={activeSize}
            onPress={() => setActiveSize('114ml')}
          >
            114ml
          </SizeButton>
          <SizeButton
            activeSize={activeSize}
            onPress={() => setActiveSize('140ml')}
          >
            140ml
          </SizeButton>
          <SizeButton
            activeSize={activeSize}
            onPress={() => setActiveSize('227ml')}
          >
            227ml
          </SizeButton>
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
