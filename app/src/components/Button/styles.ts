import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'styled-components';

type ButtonProps = {
  $variant: 'primary' | 'secondary';
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  padding: 12px 8px;
  border-radius: 6px;
  background-color: ${({ theme, $variant }) => theme.colors[$variant][100]};
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Content = styled(Text)<ButtonProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral[1000]};
`;
