import { useState } from 'react';

import Tag from '@/components/Tag';
import Typography from '@/components/Typography';
import { useCoffeeList } from '@/contexts/coffeeList';
import { TType } from '@/types/type';

import { Filter, Tags, TypeButton } from './styles';

function Navigation() {
  const [activeType, setActiveType] = useState<TType | null>(null);

  const { types, data, setFilteredData } = useCoffeeList();

  const handleFilter = (type: TType) => {
    if (type === activeType) {
      setActiveType(null);
      setFilteredData(data);
    } else {
      setActiveType(type);
      const filteredData = data?.filter((coffee) => coffee.type === type.title);

      setFilteredData(filteredData || null);
    }
  };

  return (
    <Filter>
      <Typography
        size="small"
        color="neutral"
        variation={300}
        type="title"
        bold
      >
        Our Coffees
      </Typography>
      <Tags>
        {types?.map((type) => (
          <TypeButton key={type.id} onPress={() => handleFilter(type)}>
            <Tag variant={activeType === type ? 'secondary' : 'primary'}>
              {type.title}
            </Tag>
          </TypeButton>
        ))}
      </Tags>
    </Filter>
  );
}

export default Navigation;
