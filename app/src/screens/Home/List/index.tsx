import React from 'react';

import Loader from '@/components/Loader';
import Typography from '@/components/Typography';
import { useCoffeeList } from '@/contexts/coffeeList';

import Card from './Card';

import { Container, Wrapper } from './styles';

function List() {
  const { loading, types, filteredData } = useCoffeeList();

  if (loading) return <Loader />;
  if (filteredData?.length === 0)
    return (
      <Container>
        <Typography
          size="extraSmall"
          color="neutral"
          variation={400}
          type="title"
          bold
        >
          Couldn't find any coffee with this filter and/or search :(
        </Typography>
      </Container>
    );

  return (
    <Container>
      {types?.map((type) => {
        return (
          filteredData?.some((coffee) => coffee.type === type.title) && (
            <Wrapper key={type.id}>
              <Typography
                size="extraSmall"
                color="neutral"
                variation={400}
                type="title"
                bold
              >
                {type.title}
              </Typography>

              {filteredData
                ?.sort((a, b) => a.title.localeCompare(b.title))
                .filter((coffee) => coffee.type === type.title)
                .map((coffee) => <Card key={coffee.id} {...coffee} />)}
            </Wrapper>
          )
        );
      })}
    </Container>
  );
}

export default List;
