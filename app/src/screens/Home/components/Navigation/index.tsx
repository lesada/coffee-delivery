import Tag from '@/components/Tag';
import Typography from '@/components/Typography';
import { useCoffeeList } from '@/contexts/coffeeList';
import { useFilterCoffee } from '@/contexts/filterCoffee';
import { TType } from '@/types/type';

import { Filter, Tags, TypeButton } from './styles';

function Navigation() {
  const { types } = useCoffeeList();
  const { activeType, setActiveType } = useFilterCoffee();

  const handleFilter = (type: TType) => {
    setActiveType(type === activeType ? null : type);
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
            <Tag variant={activeType === type ? 'active' : 'outlined'}>
              {type.title}
            </Tag>
          </TypeButton>
        ))}
      </Tags>
    </Filter>
  );
}

export default Navigation;
