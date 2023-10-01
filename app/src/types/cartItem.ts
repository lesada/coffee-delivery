export type CardItem = {
  id: string;
  image: typeof import('*.png');
  title: string;
  size: string;
  quantity: number;
  unitPrice: number;
};
