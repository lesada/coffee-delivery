import { TouchableWithoutFeedback } from 'react-native';

import Tag from '@/components/Tag';
import Typography from '@/components/Typography';
import { useOpenDetails } from '@/hooks/useOpenDetails';
import { TCoffee } from '@/types/coffee';

import { Container, Info, Photo, Price } from './styles';

function Item({ title, type, description, price, image, sizes }: TCoffee) {
  const openDetails = useOpenDetails();

  return (
    <TouchableWithoutFeedback
      onPress={() => openDetails(title, type, description, price, sizes)}
    >
      <Container>
        <Photo source={image} />
        <Tag variant="light"> {type.toUpperCase()} </Tag>
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

export default Item;
