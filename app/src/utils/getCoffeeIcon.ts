import { Images } from '@/assets';

export const getCoffeeIcon = (title: string) => {
  return Images[title.replace(/\s/g, '')] || Images.AmericanoCoffee;
};
