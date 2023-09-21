import { ActivityIndicator, View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(View)`
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Loading = styled(ActivityIndicator).attrs((props) => ({
  size: 'large',
  color: props.theme.colors.primary[200],
}))``;
