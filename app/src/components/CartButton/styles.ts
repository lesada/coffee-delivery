import { MaterialIcons } from '@expo/vector-icons/';
import styled from 'styled-components';

export const Cart = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.secondary[100]};
  font-size: 20px;
`;
