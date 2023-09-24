import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Size } from './size';

export type RootStackParamList = {
  Home: undefined;
  CoffeeDetails: {
    title: string;
    type: string;
    description: string;
    price: number;
    sizes: Size[];
  };
};

export type UseNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;
