import 'styled-components';

import { colors } from './colors';
import { fonts } from './fonts';
declare module 'styled-components' {
  type ThemeType = {
    colors: typeof colors;
    fonts: typeof fonts;
    containerPadding: number;
  };

  export interface DefaultTheme extends ThemeType {}
}
