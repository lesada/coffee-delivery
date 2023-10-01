import { View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-shrink: 0;

  height: 76px;
  padding: 26px 0;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const WrapperBackButton = styled(View)`
  position: absolute;
  left: 24px;
  top: 26px;
`;
