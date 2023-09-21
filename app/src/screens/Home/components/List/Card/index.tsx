import Typography from '@/components/Typography';

import { Container, Photo, Price, Wrapper } from './styles';

type CardProps = {
  title: string;
  description: string;
  price: string;
  image: typeof import('*.png');
};

function Card({ title, description, price, image }: CardProps) {
  return (
    <Container>
      <Photo source={image} />
      <Wrapper>
        <Typography
          size="small"
          color="neutral"
          variation={200}
          type="title"
          bold
        >
          {title}
        </Typography>
        <Typography size="small" color="neutral" variation={400} type="text">
          {description}
        </Typography>
      </Wrapper>
      <Price>
        <Typography size="medium" type="text" color="secondary" variation={100}>
          $ {''}
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
