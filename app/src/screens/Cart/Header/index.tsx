import BackButton from '@/components/BackButton';
import Typography from '@/components/Typography';

import { Wrapper, WrapperBackButton } from './styles';

function Header() {
  return (
    <Wrapper>
      <WrapperBackButton>
        <BackButton variant="dark" />
      </WrapperBackButton>
      <Typography
        size="medium"
        type="title"
        align="center"
        bold
        color="neutral"
        variation={200}
      >
        Cart
      </Typography>
    </Wrapper>
  );
}

export default Header;
