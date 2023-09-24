import { Text, View } from 'react-native';
import styled, { css } from 'styled-components';

import { TagVariant } from '.';

export const Container = styled(View)<{ variant: TagVariant }>`
  border-radius: 100px;
  transition: 100ms ease-in;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'outlined':
        return css`
          border: 1px solid ${theme.colors.primary[200]};
          padding: 6px 12px;
        `;
      case 'active':
        return css`
          background-color: ${theme.colors.primary[200]};
          border: 1px solid ${theme.colors.primary[200]};
          padding: 6px 12px;
        `;
      case 'light':
        return css`
          background-color: ${theme.colors.primary[300]};
          border: 1px solid ${theme.colors.primary[300]};
          padding: 4px 12px;
        `;
      case 'dark':
        return css`
          background-color: ${theme.colors.neutral[200]};
          border: 1px solid ${theme.colors.neutral[200]};
          padding: 6px 12px;
        `;
    }
  }}
`;

export const Content = styled(Text)<{ variant: TagVariant }>`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.RobotoBold};
  line-height: 13px;
  text-transform: uppercase;

  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'light':
      case 'outlined':
        return theme.colors.primary[100];
      case 'active':
      case 'dark':
        return theme.colors.neutral[1000];
    }
  }};
`;
