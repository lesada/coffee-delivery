import { Image, View } from 'react-native';
import styled from 'styled-components';

export const Coffee = styled(View)`
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const Wrapper = styled(View)`
  height: 120%;
  position: absolute;
  bottom: -15%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Photo = styled(Image)`
  object-fit: contain;
  flex: 3;
  min-height: 140px;
`;

export const SmokeAnimation = styled(Image)`
  margin-bottom: -2%;
  min-height: 100px;
  flex: 2;
  object-fit: contain;
  z-index: 2;
`;
