import { Image, View } from 'react-native';
import { styled } from 'styled-components';

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px ${({ theme }) => theme.containerPadding}px;

  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const Main = styled(View)`
  justify-content: space-between;
  gap: 32px;
  padding: 42px ${({ theme }) => theme.containerPadding}px 12px;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.neutral[100]};
  z-index: 1;
`;

export const Info = styled(View)`
  gap: 20px;
`;

export const TitleWrapper = styled(View)`
  align-items: flex-start;
  gap: 12px;
`;

export const PrincipalInfoWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Coffee = styled(View)`
  align-items: center;
  flex: 1;
`;

export const Photo = styled(Image)`
  bottom: -17.5%;
  width: 100%;
  height: 100%;
  aspect-ratio: 295/260;
  min-width: 180px;
`;

export const Options = styled(View)`
  align-items: flex-start;
  justify-content: space-between;
  padding: 42px ${({ theme }) => theme.containerPadding}px;

  background-color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const Sizes = styled(View)`
  flex-direction: row;
  gap: 8px;
  margin: 12px auto 20px;
`;

export const Add = styled(View)`
  flex-direction: row;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors.neutral[700]};
  border-radius: 6px;
  width: 100%;
  padding: 8px;
`;
