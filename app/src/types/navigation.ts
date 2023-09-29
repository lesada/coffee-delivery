import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TCoffee } from './coffee';

export type RootStackParamList = {
  Home: undefined;
  CoffeeDetails: TCoffee;
  Cart: undefined;
};

export type UseNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;
