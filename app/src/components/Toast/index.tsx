import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useToast } from '@/contexts/toast';
import theme from '@/styles/theme';
import { UseNavigationProp } from '@/types/navigation';

import Typography from '../Typography';

import { CartIcon, Container, Icon, Message, Number, Wrapper } from './styles';

function Toast() {
  const { toast, setToast } = useToast();
  const navigation = useNavigation<UseNavigationProp>();

  if (!toast.showToast) return null;

  return (
    <Container
      onPress={() => {
        setToast({
          showToast: false,
          quantity: '0',
          text: '',
        });
        navigation.navigate('Cart');
      }}
    >
      <Icon>
        {toast.quantity !== '0' && <Number>{toast.quantity}</Number>}
        <CartIcon name="shopping-cart" />
      </Icon>
      <Wrapper>
        <Typography size="large" type="text" color="neutral" variation={400}>
          {toast.text}
        </Typography>
      </Wrapper>
      <Message>
        <Typography
          size="large"
          type="text"
          color="primary"
          variation={200}
          bold
          uppercase
        >
          Open
        </Typography>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={theme.colors.primary[200]}
        />
      </Message>
    </Container>
  );
}

export default Toast;
