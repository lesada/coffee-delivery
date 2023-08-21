import { PropsWithChildren } from 'react';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function DefaultLayout({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={{
        paddingTop: insets.top,
      }}
    >
      {children}
    </SafeAreaProvider>
  );
}

export default DefaultLayout;
