import { useEffect, useState } from 'react';

import { Images } from '@/assets';
import { Smokes } from '@/assets/Smoke';

import { Coffee, Photo, SmokeAnimation, Wrapper } from './styles';

function CoffeeImage() {
  const [index, setIndex] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 9 : prev - 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Coffee>
      <Wrapper>
        <SmokeAnimation source={Smokes[index]} />
        <Photo source={Images.Coffee} />
      </Wrapper>
    </Coffee>
  );
}

export default CoffeeImage;
