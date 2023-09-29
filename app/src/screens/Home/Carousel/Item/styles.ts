import { Image, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  align-items: center;
  justify-content: flex-end;
  gap: 14px;

  padding: 96px 16px 20px;
  width: 208px;
  height: 262px;
  background-color: ${({ theme }) => theme.colors.neutral[800]};
  border-radius: 4px 28px;

  position: relative;
  margin-top: 32px;

  box-sizing: border-box;

  margin: ${({ theme }) => theme.containerPadding}px;
`;

export const Photo = styled(Image)`
  width: 120px;
  height: 120px;
  flex-shrink: 0;

  position: absolute;
  left: 44px;
  top: -32px;
`;

export const Info = styled(View)`
  gap: 3px;
`;

export const Price = styled(View)`
  flex-direction: row;
  align-items: center;
`;
