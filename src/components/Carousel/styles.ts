import { View } from 'react-native';
import styled from 'styled-components/native';

import { SPACING } from '.';

export const Container = styled(View)`
  margin-top: -94px;
  padding: 0 ${({ theme }) => theme.containerPadding}px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: SPACING, // Assuming SPACING is defined
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  bounces: false,
  snapToAlignment: 'start',
})``;
