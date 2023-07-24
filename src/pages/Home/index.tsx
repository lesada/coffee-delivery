import DefaultLayout from '@/components/DefaultLayout';
import Typography from '@/components/Typography';

import { Container, Search, SearchIcon, SearchInput } from './styles';

function Home() {
  return (
    <DefaultLayout>
      <Container>
        <Typography variant="title" size="medium">
          The perfect coffee for your taste in the palm of your hand
        </Typography>

        <Search>
          <SearchIcon name="search" size={24} color="black" />
          <SearchInput placeholder="Search" />
        </Search>
      </Container>
    </DefaultLayout>
  );
}

export default Home;
