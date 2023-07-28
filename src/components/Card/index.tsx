import Coffee from '@/assets/coffee.png';

import Tag from '../Tag';
import Typography from '../Typography';

import { Container, Info, Photo, Price } from './styles';

function Card() {
  return (
    <Container>
      <Photo source={Coffee} />
      <Tag variant="tertiary"> TRADICIONAL </Tag>
      <Info>
        <Typography
          size="medium"
          type="title"
          color="neutral"
          variation={200}
          align="center"
          bold
        >
          Latte
        </Typography>
        <Typography
          size="extraSmall"
          type="text"
          color="neutral"
          variation={400}
          align="center"
        >
          Espresso with double the amount of milk and creamy foam
        </Typography>
      </Info>
      <Price>
        <Typography
          size="extraSmall"
          type="text"
          color="secondary"
          variation={100}
        >
          R$ {''}
        </Typography>
        <Typography
          size="medium"
          type="title"
          color="secondary"
          variation={100}
          bold
        >
          9,90
        </Typography>
      </Price>
    </Container>
  );
}

export default Card;
