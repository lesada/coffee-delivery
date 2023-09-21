import { useState } from 'react';

import { Image } from 'react-native';

import { Images } from '@/assets';
import { useFilterCoffee } from '@/contexts/filterCoffee';

import { Container, Icon, Input, Wrapper } from './styles';

function Search() {
  const [isFocused, setIsFocused] = useState(false);

  const { search, setSearch } = useFilterCoffee();

  return (
    <Container>
      <Wrapper>
        <Icon
          name="search"
          state={(isFocused && 'focused') || (search && 'filled') || 'default'}
        />
        <Input
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </Wrapper>
      <Image source={Images.Beans} />
    </Container>
  );
}

export default Search;
