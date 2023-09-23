import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  CoffeeDetails: {
    title: string;
    type: string;
    description: string;
    price: string;
  };
};

export type UseNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;
