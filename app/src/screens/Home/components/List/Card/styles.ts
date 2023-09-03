import { Image, View } from 'react-native';
import { styled } from 'styled-components';

export const Container = styled(View)`
  position: relative;
  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[700]};
  background: ${({ theme }) => theme.colors.neutral[800]};
  min-height: 120px;
  padding: 16px 16px 13px 116px;
  gap: 8px;
`;

export const Photo = styled(Image)`
  position: absolute;
  top: -16px;
  left: 8px;
`;

export const Wrapper = styled(View)`
  gap: 4px;
`;

export const Price = styled(View)`
  flex-direction: row;
  align-items: baseline;
`;
