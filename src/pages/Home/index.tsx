import { Text, TouchableOpacity } from 'react-native';

import DefaultLayout from '@/components/DefaultLayout';
import Search from '@/components/Search';
import Typography from '@/components/Typography';

import { Container } from './styles';

function Home() {
  return (
    <DefaultLayout>
      <Container>
        <Typography variant="title" size="medium">
          The perfect coffee for your taste in the palm of your hand
        </Typography>

        <Search />
        <TouchableOpacity>
          <Text>A</Text>
        </TouchableOpacity>
      </Container>
    </DefaultLayout>
  );
}

export default Home;
