import Button from '@/components/Button';
import Typography from '@/components/Typography';

import { Value, Wrapper } from './styles';

function Footer() {
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
          $ 9.00
        </Typography>
      </Value>
      <Button variant="secondary">Confirm order</Button>
    </Wrapper>
  );
}

export default Footer;
