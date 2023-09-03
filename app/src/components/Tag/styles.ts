import { Text, View } from 'react-native';
import styled, { css } from 'styled-components';

type TagVariant = 'primary' | 'secondary' | 'tertiary';

export const Container = styled(View)<{ variant: TagVariant }>`
  border-radius: 100px;
  transition: 100ms ease-in;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          border: 1px solid ${theme.colors.primary[200]};
          padding: 6px 12px;
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.primary[200]};
          border: 1px solid ${theme.colors.primary[200]};
          padding: 6px 12px;
        `;
      case 'tertiary':
        return css`
          background-color: ${theme.colors.primary[300]};
          border: 1px solid ${theme.colors.primary[300]};
          padding: 4px 12px;
        `;
    }
  }}
`;

export const Content = styled(Text)<{ variant: TagVariant }>`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.RobotoBold};
  line-height: 13px;
  color: ${({ variant, theme }) =>
    variant === 'secondary'
      ? theme.colors.neutral[1000]
      : theme.colors.primary[100]};
  text-transform: uppercase;
`;
