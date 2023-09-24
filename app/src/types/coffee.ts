import { Size } from './size';

export type TCoffee = {
  id: string;
  title: string;
  type: string;
  price: number;
  description: string;
  image: typeof import('*.png');
  sizes: Size[];
};
