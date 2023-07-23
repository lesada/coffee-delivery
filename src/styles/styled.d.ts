import 'styled-components';
import { colors } from './colors';

declare module 'styled-components' {
  type ThemeType = {
    colors: typeof colors;
  };

  export interface DefaultTheme extends ThemeType {}
}
