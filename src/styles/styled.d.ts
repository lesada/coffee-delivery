import 'styled-components';

import { colors } from './colors';
import { fonts } from './fonts';
declare module 'styled-components' {
  type ThemeType = {
    colors: typeof colors;
    fonts: typeof fonts;
  };

  export interface DefaultTheme extends ThemeType {}
}
