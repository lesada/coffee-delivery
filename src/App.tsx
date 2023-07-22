import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Baloo2_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
