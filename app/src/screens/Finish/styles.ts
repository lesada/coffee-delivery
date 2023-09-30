import { View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex: 1;
  padding: 0 48px;
`;

export const TextWrapper = styled(View)`
  gap: 12px;
`;

export const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
