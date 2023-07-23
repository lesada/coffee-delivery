import DefaultLayout from '@/components/DefaultLayout';
import Typography from '@/components/Typography';

import { Background } from './styles';

function Home() {
  return (
    <DefaultLayout>
      <Background>
        <Typography variant="title" size="extraLarge">
          Hello world
        </Typography>
      </Background>
    </DefaultLayout>
  );
}

export default Home;
