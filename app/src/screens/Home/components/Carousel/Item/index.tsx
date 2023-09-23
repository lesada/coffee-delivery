import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';

import Tag from '@/components/Tag';
import Typography from '@/components/Typography';

import { ProfileScreenNavigationProp } from '../../../../../../App';

import { Container, Info, Photo, Price } from './styles';

type ItemProps = {
  title: string;
  type: string;
  description: string;
  price: string;
  image: typeof import('*.png');
};

function Item({ title, type, description, price, image }: ItemProps) {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const openItemDetails = () => {
    navigation.navigate('CoffeeDetails', {
      title,
      type,
      description,
      price,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={openItemDetails}>
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
