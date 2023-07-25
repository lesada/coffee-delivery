import { useState } from 'react';

import { Container, Icon, Input } from './styles';

function Search() {
  const [field, setField] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
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
    </Container>
  );
}

export default Search;
