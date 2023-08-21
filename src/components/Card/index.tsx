import { ImageSourcePropType } from 'react-native';

import Tag from '../Tag';
import Typography from '../Typography';

import { Container, Info, Photo, Price } from './styles';

type CardProps = {
  image: ImageSourcePropType;
  title: string;
  type: string;
  description: string;
  price: string;
};

function Card({ image, title, type, description, price }: CardProps) {
  return (
    <Container>
      <Photo source={image} />
      <Tag variant="tertiary"> {type.toUpperCase()} </Tag>
      <Info>
        <Typography
          size="medium"
          type="title"
          color="neutral"
          variation={200}
          align="center"
          bold
        >
          {title}
        </Typography>
        <Typography
          size="extraSmall"
          type="text"
          color="neutral"
          variation={400}
          align="center"
        >
          {description}
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
          {price}
        </Typography>
      </Price>
    </Container>
  );
}

export default Card;
