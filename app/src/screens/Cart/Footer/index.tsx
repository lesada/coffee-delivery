import { useNavigation } from '@react-navigation/native';

import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { UseNavigationProp } from '@/types/navigation';

import { Value, Wrapper } from './styles';

type FooterProps = {
  total: number;
};

function Footer({ total }: FooterProps) {
  const navigation = useNavigation<UseNavigationProp>();

  const confirmOrder = () => {
    navigation.navigate('Finish');
  };

  return (
    <Wrapper>
      <Value>
        <Typography size="medium" type="text" color="neutral" variation={200}>
          Total value
        </Typography>
        <Typography
          size="medium"
          type="title"
          color="neutral"
          variation={200}
          bold
        >
          $ {total.toFixed(2)}
        </Typography>
      </Value>
      <Button variant="secondary" onPress={confirmOrder}>
        Confirm order
      </Button>
    </Wrapper>
  );
}

export default Footer;
