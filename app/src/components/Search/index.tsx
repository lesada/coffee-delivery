import { useState } from 'react';

import { Image } from 'react-native';

import { Images } from '@/assets';

import { Container, Icon, Input, Wrapper } from './styles';

function Search() {
  const [field, setField] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Icon
          name="search"
          state={(isFocused && 'focused') || (field && 'filled') || 'default'}
        />
        <Input
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={field}
          onChangeText={(text) => setField(text)}
        />
      </Wrapper>
      <Image source={Images.Beans} />
    </Container>
  );
}

export default Search;
