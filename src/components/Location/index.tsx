import React from 'react';

import { Container, Icon, Input } from './styles';

function Location() {
  return (
    <Container>
      <Icon name="location-on" />
      <Input
        placeholder="Search"
        defaultValue="Porto Alegre, RS"
        editable={false}
      />
    </Container>
  );
}

export default Location;
