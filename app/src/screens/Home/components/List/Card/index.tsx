import { TouchableWithoutFeedback } from 'react-native';

import Typography from '@/components/Typography';
import { useOpenDetails } from '@/hooks/useOpenDetails';
import { TCoffee } from '@/types/coffee';

import { Container, Photo, Price, Wrapper } from './styles';

function Card({ title, type, description, price, image }: TCoffee) {
  const openDetails = useOpenDetails();

  return (
    <TouchableWithoutFeedback
      onPress={() => openDetails(title, type, description, price)}
    >
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
          <Typography
            size="medium"
            type="text"
            color="secondary"
            variation={100}
          >
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
    </TouchableWithoutFeedback>
  );
}

export default Card;
