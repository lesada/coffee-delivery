import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 16px 32px;
  gap: 20px;
  flex-shrink: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const Photo = styled(Image)`
  width: 64px;
  height: 64px;
`;

export const Wrapper = styled(View)`
  gap: 8px;
  flex: 1;
`;

export const Action = styled(View)`
  flex-direction: row;
  gap: 8px;
`;

export const DeleteButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neutral[700]};
  border-radius: 6px;
  padding: 8px;
  aspect-ratio: 1;
`;

export const Price = styled(View)`
  height: 100%;

  align-items: flex-start;
  justify-content: flex-start;
`;
