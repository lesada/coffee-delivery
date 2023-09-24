declare module '@env' {
  export const API_BASE: string;
}

declare module '*.png' {}
declare module '*.svg' {
  import React from 'react';

  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}
